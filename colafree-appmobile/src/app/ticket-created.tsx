import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function TicketCreatedScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <Text style={styles.icon}>✓</Text>
          </View>
          <Text style={styles.title}>¡Tu turno está listo!</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.number}>A-023</Text>
          <View style={styles.divider} />
          <View style={styles.details}>
            <View style={styles.row}>
              <Text style={styles.label}>Servicio</Text>
              <Text style={styles.val}>Atención al cliente</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Antes que tú</Text>
              <Text style={styles.valMono}>4</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Tiempo aproximado</Text>
              <Text style={styles.valMono}>~ 18 min</Text>
            </View>
          </View>
        </View>

        <Text style={styles.bodyText}>Puedes seguir tu turno desde la app.</Text>

        <View style={styles.infoBanner}>
          <View style={styles.bannerIcon}><Text style={styles.bannerIconText}>i</Text></View>
          <Text style={styles.bannerText}>Tu turno seguirá activo aunque cierres la app.</Text>
        </View>

        <TouchableOpacity style={styles.btn} onPress={() => router.replace('/ticket-active')}>
          <Text style={styles.btnText}>Ver mi turno</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flexGrow: 1, padding: 22, alignItems: 'center', justifyContent: 'center' },
  iconContainer: { alignItems: 'center', marginBottom: 18 },
  iconCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#E6F4EC', alignItems: 'center', justifyContent: 'center', marginBottom: 18 },
  icon: { fontSize: 40, color: '#0E7A4F', fontWeight: 'bold' },
  title: { fontSize: 25, fontWeight: '800', color: '#12141A' },
  card: { width: '100%', backgroundColor: '#F6F7F9', borderWidth: 1, borderColor: '#E3E6EC', borderRadius: 20, padding: 22, marginBottom: 18 },
  number: { fontSize: 54, fontWeight: 'bold', color: '#1B4DE4', fontFamily: 'monospace', letterSpacing: -1.5, textAlign: 'center' },
  divider: { height: 1, backgroundColor: '#E3E6EC', marginVertical: 18 },
  details: { gap: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  label: { fontSize: 14, color: '#5A606C' },
  val: { fontSize: 14, fontWeight: 'bold', color: '#12141A' },
  valMono: { fontSize: 14, fontWeight: 'bold', color: '#12141A', fontFamily: 'monospace' },
  bodyText: { fontSize: 14, color: '#5A606C', textAlign: 'center', marginBottom: 16 },
  infoBanner: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#EBEFFE', borderRadius: 14, padding: 14, width: '100%', marginBottom: 16 },
  bannerIcon: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#1B4DE4', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  bannerIconText: { color: '#fff', fontSize: 13, fontWeight: 'bold' },
  bannerText: { flex: 1, fontSize: 13, color: '#1A2A5E', lineHeight: 18 },
  btn: { width: '100%', backgroundColor: '#1B4DE4', borderRadius: 14, padding: 18, alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
