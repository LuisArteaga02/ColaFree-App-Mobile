import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.greeting}>Hola 👋</Text>
            <Text style={styles.subtitle}>¿Qué fila quieres evitar hoy?</Text>
          </View>
          <TouchableOpacity style={styles.notifBtn} onPress={() => router.push('/settings')}>
            <Text style={styles.icon}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerIcon}><Text style={styles.bannerIconText}>i</Text></View>
          <Text style={styles.bannerText}>No necesitas hacer fila físicamente: toma tu turno y espera donde quieras.</Text>
        </View>

        {/* Scan Button */}
        <TouchableOpacity style={styles.scanBtn} onPress={() => router.push('/scanner')}>
          <View style={styles.scanIconBg}>
            <Text style={styles.scanIcon}>📷</Text>
          </View>
          <View style={styles.scanTexts}>
            <Text style={styles.scanTitle}>Escanear código QR</Text>
            <Text style={styles.scanSub}>Toma tu turno en segundos</Text>
          </View>
        </TouchableOpacity>

        {/* Active Ticket Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Turno activo</Text>
        </View>

        {/* Active Ticket Card */}
        <TouchableOpacity style={styles.ticketCard} onPress={() => router.push('/ticket-active')}>
          <View style={styles.cardTop}>
            <Text style={styles.ticketNumber}>A-023</Text>
            <View style={styles.badge}>
              <View style={styles.badgeDot} />
              <Text style={styles.badgeText}>ESPERANDO</Text>
            </View>
          </View>
          <View style={styles.cardContext}>
            <Text style={styles.businessText}>Banco ABC · Sucursal Escalón</Text>
            <Text style={styles.serviceText}>Atención al cliente</Text>
          </View>
          <View style={styles.cardStats}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Tiempo aproximado</Text>
              <Text style={styles.statValue}>~ 18 min</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Antes que tú</Text>
              <Text style={styles.statValue}>4</Text>
            </View>
          </View>
          <View style={styles.viewTicketBtn}>
            <Text style={styles.viewTicketText}>Ver mi turno</Text>
          </View>
        </TouchableOpacity>

        {/* How it works */}
        <Text style={styles.sectionTitleMargin}>¿Cómo funciona?</Text>
        {[
          { n: 1, t: 'Escanea', s: 'El QR del establecimiento' },
          { n: 2, t: 'Toma tu turno', s: 'Sin hacer fila física' },
          { n: 3, t: 'Aprovecha tu tiempo', s: 'Te avisamos cuando se acerque' }
        ].map(step => (
          <View key={step.n} style={styles.stepCard}>
            <View style={styles.stepNumBg}><Text style={styles.stepNum}>{step.n}</Text></View>
            <View>
              <Text style={styles.stepTitle}>{step.t}</Text>
              <Text style={styles.stepSub}>{step.s}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F6F7F9' },
  container: { padding: 18, paddingBottom: 30 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, marginTop: 6 },
  headerText: { flex: 1 },
  greeting: { fontSize: 26, fontWeight: '800', color: '#12141A', letterSpacing: -0.5 },
  subtitle: { fontSize: 14, color: '#5A606C', marginTop: 4 },
  notifBtn: { width: 44, height: 44, borderRadius: 14, borderWidth: 1, borderColor: '#E3E6EC', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  icon: { fontSize: 20 },
  banner: { flexDirection: 'row', backgroundColor: '#EBEFFE', borderRadius: 14, padding: 14, marginBottom: 14, alignItems: 'flex-start' },
  bannerIcon: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#1B4DE4', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  bannerIconText: { color: '#fff', fontSize: 13, fontWeight: 'bold' },
  bannerText: { flex: 1, fontSize: 13, color: '#1A2A5E', lineHeight: 18 },
  scanBtn: { backgroundColor: '#1B4DE4', borderRadius: 20, padding: 20, flexDirection: 'row', alignItems: 'center', shadowColor: '#1B4DE4', shadowOpacity: 0.18, shadowOffset: {width: 0, height: 8}, shadowRadius: 20, elevation: 5 },
  scanIconBg: { width: 56, height: 56, borderRadius: 16, backgroundColor: 'rgba(255,255,255,0.16)', alignItems: 'center', justifyContent: 'center', marginRight: 15 },
  scanIcon: { fontSize: 24 },
  scanTexts: { flex: 1 },
  scanTitle: { fontSize: 19, fontWeight: 'bold', color: '#fff' },
  scanSub: { fontSize: 13, color: 'rgba(255,255,255,0.82)', marginTop: 4 },
  sectionHeader: { marginTop: 26, marginBottom: 12 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#12141A' },
  sectionTitleMargin: { fontSize: 16, fontWeight: 'bold', color: '#12141A', marginTop: 26, marginBottom: 12 },
  ticketCard: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E3E6EC', borderRadius: 18, padding: 18, shadowColor: '#12141A', shadowOpacity: 0.05, shadowOffset: {width: 0, height: 1}, shadowRadius: 2, elevation: 1 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  ticketNumber: { fontSize: 34, fontWeight: 'bold', color: '#12141A', fontFamily: 'monospace' },
  badge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F1F3F7', paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20 },
  badgeDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#4A5060', marginRight: 6 },
  badgeText: { fontSize: 12, fontWeight: 'bold', color: '#4A5060' },
  cardContext: { marginBottom: 14 },
  businessText: { fontSize: 15, fontWeight: '600', color: '#12141A' },
  serviceText: { fontSize: 13, color: '#5A606C', marginTop: 2 },
  cardStats: { flexDirection: 'row', gap: 10, marginBottom: 14 },
  statBox: { flex: 1, backgroundColor: '#F6F7F9', borderRadius: 12, padding: 12 },
  statLabel: { fontSize: 11, color: '#5A606C', marginBottom: 6 },
  statValue: { fontSize: 21, fontWeight: 'bold', color: '#12141A', fontFamily: 'monospace' },
  viewTicketBtn: { backgroundColor: '#EBEFFE', borderRadius: 13, padding: 13, alignItems: 'center' },
  viewTicketText: { color: '#1B4DE4', fontSize: 15, fontWeight: 'bold' },
  stepCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: '#E3E6EC', borderRadius: 14, padding: 14, marginBottom: 10 },
  stepNumBg: { width: 34, height: 34, borderRadius: 11, backgroundColor: '#EBEFFE', alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  stepNum: { color: '#1B4DE4', fontSize: 15, fontWeight: 'bold', fontFamily: 'monospace' },
  stepTitle: { fontSize: 15, fontWeight: 'bold', color: '#12141A' },
  stepSub: { fontSize: 13, color: '#5A606C', marginTop: 2 },
});
