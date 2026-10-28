import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function TicketCompletedScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <Text style={styles.icon}>✓</Text>
          </View>
          <Text style={styles.title}>¡Atención completada!</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.number}>A-023</Text>
          <View style={styles.divider} />
          <View style={styles.details}>
            <View style={styles.row}><Text style={styles.label}>Establecimiento</Text><Text style={styles.val}>Banco ABC</Text></View>
            <View style={styles.row}><Text style={styles.label}>Sucursal</Text><Text style={styles.val}>Sucursal Escalón</Text></View>
            <View style={styles.row}><Text style={styles.label}>Servicio</Text><Text style={styles.val}>Atención al cliente</Text></View>
            <View style={styles.row}><Text style={styles.label}>Fecha</Text><Text style={styles.valMono}>14/09/2026</Text></View>
            <View style={styles.row}><Text style={styles.label}>Hora de finalización</Text><Text style={styles.valMono}>10:47</Text></View>
          </View>
        </View>

        <View style={styles.ratingBox}>
          <View style={styles.ratingHeader}>
            <Text style={styles.ratingTitle}>¿Cómo fue tu experiencia?</Text>
            <View style={styles.soonBadge}>
              <Text style={styles.soonText}>PRÓXIMAMENTE</Text>
            </View>
          </View>
          <View style={styles.stars}>
            {[1,2,3,4,5].map(i => <Text key={i} style={styles.star}>☆</Text>)}
          </View>
        </View>

        <TouchableOpacity style={styles.btn} onPress={() => router.replace('/home')}>
          <Text style={styles.btnText}>Finalizar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flexGrow: 1, padding: 22, alignItems: 'center', justifyContent: 'center' },
  iconContainer: { alignItems: 'center', marginBottom: 16 },
  iconCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#E6F4EC', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  icon: { fontSize: 40, color: '#0E7A4F', fontWeight: 'bold' },
  title: { fontSize: 26, fontWeight: '800', color: '#12141A' },
  card: { width: '100%', backgroundColor: '#F6F7F9', borderWidth: 1, borderColor: '#E3E6EC', borderRadius: 20, padding: 20, marginBottom: 18 },
  number: { fontSize: 42, fontWeight: 'bold', color: '#12141A', fontFamily: 'monospace', letterSpacing: -1 },
  divider: { height: 1, backgroundColor: '#E3E6EC', marginVertical: 14 },
  details: { gap: 11 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  label: { fontSize: 13, color: '#5A606C' },
  val: { fontSize: 13, fontWeight: 'bold', color: '#12141A' },
  valMono: { fontSize: 13, fontWeight: 'bold', color: '#12141A', fontFamily: 'monospace' },
  ratingBox: { width: '100%', borderWidth: 1, borderColor: '#D5DAE4', borderStyle: 'dashed', borderRadius: 16, padding: 16, marginBottom: 18 },
  ratingHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 10 },
  ratingTitle: { fontSize: 14, fontWeight: 'bold', color: '#5A606C' },
  soonBadge: { backgroundColor: '#FDF2DC', borderRadius: 20, paddingHorizontal: 8, paddingVertical: 5 },
  soonText: { fontSize: 10, fontWeight: 'bold', color: '#7A4E05' },
  stars: { flexDirection: 'row', justifyContent: 'center', gap: 10 },
  star: { fontSize: 30, color: '#C9CDD6' },
  btn: { width: '100%', backgroundColor: '#1B4DE4', borderRadius: 14, padding: 18, alignItems: 'center' },
  btnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});
