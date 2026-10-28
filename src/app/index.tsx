import { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

export default function Splash() {
  useEffect(() => { setTimeout(() => router.replace('/home'), 1500); }, []);
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Logo visual (dots) */}
          <View style={styles.grid}>
            <View style={[styles.dot, styles.white]} /><View style={[styles.dot, styles.trans]} /><View style={[styles.dot, styles.white]} />
            <View style={[styles.dot, styles.trans]} /><View style={[styles.dot, styles.circle]} /><View style={[styles.dot, styles.trans]} />
            <View style={[styles.dot, styles.white]} /><View style={[styles.dot, styles.trans]} /><View style={[styles.dot, styles.white]} />
          </View>
          <Text style={styles.title}>COLA FREE</Text>
          <Text style={styles.subtitle}>SVTURNO</Text>
        </View>
        
        <Text style={styles.tagline}>Porque el tiempo es oro y a nadie nos gusta esperar.</Text>
        
        <View style={styles.footer}>
          <ActivityIndicator size="large" color="#ffffff" />
          <Text style={styles.recovering}>Recuperando tu turno…</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1B4DE4' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', width: 52, height: 52, justifyContent: 'space-between', alignContent: 'space-between' },
  dot: { width: 14, height: 14, borderRadius: 3 },
  white: { backgroundColor: '#fff' },
  trans: { backgroundColor: 'rgba(255,255,255,0.35)' },
  circle: { backgroundColor: '#fff', borderRadius: 7 },
  content: { alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 34, fontWeight: '800', color: '#fff', marginTop: 18, letterSpacing: -0.5 },
  subtitle: { fontSize: 12, fontWeight: '600', color: 'rgba(255,255,255,0.7)', letterSpacing: 1.5, marginTop: 4, fontFamily: 'monospace' },
  tagline: { fontSize: 15, color: 'rgba(255,255,255,0.88)', textAlign: 'center', marginTop: 20, lineHeight: 22 },
  footer: { position: 'absolute', bottom: 64, alignItems: 'center' },
  recovering: { fontSize: 13, fontWeight: '500', color: 'rgba(255,255,255,0.78)', marginTop: 14 }
});
