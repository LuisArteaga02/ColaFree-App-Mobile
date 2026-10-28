import { Stack, ThemeProvider, DefaultTheme } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="scanner" />
        <Stack.Screen name="queue-select" />
        <Stack.Screen name="queue-detail" />
        <Stack.Screen name="ticket-created" />
        <Stack.Screen name="ticket-active" />
        <Stack.Screen name="ticket-called" />
        <Stack.Screen name="ticket-in-service" />
        <Stack.Screen name="ticket-completed" />
        <Stack.Screen name="ticket-cancel" options={{ presentation: 'modal' }} />
        <Stack.Screen name="error" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="help" />
      </Stack>
    </ThemeProvider>
  );
}
