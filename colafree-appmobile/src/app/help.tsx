import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function HelpScreen() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const helpItems = [
    { q: '¿Cómo tomar un turno?', a: 'Escanea el código QR del establecimiento, elige el servicio si te lo pide y confirma. Listo, ya tienes tu turno.' },
    { q: '¿Qué significa el tiempo estimado?', a: 'Es un cálculo aproximado según el avance de la fila. Puede subir o bajar mientras esperas.' },
    { q: '¿Qué pasa si cierro la app?', a: 'Tu turno sigue activo. Al abrir la app otra vez lo recuperamos automáticamente.' },
    { q: '¿Puedo cancelar mi turno?', a: 'Sí, mientras estés esperando. Si cancelas, pierdes tu posición en la fila.' },
    { q: '¿Qué hago cuando sea mi turno?', a: 'Te mostramos el punto de atención al que debes dirigirte. Preséntate cuanto antes para no perder el turno.' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.btnNav}>
            <Text style={styles.btnText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Ayuda</Text>
        </View>

        <View style={styles.list}>
          {helpItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <View key={idx} style={[styles.card, isOpen ? styles.cardOpen : null]}>
                <TouchableOpacity 
                  style={styles.cardHeader} 
                  onPress={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <Text style={styles.qText}>{item.q}</Text>
                  <View style={styles.signBg}>
                    <Text style={styles.signText}>{isOpen ? '−' : '+'}</Text>
                  </View>
                </TouchableOpacity>
                {isOpen && (
                  <View style={styles.cardBody}>
                    <Text style={styles.aText}>{item.a}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 18, paddingBottom: 30 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingBottom: 16 },
  btnNav: { width: 42, height: 42, borderRadius: 13, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E3E6EC', alignItems: 'center', justifyContent: 'center' },
  btnText: { fontSize: 20, color: '#12141A' },
  title: { fontSize: 19, fontWeight: 'bold', color: '#12141A' },
  list: { gap: 10, marginTop: 10 },
  card: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E3E6EC', borderRadius: 16, overflow: 'hidden' },
  cardOpen: { backgroundColor: '#F6F8FF', borderColor: '#C9D4FB' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, minHeight: 60 },
  qText: { fontSize: 16, fontWeight: 'bold', color: '#12141A', flex: 1, paddingRight: 12 },
  signBg: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#EBEFFE', alignItems: 'center', justifyContent: 'center' },
  signText: { color: '#1B4DE4', fontSize: 17, fontWeight: 'bold', marginTop: -2 },
  cardBody: { paddingHorizontal: 16, paddingBottom: 16 },
  aText: { fontSize: 14, color: '#4A5060', lineHeight: 22 },
});
