import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { getOrCreateDeviceSession } from '@/services/api/deviceSession';
import { mapApiError } from '@/services/api/errorMapper';
import { getMyTickets } from '@/services/api/queueApi';
import type { QueueTicket } from '@/types/ticket';

export default function TicketActiveScreen() {
  const params = useLocalSearchParams<{ ticketId?: string }>();
  const requestedTicketId = typeof params.ticketId === 'string' ? params.ticketId : undefined;
  const [ticket, setTicket] = useState<QueueTicket | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const loadTicket = useCallback(async () => {
    setLoading(true);
    setErrorMessage('');

    try {
      const session = await getOrCreateDeviceSession();
      const tickets = await getMyTickets(session.deviceSessionToken);
      const selectedTicket = requestedTicketId
        ? tickets.find(item => item.id === requestedTicketId)
        : tickets.find(item => item.number > item.queue.currentServingNumber) ?? tickets[0];

      setTicket(selectedTicket ?? null);
    } catch (error) {
      setErrorMessage(mapApiError(error).message);
    } finally {
      setLoading(false);
    }
  }, [requestedTicketId]);

  useFocusEffect(useCallback(() => {
    void loadTicket();
  }, [loadTicket]));

  const peopleAhead = ticket
    ? Math.max(0, ticket.number - ticket.queue.currentServingNumber - 1)
    : 0;
  const estimatedWaitMinutes = ticket
    ? peopleAhead * ticket.queue.averageServiceTimeMin
    : 0;
  const isWaiting = ticket
    ? ticket.number > ticket.queue.currentServingNumber
    : false;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.replace('/home')} style={styles.btnNav}>
            <Text style={styles.btnText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Mi turno</Text>
          <TouchableOpacity
            onPress={() => void loadTicket()}
            style={styles.btnNav}
          >
            <Text style={styles.btnText}>↻</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={styles.messageCard}>
            <ActivityIndicator color="#1B4DE4" />
            <Text style={styles.messageText}>Cargando turno…</Text>
          </View>
        ) : errorMessage ? (
          <View style={styles.messageCard}>
            <Text style={styles.errorText}>{errorMessage}</Text>
            <TouchableOpacity onPress={() => void loadTicket()}>
              <Text style={styles.retryText}>Reintentar</Text>
            </TouchableOpacity>
          </View>
        ) : !ticket ? (
          <View style={styles.messageCard}>
            <Text style={styles.messageText}>No encontramos ese turno.</Text>
            <TouchableOpacity onPress={() => router.replace('/home')}>
              <Text style={styles.retryText}>Volver al inicio</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={styles.card}>
              <View style={styles.cardTop}>
                <Text style={styles.ticketNumber}>{ticket.number}</Text>
                <View style={[styles.badge, !isWaiting && styles.badgeReached]}>
                  <View style={[styles.badgeDot, !isWaiting && styles.badgeDotReached]} />
                  <Text style={[styles.badgeText, !isWaiting && styles.badgeTextReached]}>
                    {isWaiting ? 'EN ESPERA' : 'TURNO ALCANZADO'}
                  </Text>
                </View>
              </View>
              <View style={styles.divider} />

              <View style={styles.timeSection}>
                <Text style={styles.etaValue}>~ {estimatedWaitMinutes} min</Text>
                <Text style={styles.etaLabel}>Tiempo aproximado</Text>
              </View>

              <View style={styles.aheadSection}>
                <Text style={styles.aheadText}>{peopleAhead} personas antes que tú</Text>
              </View>
              <View style={styles.divider} />

              <View style={styles.detailsRow}>
                <Text style={styles.detailLabel}>Fila</Text>
                <Text style={styles.detailValue}>{ticket.queue.name}</Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.detailLabel}>Hora de creación</Text>
                <Text style={styles.detailValueMono}>
                  {new Date(ticket.createdAt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Text>
              </View>
            </View>

            <View style={styles.noteBanner}>
              <Text style={styles.noteText}>
                {isWaiting
                  ? 'La posición y el tiempo se calculan con el número actual de la fila. Actualiza para consultar los datos más recientes.'
                  : 'La API todavía no informa si este turno está siendo atendido o ya fue completado.'}
              </Text>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F6F7F9' },
  container: { padding: 18, paddingBottom: 30, flexGrow: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 },
  btnNav: { width: 42, height: 42, borderRadius: 13, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E3E6EC', alignItems: 'center', justifyContent: 'center' },
  btnText: { fontSize: 20, color: '#12141A' },
  headerTitle: { fontSize: 19, fontWeight: 'bold', color: '#12141A', flex: 1, textAlign: 'center' },
  card: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E3E6EC', borderRadius: 22, padding: 24, shadowColor: '#12141A', shadowOpacity: 0.06, shadowOffset: { width: 0, height: 2 }, shadowRadius: 6, elevation: 2 },
  cardTop: { alignItems: 'center', marginBottom: 18 },
  ticketNumber: { fontSize: 68, fontWeight: 'bold', color: '#12141A', fontFamily: 'monospace', letterSpacing: -1 },
  badge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6F4EC', paddingHorizontal: 14, paddingVertical: 9, borderRadius: 20, marginTop: 12 },
  badgeDot: { width: 9, height: 9, borderRadius: 4.5, backgroundColor: '#0E7A4F', marginRight: 8 },
  badgeText: { fontSize: 13, fontWeight: 'bold', color: '#0E7A4F' },
  badgeReached: { backgroundColor: '#FDF2DC' },
  badgeDotReached: { backgroundColor: '#7A4E05' },
  badgeTextReached: { color: '#7A4E05' },
  divider: { height: 1, backgroundColor: '#E3E6EC', width: '100%', marginVertical: 18 },
  timeSection: { alignItems: 'center' },
  etaValue: { fontSize: 34, fontWeight: 'bold', color: '#1B4DE4', fontFamily: 'monospace' },
  etaLabel: { fontSize: 15, fontWeight: '600', color: '#5A606C', marginTop: 6 },
  aheadSection: { backgroundColor: '#F6F7F9', borderRadius: 14, padding: 16, alignItems: 'center', marginTop: 18 },
  aheadText: { fontSize: 17, fontWeight: 'bold', color: '#12141A', textAlign: 'center' },
  detailsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 11 },
  detailLabel: { fontSize: 14, color: '#5A606C' },
  detailValue: { fontSize: 14, fontWeight: 'bold', color: '#12141A', flexShrink: 1, textAlign: 'right' },
  detailValueMono: { fontSize: 14, fontWeight: 'bold', color: '#12141A', fontFamily: 'monospace' },
  noteBanner: { backgroundColor: '#EBEFFE', borderRadius: 14, padding: 14, marginTop: 14 },
  noteText: { fontSize: 13, fontWeight: '500', color: '#1A2A5E', lineHeight: 19 },
  messageCard: { flex: 1, minHeight: 180, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E3E6EC', borderRadius: 18, padding: 20, alignItems: 'center', justifyContent: 'center', gap: 12 },
  messageText: { fontSize: 15, color: '#12141A', textAlign: 'center' },
  errorText: { fontSize: 14, color: '#C22B22', textAlign: 'center' },
  retryText: { fontSize: 14, color: '#1B4DE4', fontWeight: 'bold' },
});
