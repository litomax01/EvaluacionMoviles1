import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import Clasificador from './src/components/clasificador';
import Figura1 from './src/components/figura1';
import Figura2 from './src/components/figura2';
import Figura3 from './src/components/figura3';
import Figura4 from './src/components/figura4';
import Figura5 from './src/components/figura5';
import Figura6 from './src/components/figura6';
import Figura7 from './src/components/figura7';
import Figura8 from './src/components/figura8';
import Figura9 from './src/components/figura9';

export default function App() {
  const [componenteActivo, setComponenteActivo] = useState<string | null>(null);

  const renderizarComponente = () => {
    switch (componenteActivo) {
      case 'Clasificador': return <Clasificador />;
      case 'Figura1': return <Figura1 />;
      case 'Figura2': return <Figura2 />;
      case 'Figura3': return <Figura3 />;
      case 'Figura4': return <Figura4 />;
      case 'Figura5': return <Figura5 />;
      case 'Figura6': return <Figura6 />;
      case 'Figura7': return <Figura7 />;
      case 'Figura8': return <Figura8 />;
      case 'Figura9': return <Figura9 />;
      default: return null;
    }
  };

  return (
    <View style={styles.container}>
      {componenteActivo ? (
        <View style={styles.content}>
          {renderizarComponente()}
          <Button title="Volver al menú" onPress={() => setComponenteActivo(null)} />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.menu}>
          <Button title="Clasificador" onPress={() => setComponenteActivo('Clasificador')} />
          <Button title="Figura 1" onPress={() => setComponenteActivo('Figura1')} />
          <Button title="Figura 2" onPress={() => setComponenteActivo('Figura2')} />
          <Button title="Figura 3" onPress={() => setComponenteActivo('Figura3')} />
          <Button title="Figura 4" onPress={() => setComponenteActivo('Figura4')} />
          <Button title="Figura 5" onPress={() => setComponenteActivo('Figura5')} />
          <Button title="Figura 6" onPress={() => setComponenteActivo('Figura6')} />
          <Button title="Figura 7" onPress={() => setComponenteActivo('Figura7')} />
          <Button title="Figura 8" onPress={() => setComponenteActivo('Figura8')} />
          <Button title="Figura 9" onPress={() => setComponenteActivo('Figura9')} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3141',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
