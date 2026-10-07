import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function TicketInServiceScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Mi turno</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardTop}>
            <Text style={styles.number}>A-023</Text>
            <View style={styles.badge}>
              <View style={styles.badgeDot} />
              <Text style={styles.badgeText}>EN ATENCIÓN</Text>
            </View>
          </View>
          
          <Text style={styles.message}>Tu atención ha comenzado.</Text>
          
          <View style={styles.divider} />
          
          <View style={styles.details}>
            <View style={styles.row}><Text style={styles.label}>Establecimiento</Text><Text style={styles.val}>Banco ABC</Text></View>
            <View style={styles.row}><Text style={styles.label}>Sucursal</Text><Text style={styles.val}>Sucursal Escalón</Text></View>
            <View style={styles.row}><Text style={styles.label}>Servicio</Text><Text style={styles.val}>Atención al cliente</Text></View>
            <View style={styles.row}><Text style={styles.label}>Ventanilla</Text><Text style={styles.val}>Ventanilla 4</Text></View>
            <View style={styles.row}><Text style={styles.label}>Hora de inicio</Text><Text style={styles.valMono}>10:34</Text></View>
          </View>
        </View>

        <View style={styles.infoBanner}>
          <View style={styles.bannerIcon}><Text style={styles.bannerIconText}>i</Text></View>
          <Text style={styles.bannerText}>Mientras estés en atención no puedes cancelar el turno.</Text>
        </View>

        <TouchableOpacity style={styles.simBtn} onPress={() => router.replace('/ticket-completed')}>
          <Text style={styles.simBtnText}>Simular fin de atención</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F6F7F9' },
  container: { padding: 18, paddingBottom: 30, flexGrow: 1 },
  header: { paddingVertical: 6, marginBottom: 14 },
  headerTitle: { fontSize: 19, fontWeight: 'bold', color: '#12141A' },
  card: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E3E6EC', borderRadius: 22, padding: 22, shadowColor: '#12141A', shadowOpacity: 0.06, shadowOffset: {width: 0, height: 2}, shadowRadius: 6, elevation: 2 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: 18 },
  number: { fontSize: 46, fontWeight: 'bold', color: '#12141A', fontFamily: 'monospace', letterSpacing: -1 },
  badge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#EBEFFE', paddingHorizontal: 13, paddingVertical: 9, borderRadius: 20 },
  badgeDot: { width: 9, height: 9, borderRadius: 4.5, backgroundColor: '#1B4DE4', marginRight: 7 },
  badgeText: { fontSize: 12, fontWeight: 'bold', color: '#1B4DE4' },
  message: { fontSize: 16, fontWeight: '600', color: '#12141A' },
  divider: { height: 1, backgroundColor: '#E3E6EC', marginVertical: 18 },
  details: { gap: 11 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  label: { fontSize: 14, color: '#5A606C' },
  val: { fontSize: 14, fontWeight: 'bold', color: '#12141A' },
  valMono: { fontSize: 14, fontWeight: 'bold', color: '#12141A', fontFamily: 'monospace' },
  infoBanner: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#EBEFFE', borderRadius: 14, padding: 14, marginTop: 16 },
  bannerIcon: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#1B4DE4', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  bannerIconText: { color: '#fff', fontSize: 13, fontWeight: 'bold' },
  bannerText: { flex: 1, fontSize: 13, color: '#1A2A5E', lineHeight: 18 },
  simBtn: { marginTop: 18, borderWidth: 1.5, borderColor: '#D5DAE4', borderStyle: 'dashed', borderRadius: 14, padding: 16, alignItems: 'center', backgroundColor: '#fff' },
  simBtnText: { color: '#5A606C', fontSize: 15, fontWeight: 'bold' }
});
