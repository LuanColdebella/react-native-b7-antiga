import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TabHomeScreen() {
  return (
    <View style={styles.container}>
      <Text>TAB HOME</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { borderWidth: 2, borderRadius: 5, borderColor: '#DDD', padding: 10, marginVertical: 10, width: '80%' },
});
