import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type Ingredient = {
  id: number;         // identificador único
  nome: string;       // nome do ingrediente
  quantidade?: number; // quantidade (opcional)
  unidade?: string;    // unidade de medida (opcional)
};

function App() {

  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 1, nome: 'Farinha' },
    { id: 2, nome: 'Ovos' },
    { id: 3, nome: 'Leite' },
  ]);

  const handleAddIngredient = () => {
    const novoIngrediente = {
      id: ingredients.length + 1,
      nome: 'Chocolate em Pó', // aqui você altera o nome como quiser
    };
  
    setIngredients(prev => [...prev, novoIngrediente]);
  };
  

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Text style={styles.title}>Use State</Text>

        <View style={{ marginTop: 20 }}>
          <View style={styles.box}>
            <Text style={styles.subTitle}>Ingredientes para o bolo:</Text>
            {ingredients.map((item, index) => (
              <Text key={index} style={styles.items}>{item.nome}</Text>
            ))}
          </View>
          
          <Button title='Adicionar Ingrediente'
            onPress={() => handleAddIngredient()}
            color='blue'
          />

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'red'
  },
  items: {
    fontSize: 17,
    color: '#000',
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
    marginTop: 10
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 20
  },
  box: {
    borderColor: '#000000',
    borderWidth: 1,
    margin: 20,
    padding: 10,
    borderRadius: 5,
    gap: 10
  }
});