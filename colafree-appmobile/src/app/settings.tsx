import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Switch } from 'react-native';
import { router } from 'expo-router';

export default function SettingsScreen() {
  const [vibrationEnabled, setVibrationEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Configuración</Text>
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.row} onPress={() => {}}>
            <Text style={styles.label}>Idioma</Text>
            <View style={styles.rowEnd}>
              <Text style={styles.valBlue}>Español</Text>
              <Text style={styles.chevron}>›</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.divider} />
          
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.label}>Vibración y sonido</Text>
              <Text style={styles.sub}>Avisos del dispositivo cuando cambie tu turno</Text>
            </View>
            <Switch 
              value={vibrationEnabled} 
              onValueChange={setVibrationEnabled}
              trackColor={{ false: '#D5DAE4', true: '#1B4DE4' }}
            />
          </View>
          <View style={styles.divider} />

          <TouchableOpacity style={styles.row} onPress={() => router.push('/help')}>
            <Text style={styles.label}>Ayuda</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
          <View style={styles.divider} />

          <TouchableOpacity style={styles.row} onPress={() => {}}>
            <Text style={styles.label}>Acerca de COLA FREE</Text>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>Versión de la app</Text>
            <Text style={styles.valMono}>1.0.0 (MVP)</Text>
          </View>
          <View style={styles.divider} />

          <TouchableOpacity style={styles.row} onPress={() => router.replace('/index')}>
            <View style={styles.col}>
              <Text style={styles.labelDanger}>Limpiar datos locales</Text>
              <Text style={styles.sub}>Borra la sesión de este dispositivo</Text>
            </View>
            <Text style={styles.chevronDanger}>›</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerBadge}>
          <Text style={styles.footerLabel}>COLA FREE · SVTurno</Text>
          <Text style={styles.footerSub}>Versión 1.0.0 (MVP)</Text>
        </View>

        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Text style={styles.backBtnText}>Volver</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#EDEFF3' },
  container: { padding: 18, paddingBottom: 30 },
  header: { marginBottom: 16, marginTop: 8 },
  title: { fontSize: 25, fontWeight: '800', color: '#12141A' },
  card: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E3E6EC', borderRadius: 16, overflow: 'hidden' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, minHeight: 60 },
  col: { flex: 1, paddingRight: 10 },
  rowEnd: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  label: { fontSize: 15, fontWeight: '600', color: '#12141A' },
  labelDanger: { fontSize: 15, fontWeight: '600', color: '#C22B22' },
  sub: { fontSize: 12, color: '#5A606C', marginTop: 4 },
  valBlue: { fontSize: 14, fontWeight: '600', color: '#1B4DE4' },
  valMono: { fontSize: 13, fontWeight: '600', color: '#5A606C', fontFamily: 'monospace' },
  chevron: { fontSize: 18, color: '#8A909C' },
  chevronDanger: { fontSize: 18, color: '#C22B22' },
  divider: { height: 1, backgroundColor: '#EDEFF3' },
  footerBadge: { alignItems: 'center', marginTop: 22, marginBottom: 20 },
  footerLabel: { fontSize: 13, fontWeight: '700', color: '#5A606C' },
  footerSub: { fontSize: 11, fontWeight: '500', color: '#8A909C', fontFamily: 'monospace', marginTop: 4 },
  backBtn: { backgroundColor: '#fff', borderWidth: 1.5, borderColor: '#E3E6EC', borderRadius: 14, padding: 16, alignItems: 'center' },
  backBtnText: { color: '#12141A', fontSize: 16, fontWeight: 'bold' }
});
