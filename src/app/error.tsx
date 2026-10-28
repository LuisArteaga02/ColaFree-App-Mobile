import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

export default function ErrorScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.iconCircle}>
          <Text style={styles.icon}>!</Text>
        </View>
        <Text style={styles.title}>Algo salió mal</Text>
        <Text style={styles.body}>No pudimos completar la operación.</Text>
        
        <View style={styles.codeBadge}>
          <Text style={styles.codeLabel}>Código de soporte</Text>
          <Text style={styles.codeValue}>req_8f31c2</Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.primaryBtn} onPress={() => router.back()}>
            <Text style={styles.primaryBtnText}>Reintentar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryBtn} onPress={() => router.push('/home')}>
            <Text style={styles.secondaryBtnText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 28 },
  iconCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#FBE9E7', alignItems: 'center', justifyContent: 'center', marginBottom: 18 },
  icon: { fontSize: 34, fontWeight: 'bold', color: '#C22B22' },
  title: { fontSize: 24, fontWeight: '800', color: '#12141A', marginBottom: 10 },
  body: { fontSize: 15, color: '#5A606C', textAlign: 'center', maxWidth: 270, marginBottom: 18 },
  codeBadge: { backgroundColor: '#F6F7F9', borderWidth: 1, borderColor: '#E3E6EC', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 14, alignItems: 'center' },
  codeLabel: { fontSize: 10, fontWeight: '500', color: '#8A909C', letterSpacing: 0.5, marginBottom: 3 },
  codeValue: { fontSize: 12, fontWeight: '600', color: '#5A606C', fontFamily: 'monospace' },
  footer: { width: '100%', marginTop: 20, gap: 10 },
  primaryBtn: { backgroundColor: '#1B4DE4', borderRadius: 14, padding: 16, alignItems: 'center' },
  primaryBtnText: { color: '#fff', fontSize: 17, fontWeight: 'bold' },
  secondaryBtn: { backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#E3E6EC', borderRadius: 14, padding: 16, alignItems: 'center' },
  secondaryBtnText: { color: '#12141A', fontSize: 16, fontWeight: 'bold' }
});
