import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function QueueSelectScreen() {
  const services = [
    { id: 1, name: 'Caja', waiting: 5, eta: 12, status: 'ACTIVE' },
    { id: 2, name: 'Atención al cliente', waiting: 8, eta: 24, status: 'ACTIVE' },
    { id: 3, name: 'Créditos', waiting: 2, eta: 8, status: 'ACTIVE' },
    { id: 4, name: 'Divisas', waiting: 0, eta: 0, status: 'PAUSED' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.btnNav}>
            <Text style={styles.btnText}>‹</Text>
          </TouchableOpacity>
          <View style={styles.headerTexts}>
            <Text style={styles.business}>Banco ABC</Text>
            <Text style={styles.branch}>Sucursal Escalón</Text>
          </View>
          <TouchableOpacity style={styles.btnNav}>
            <Text style={styles.btnText}>↻</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>¿Qué trámite deseas realizar?</Text>
        <Text style={styles.subtitle}>Selecciona el servicio para consultar la fila actual.</Text>

        <View style={styles.list}>
          {services.map(s => {
            const isActive = s.status === 'ACTIVE';
            return (
              <TouchableOpacity 
                key={s.id} 
                disabled={!isActive}
                style={[styles.card, !isActive && styles.cardDisabled]}
                onPress={() => router.push('/queue-detail')}
              >
                <View style={styles.cardTop}>
                  <Text style={styles.serviceName}>{s.name}</Text>
                  <View style={[styles.badge, isActive ? styles.badgeActive : styles.badgePaused]}>
                    <View style={[styles.badgeDot, isActive ? styles.dotActive : styles.dotPaused]} />
                    <Text style={[styles.badgeText, isActive ? styles.textActive : styles.textPaused]}>
                      {isActive ? 'COLA ACTIVA' : 'PAUSADA'}
                    </Text>
                  </View>
                </View>
                
                {isActive ? (
                  <View style={styles.cardBottom}>
                    <View style={styles.statsCol}>
                      <Text style={styles.waitingText}>{s.waiting} personas esperando</Text>
                      <Text style={styles.approxWait}>Espera aproximada</Text>
                    </View>
                    <Text style={styles.etaText}>~ {s.eta} min</Text>
                  </View>
                ) : (
                  <Text style={styles.noteText}>Temporalmente pausada</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.infoBanner}>
          <View style={styles.bannerIcon}><Text style={styles.bannerIconText}>i</Text></View>
          <Text style={styles.bannerText}>Puedes comparar los tiempos de espera antes de elegir. Todavía no se crea ningún turno.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F6F7F9' },
  container: { padding: 18, paddingBottom: 30 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingBottom: 16 },
  btnNav: { width: 42, height: 42, borderRadius: 13, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E3E6EC', alignItems: 'center', justifyContent: 'center' },
  btnText: { fontSize: 20, color: '#12141A' },
  headerTexts: { flex: 1 },
  business: { fontSize: 17, fontWeight: 'bold', color: '#12141A' },
  branch: { fontSize: 13, color: '#5A606C' },
  title: { fontSize: 23, fontWeight: '800', color: '#12141A', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#5A606C', marginBottom: 18 },
  list: { gap: 12 },
  card: { backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#D5DAE4', borderRadius: 16, padding: 16 },
  cardDisabled: { backgroundColor: '#F6F7F9', borderColor: '#E9ECF1', opacity: 0.75 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  serviceName: { fontSize: 18, fontWeight: 'bold', color: '#12141A', flex: 1 },
  badge: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20 },
  badgeActive: { backgroundColor: '#E6F4EC' },
  badgePaused: { backgroundColor: '#FDF2DC' },
  badgeDot: { width: 7, height: 7, borderRadius: 3.5, marginRight: 6 },
  dotActive: { backgroundColor: '#0E7A4F' },
  dotPaused: { backgroundColor: '#7A4E05' },
  badgeText: { fontSize: 11, fontWeight: 'bold' },
  textActive: { color: '#0E7A4F' },
  textPaused: { color: '#7A4E05' },
  cardBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  statsCol: { gap: 3 },
  waitingText: { fontSize: 13, color: '#5A606C' },
  approxWait: { fontSize: 12, fontWeight: '500', color: '#5A606C' },
  etaText: { fontSize: 25, fontWeight: 'bold', color: '#1B4DE4', fontFamily: 'monospace' },
  noteText: { fontSize: 13, fontWeight: '500', color: '#5A606C' },
  infoBanner: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#EBEFFE', borderRadius: 14, padding: 14, marginTop: 16 },
  bannerIcon: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#1B4DE4', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  bannerIconText: { color: '#fff', fontSize: 13, fontWeight: 'bold' },
  bannerText: { flex: 1, fontSize: 13, color: '#1A2A5E', lineHeight: 18 },
});
