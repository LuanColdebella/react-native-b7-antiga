import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PizzaItem } from './components/PizzaItem';

function App() {

  const handlePizzaItemPress = (pizzaName: string) => {
    alert(`Pizza ${pizzaName} pressed!`);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Text style={styles.title}>Lista de pizzas:</Text>
        <ScrollView>

          <PizzaItem 
            name='Atum' 
            price={25} 
            qtde={2}
            ingredients={['atum', 'cebola', 'oregano']}
            onPress={() => handlePizzaItemPress('Atum')}
          />

        <PizzaItem 
          name='Frango' 
          price={50} 
          qtde={3}
          ingredients={['frango', 'catupiry', 'milho']}
          onPress={() => handlePizzaItemPress('Frango')}
        />

        <PizzaItem 
          name='Portuguesa' 
          price={30} 
          qtde={1}
          ingredients={['presunto', 'queijo', 'ovo', 'cebola']}
          onPress={() => handlePizzaItemPress('Portuguesa')}

        />

        <PizzaItem 
          name='Marguerita' 
          price={20} 
          qtde={2}
          ingredients={['manjericão', 'tomate', 'mussarela']}
          onPress={() => handlePizzaItemPress('Marguerita')}

        />

        <PizzaItem 
          name='Calabresa4' 
          price={15} 
          qtde={1}
          ingredients={['calabresa', 'cebola', 'oregano']}
          onPress={() => handlePizzaItemPress('Calabresa4')}

        />

        <PizzaItem 
          name='Calabresa2' 
          price={15} 
          qtde={1}
          ingredients={['calabresa', 'cebola', 'oregano']}
          onPress={() => handlePizzaItemPress('Calabresa2')}

        />

        <PizzaItem 
          name='Calabresa' 
          price={15} 
          qtde={1}
          ingredients={['calabresa', 'cebola', 'oregano']}
          onPress={() => handlePizzaItemPress('Calabresa')}

        />

        </ScrollView>
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
});