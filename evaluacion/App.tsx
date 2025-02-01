import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purple, styles.leftBox]} />
      <View style={[styles.box, styles.orange, styles.centerBox]} />
      <View style={[styles.box, styles.cyan, styles.rightBox]} />
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
  box: {
    width: width * 0.18,
    height: width * 0.18,
    borderWidth: 3,
    borderColor: 'white',
    position: 'absolute',
  },
  purple: {
    backgroundColor: '#6A5ACD',
  },
  orange: {
    backgroundColor: '#F4A460',
  },
  cyan: {
    backgroundColor: '#00CED1',
  },
  leftBox: {
    top: '48%',
    left: '32%',
    transform: [{ translateY: -width * 0.09 }],
  },
  centerBox: {
    top: '50%',
    left: '60%',
    transform: [{ translateX: -width * 0.09 }],
  },
  rightBox: {
    top: '48%',
    left: '70%',
    transform: [{ translateY: -width * 0.09 }],
  },
});
