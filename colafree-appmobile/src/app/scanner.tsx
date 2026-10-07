import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

export default function ScannerScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.btnNav}>
            <Text style={styles.btnText}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Escanear QR</Text>
          <TouchableOpacity style={styles.btnNav}>
            <Text style={styles.btnText}>🔦</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.scannerArea} onPress={() => router.push('/queue-select')}>
          <View style={styles.frame}>
            <View style={styles.cornerTL} />
            <View style={styles.cornerTR} />
            <View style={styles.cornerBL} />
            <View style={styles.cornerBR} />
            <View style={styles.scanLine} />
          </View>
          <Text style={styles.helpText}>Escanea el código QR del establecimiento.</Text>
          <View style={styles.hintBadge}>
            <Text style={styles.hintText}>prototipo · toca para simular</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.manualBtn}>
            <Text style={styles.manualText}>Ingresar código manualmente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0C0E12' },
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 18 },
  btnNav: { width: 44, height: 44, borderRadius: 14, backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center' },
  btnText: { color: '#fff', fontSize: 18 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  scannerArea: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 18 },
  frame: { width: 232, height: 232, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 26, position: 'relative', marginBottom: 22 },
  cornerTL: { position: 'absolute', top: 0, left: 0, width: 48, height: 48, borderTopWidth: 4, borderLeftWidth: 4, borderColor: '#fff', borderTopLeftRadius: 22 },
  cornerTR: { position: 'absolute', top: 0, right: 0, width: 48, height: 48, borderTopWidth: 4, borderRightWidth: 4, borderColor: '#fff', borderTopRightRadius: 22 },
  cornerBL: { position: 'absolute', bottom: 0, left: 0, width: 48, height: 48, borderBottomWidth: 4, borderLeftWidth: 4, borderColor: '#fff', borderBottomLeftRadius: 22 },
  cornerBR: { position: 'absolute', bottom: 0, right: 0, width: 48, height: 48, borderBottomWidth: 4, borderRightWidth: 4, borderColor: '#fff', borderBottomRightRadius: 22 },
  scanLine: { position: 'absolute', left: 14, right: 14, top: '50%', height: 2, backgroundColor: '#1B4DE4', shadowColor: '#1B4DE4', shadowOpacity: 0.8, shadowRadius: 14, shadowOffset: {width:0, height:0}, elevation: 5 },
  helpText: { fontSize: 15, fontWeight: '500', color: 'rgba(255,255,255,0.9)', textAlign: 'center', marginBottom: 22 },
  hintBadge: { borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 7 },
  hintText: { fontSize: 11, color: 'rgba(255,255,255,0.45)', fontFamily: 'monospace' },
  footer: { padding: 18, paddingBottom: 26 },
  manualBtn: { backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.28)', borderRadius: 14, padding: 16, alignItems: 'center' },
  manualText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});
