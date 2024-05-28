// App.tsx
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './AppNavigator';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default App;
