import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function TicketActiveScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('/home')} style={styles.btnNav}>
            <Text style={styles.btnText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Mi turno</Text>
          <TouchableOpacity style={styles.btnNav}>
            <Text style={styles.btnText}>↻</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <View style={styles.cardTop}>
            <Text style={styles.ticketNumber}>A-023</Text>
            <View style={styles.badge}>
              <View style={styles.badgeDot} />
              <Text style={styles.badgeText}>ESPERANDO</Text>
            </View>
          </View>
          <View style={styles.divider} />
          
          <View style={styles.timeSection}>
            <Text style={styles.etaValue}>~ 18 min</Text>
            <Text style={styles.etaLabel}>Tiempo aproximado</Text>
          </View>

          <View style={styles.aheadSection}>
            <Text style={styles.aheadText}>4 personas antes que tú</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.detailsRow}>
            <Text style={styles.detailLabel}>Establecimiento</Text>
            <Text style={styles.detailValue}>Banco ABC</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.detailLabel}>Sucursal</Text>
            <Text style={styles.detailValue}>Sucursal Escalón</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.detailLabel}>Servicio</Text>
            <Text style={styles.detailValue}>Atención al cliente</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.detailLabel}>Hora de creación</Text>
            <Text style={styles.detailValueMono}>10:12</Text>
          </View>
        </View>

        <View style={styles.rtBanner}>
          <View style={styles.rtDot} />
          <Text style={styles.rtText}>Conectado en tiempo real</Text>
        </View>
        
        <View style={styles.noteRow}>
          <View style={styles.noteDot} />
          <Text style={styles.noteText}>El tiempo se actualiza automáticamente.</Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.remindBtn} onPress={() => router.push('/ticket-called')}>
            <Text style={styles.remindBtnText}>[Simular Llamado]</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelBtn} onPress={() => router.push('/ticket-cancel')}>
            <Text style={styles.cancelBtnText}>Cancelar turno</Text>
          </TouchableOpacity>
        </View>
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
  card: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E3E6EC', borderRadius: 22, padding: 24, shadowColor: '#12141A', shadowOpacity: 0.06, shadowOffset: {width: 0, height: 2}, shadowRadius: 6, elevation: 2 },
  cardTop: { alignItems: 'center', marginBottom: 18 },
  ticketNumber: { fontSize: 68, fontWeight: 'bold', color: '#12141A', fontFamily: 'monospace', letterSpacing: -1 },
  badge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F1F3F7', paddingHorizontal: 14, paddingVertical: 9, borderRadius: 20, marginTop: 12 },
  badgeDot: { width: 9, height: 9, borderRadius: 4.5, backgroundColor: '#4A5060', marginRight: 8 },
  badgeText: { fontSize: 13, fontWeight: 'bold', color: '#4A5060' },
  divider: { height: 1, backgroundColor: '#E3E6EC', width: '100%', marginVertical: 18 },
  timeSection: { alignItems: 'center' },
  etaValue: { fontSize: 40, fontWeight: 'bold', color: '#1B4DE4', fontFamily: 'monospace' },
  etaLabel: { fontSize: 15, fontWeight: '600', color: '#5A606C', marginTop: 6 },
  aheadSection: { backgroundColor: '#F6F7F9', borderRadius: 14, padding: 16, alignItems: 'center', marginTop: 18 },
  aheadText: { fontSize: 19, fontWeight: 'bold', color: '#12141A' },
  detailsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 11 },
  detailLabel: { fontSize: 14, color: '#5A606C' },
  detailValue: { fontSize: 14, fontWeight: 'bold', color: '#12141A' },
  detailValueMono: { fontSize: 14, fontWeight: 'bold', color: '#12141A', fontFamily: 'monospace' },
  rtBanner: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6F4EC', borderRadius: 14, padding: 13, marginTop: 14 },
  rtDot: { width: 9, height: 9, borderRadius: 4.5, backgroundColor: '#0E7A4F', marginRight: 11 },
  rtText: { fontSize: 13, fontWeight: '600', color: '#0E7A4F' },
  noteRow: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 10, paddingHorizontal: 4 },
  noteDot: { width: 7, height: 7, borderRadius: 3.5, backgroundColor: '#8A909C', marginRight: 8, marginTop: 5 },
  noteText: { fontSize: 13, fontWeight: '500', color: '#5A606C' },
  footer: { marginTop: 24, gap: 10 },
  remindBtn: { backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#C9D4FB', borderRadius: 14, padding: 16, alignItems: 'center' },
  remindBtnText: { color: '#1B4DE4', fontSize: 16, fontWeight: 'bold' },
  cancelBtn: { backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#F2D4D1', borderRadius: 14, padding: 16, alignItems: 'center' },
  cancelBtnText: { color: '#C22B22', fontSize: 16, fontWeight: 'bold' },
});
