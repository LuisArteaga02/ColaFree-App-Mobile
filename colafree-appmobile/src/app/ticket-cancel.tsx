import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

export default function TicketCancelScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.modalContent}>
          <View style={styles.iconCircle}>
            <Text style={styles.icon}>!</Text>
          </View>
          <Text style={styles.title}>¿Cancelar tu turno?</Text>
          <Text style={styles.body}>Si cancelas, perderás tu posición en la fila.</Text>

          <TouchableOpacity style={styles.primaryBtn} onPress={() => router.back()}>
            <Text style={styles.primaryBtnText}>Seguir esperando</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dangerBtn} onPress={() => router.replace('/home')}>
            <Text style={styles.dangerBtnText}>Cancelar turno</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'transparent' },
  container: { flex: 1, backgroundColor: 'rgba(18,20,26,0.45)', justifyContent: 'center', padding: 24 },
  modalContent: { backgroundColor: '#fff', borderRadius: 24, padding: 24, alignItems: 'center', elevation: 10, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 10, shadowOffset: {width: 0, height: 4} },
  iconCircle: { width: 52, height: 52, borderRadius: 16, backgroundColor: '#FBE9E7', alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  icon: { fontSize: 24, fontWeight: 'bold', color: '#C22B22' },
  title: { fontSize: 22, fontWeight: '800', color: '#12141A', marginBottom: 10 },
  body: { fontSize: 15, color: '#5A606C', textAlign: 'center', marginBottom: 16 },
  primaryBtn: { width: '100%', backgroundColor: '#1B4DE4', borderRadius: 14, padding: 16, alignItems: 'center', marginBottom: 10 },
  primaryBtnText: { color: '#fff', fontSize: 17, fontWeight: 'bold' },
  dangerBtn: { width: '100%', backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#C22B22', borderRadius: 14, padding: 16, alignItems: 'center' },
  dangerBtnText: { color: '#C22B22', fontSize: 16, fontWeight: 'bold' }
});
