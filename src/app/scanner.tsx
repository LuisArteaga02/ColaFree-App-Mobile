import React, { useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { CameraView, useCameraPermissions, type BarcodeScanningResult } from 'expo-camera';
import { router } from 'expo-router';
import { getOrCreateDeviceSession } from '@/services/api/deviceSession';
import { mapApiError } from '@/services/api/errorMapper';
import { joinQueue, parseQueueIdFromQr } from '@/services/api/queueApi';

export default function ScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [manualCode, setManualCode] = useState('');
  const [showManualEntry, setShowManualEntry] = useState(false);
  const [hasScanned, setHasScanned] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const processQrCode = async (value: string) => {
    if (isSubmitting) {
      return;
    }

    setHasScanned(true);
    setErrorMessage('');

    const queueId = parseQueueIdFromQr(value);
    if (!queueId) {
      setErrorMessage('El QR no contiene un código de fila válido.');
      return;
    }

    setIsSubmitting(true);
    try {
      const session = await getOrCreateDeviceSession();
      const ticket = await joinQueue(queueId, session.deviceSessionToken);

      router.replace({
        pathname: '/ticket-created',
        params: {
          ticketId: ticket.ticketId,
          number: String(ticket.number),
          queueName: ticket.queueName,
          peopleAhead: String(ticket.status.peopleAhead),
          estimatedWaitTimeMinutes: String(ticket.status.estimatedWaitTimeMinutes),
        },
      });
    } catch (error) {
      setErrorMessage(mapApiError(error).message);
      setHasScanned(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBarcodeScanned = ({ data }: BarcodeScanningResult) => {
    void processQrCode(data);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.btnNav}>
            <Text style={styles.btnText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Escanear QR</Text>
          <View style={styles.btnNav} />
        </View>

        {!permission ? (
          <View style={styles.messageContainer}>
            <ActivityIndicator color="#fff" />
            <Text style={styles.messageText}>Comprobando permiso de cámara…</Text>
          </View>
        ) : !permission.granted ? (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>Necesitamos acceso a la cámara para leer el QR.</Text>
            <TouchableOpacity style={styles.primaryButton} onPress={() => void requestPermission()}>
              <Text style={styles.primaryButtonText}>Permitir cámara</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={styles.cameraContainer}>
              <CameraView
                style={StyleSheet.absoluteFill}
                facing="back"
                barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
                onBarcodeScanned={hasScanned ? undefined : handleBarcodeScanned}
              />
              <View pointerEvents="none" style={styles.frame}>
                <View style={styles.cornerTL} />
                <View style={styles.cornerTR} />
                <View style={styles.cornerBL} />
                <View style={styles.cornerBR} />
              </View>
            </View>
            <Text style={styles.helpText}>Apunta al código QR de la fila.</Text>
            {hasScanned && !isSubmitting && (
              <TouchableOpacity
                style={styles.secondaryButton}
                onPress={() => {
                  setHasScanned(false);
                  setErrorMessage('');
                }}
              >
                <Text style={styles.secondaryButtonText}>Intentar de nuevo</Text>
              </TouchableOpacity>
            )}
          </>
        )}

        {isSubmitting && (
          <View style={styles.statusRow}>
            <ActivityIndicator color="#fff" />
            <Text style={styles.messageText}>Creando tu turno…</Text>
          </View>
        )}

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <View style={styles.footer}>
          {showManualEntry ? (
            <>
              <TextInput
                value={manualCode}
                onChangeText={setManualCode}
                placeholder="Pega el código o enlace del QR"
                placeholderTextColor="#AEB5C2"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                editable={!isSubmitting}
              />
              <TouchableOpacity
                style={[styles.primaryButton, isSubmitting && styles.disabledButton]}
                disabled={isSubmitting || !manualCode.trim()}
                onPress={() => void processQrCode(manualCode)}
              >
                <Text style={styles.primaryButtonText}>Continuar</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => setShowManualEntry(true)}
            >
              <Text style={styles.secondaryButtonText}>Ingresar código manualmente</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0C0E12' },
  container: { flex: 1, paddingBottom: 18 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 18 },
  btnNav: { width: 44, height: 44, borderRadius: 14, backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center' },
  btnText: { color: '#fff', fontSize: 24 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  cameraContainer: { flex: 1, margin: 18, borderRadius: 24, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  frame: { width: 232, height: 232, backgroundColor: 'transparent', borderRadius: 26 },
  cornerTL: { position: 'absolute', top: 0, left: 0, width: 48, height: 48, borderTopWidth: 4, borderLeftWidth: 4, borderColor: '#fff', borderTopLeftRadius: 22 },
  cornerTR: { position: 'absolute', top: 0, right: 0, width: 48, height: 48, borderTopWidth: 4, borderRightWidth: 4, borderColor: '#fff', borderTopRightRadius: 22 },
  cornerBL: { position: 'absolute', bottom: 0, left: 0, width: 48, height: 48, borderBottomWidth: 4, borderLeftWidth: 4, borderColor: '#fff', borderBottomLeftRadius: 22 },
  cornerBR: { position: 'absolute', bottom: 0, right: 0, width: 48, height: 48, borderBottomWidth: 4, borderRightWidth: 4, borderColor: '#fff', borderBottomRightRadius: 22 },
  helpText: { fontSize: 15, fontWeight: '500', color: 'rgba(255,255,255,0.9)', textAlign: 'center', marginHorizontal: 18, marginBottom: 14 },
  messageContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, padding: 24 },
  messageText: { color: '#fff', fontSize: 14, textAlign: 'center' },
  statusRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10, paddingVertical: 8 },
  errorText: { color: '#FFB4AB', fontSize: 14, textAlign: 'center', marginHorizontal: 20, marginVertical: 8 },
  footer: { paddingHorizontal: 18, paddingTop: 10, gap: 10 },
  input: { backgroundColor: '#fff', borderRadius: 14, paddingHorizontal: 14, paddingVertical: 14, fontSize: 15, color: '#12141A' },
  primaryButton: { backgroundColor: '#1B4DE4', borderRadius: 14, padding: 15, alignItems: 'center' },
  primaryButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  secondaryButton: { backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.25)', borderRadius: 14, padding: 15, alignItems: 'center' },
  secondaryButtonText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  disabledButton: { opacity: 0.6 },
});
