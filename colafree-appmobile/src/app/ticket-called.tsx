import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

export default function TicketCalledScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topIcon}>
          <View style={styles.ring} />
          <View style={styles.innerIcon}>
            <Text style={styles.bell}>🔔</Text>
          </View>
        </View>
        
        <Text style={styles.title}>¡ES TU TURNO!</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Tu turno</Text>
          <Text style={styles.number}>A-023</Text>
          <View style={styles.divider} />
          <Text style={styles.label}>Dirígete a</Text>
          <Text style={styles.window}>Ventanilla 4</Text>
        </View>

        <Text style={styles.message}>Dirígete al punto de atención.</Text>

        <View style={{flex: 1}} />

        <TouchableOpacity style={styles.btn} onPress={() => router.push('/ticket-in-service')}>
          <Text style={styles.btnText}>Ya voy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0E7A4F' },
  container: { flex: 1, padding: 22, alignItems: 'center' },
  topIcon: { position: 'relative', alignItems: 'center', justifyContent: 'center', marginTop: 40, marginBottom: 20, width: 112, height: 112 },
  ring: { position: 'absolute', width: 112, height: 112, borderRadius: 56, borderWidth: 3, borderColor: 'rgba(255,255,255,0.6)' },
  innerIcon: { width: 72, height: 72, borderRadius: 36, backgroundColor: 'rgba(255,255,255,0.18)', alignItems: 'center', justifyContent: 'center' },
  bell: { fontSize: 30 },
  title: { fontSize: 32, fontWeight: '800', color: '#fff', marginBottom: 24, textAlign: 'center' },
  card: { backgroundColor: '#fff', borderRadius: 22, padding: 24, width: '100%', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.18, shadowOffset: {width: 0, height: 10}, shadowRadius: 30, elevation: 10, marginBottom: 24 },
  label: { fontSize: 12, fontWeight: '500', color: '#5A606C', marginTop: 10 },
  number: { fontSize: 70, fontWeight: 'bold', color: '#12141A', fontFamily: 'monospace', letterSpacing: -2 },
  divider: { height: 1, backgroundColor: '#E3E6EC', width: '100%', marginVertical: 14 },
  window: { fontSize: 28, fontWeight: '800', color: '#0E7A4F', marginTop: 4 },
  message: { fontSize: 17, fontWeight: '600', color: '#fff', textAlign: 'center' },
  btn: { backgroundColor: '#fff', width: '100%', borderRadius: 14, padding: 18, alignItems: 'center', marginTop: 16 },
  btnText: { color: '#0E7A4F', fontSize: 19, fontWeight: '800' }
});
