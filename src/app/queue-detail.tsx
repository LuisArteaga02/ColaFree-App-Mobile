import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function QueueDetailScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.btnNav}>
            <Text style={styles.btnText}>‹</Text>
          </TouchableOpacity>
          <View style={styles.headerTexts}>
            <Text style={styles.business}>Banco ABC</Text>
            <Text style={styles.branch}>Sucursal Escalón · Atención al cliente</Text>
          </View>
          <TouchableOpacity style={styles.btnNav}>
            <Text style={styles.btnText}>↻</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>COLA ACTIVA</Text>
          </View>
          
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Personas esperando</Text>
              <Text style={styles.statValue}>7</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Tiempo estimado</Text>
              <Text style={styles.statValueBlue}>~ 22<Text style={styles.statUnit}> min</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.infoBanner}>
          <View style={styles.bannerIcon}><Text style={styles.bannerIconText}>i</Text></View>
          <Text style={styles.bannerText}>El tiempo es aproximado y puede cambiar según el avance de la atención.</Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.takeBtn} onPress={() => router.push('/ticket-created')}>
            <Text style={styles.takeBtnText}>Tomar turno</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
            <Text style={styles.backBtnText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F6F7F9' },
  container: { padding: 18, paddingBottom: 30, flexGrow: 1 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16 },
  btnNav: { width: 42, height: 42, borderRadius: 13, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E3E6EC', alignItems: 'center', justifyContent: 'center' },
  btnText: { fontSize: 20, color: '#12141A' },
  headerTexts: { flex: 1 },
  business: { fontSize: 17, fontWeight: 'bold', color: '#12141A' },
  branch: { fontSize: 13, color: '#5A606C' },
  card: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E3E6EC', borderRadius: 20, padding: 22, shadowColor: '#12141A', shadowOpacity: 0.05, shadowOffset: {width: 0, height: 1}, shadowRadius: 2, elevation: 1 },
  badge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6F4EC', paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20, alignSelf: 'flex-start', marginBottom: 20 },
  badgeDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#0E7A4F', marginRight: 8 },
  badgeText: { fontSize: 12, fontWeight: 'bold', color: '#0E7A4F' },
  statsRow: { flexDirection: 'row', alignItems: 'stretch' },
  statBox: { flex: 1 },
  statLabel: { fontSize: 12, fontWeight: '500', color: '#5A606C', marginBottom: 6 },
  statValue: { fontSize: 44, fontWeight: 'bold', color: '#12141A', fontFamily: 'monospace' },
  statValueBlue: { fontSize: 44, fontWeight: 'bold', color: '#1B4DE4', fontFamily: 'monospace' },
  statUnit: { fontSize: 13, fontWeight: '600', color: '#5A606C' },
  divider: { width: 1, backgroundColor: '#E3E6EC', marginHorizontal: 14 },
  infoBanner: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#EBEFFE', borderRadius: 14, padding: 14, marginTop: 14 },
  bannerIcon: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#0E7A4F', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  bannerIconText: { color: '#fff', fontSize: 13, fontWeight: 'bold' },
  bannerText: { flex: 1, fontSize: 13, color: '#12141A', lineHeight: 18 },
  footer: { marginTop: 24, gap: 10 },
  takeBtn: { backgroundColor: '#1B4DE4', borderRadius: 14, padding: 16, alignItems: 'center', shadowColor: '#1B4DE4', shadowOpacity: 0.22, shadowOffset: {width: 0, height: 6}, shadowRadius: 16, elevation: 4 },
  takeBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  backBtn: { backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#E3E6EC', borderRadius: 14, padding: 16, alignItems: 'center' },
  backBtnText: { color: '#12141A', fontSize: 16, fontWeight: 'bold' },
});
