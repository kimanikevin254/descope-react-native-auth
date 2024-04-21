import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { AuthProvider } from '@descope/react-native-sdk';
import Flow from './components/Flow';

function App() {
  return (
    <AuthProvider projectId='<YOUR-DESCOPE-PROJECT-ID>'>
      <SafeAreaView style={{ flex: 1, padding: 10 }}>
        <StatusBar
          barStyle='light-content'
        />

        <Flow />
      </SafeAreaView>
    </AuthProvider>
  );
}

export default App;