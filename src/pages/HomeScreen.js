import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);

  // ref mantém SEMPRE o valor mais recente de name,
  // sem precisar recriar o header
  const nameRef = useRef('');
  useEffect(() => { nameRef.current = name; }, [name]);

  const handleAdd = useCallback(() => {
    const current = (nameRef.current || '').trim();
    if (!current) return;

    setIngredients(prev => [...prev, current]);
    setName('');
  }, []);

  const handleAddName = (txt) => setName(txt);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Adicionar" onPress={handleAdd} />,
      headerLeft: () => <Text>Exercicio</Text>,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Faça um bolo</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um ingrediente"
        value={name}
        onChangeText={handleAddName}
      />

      <FlatList
        data={ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />

      <Button title='Ir para sobre' onPress={() => navigation.navigate('About', {name: name})}></Button>


    </View>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { borderWidth: 2, borderRadius: 5, borderColor: '#DDD', padding: 10, marginVertical: 10, width: '80%' },
});
