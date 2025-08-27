import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type PizzaItemProps = {
  name?: string;
  price?: number;
  qtde?: number;
  ingredients?: string[];
  onPress: () => void;
}

export function PizzaItem({ name = 'Calabresa', price = 15, qtde = 1, ingredients, onPress }: PizzaItemProps) {
 return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.container}>
      <Text style={[styles.name, styles.negrito]}>Pizza {name}</Text>
      <Text style={styles.price}>RS {(price * qtde).toFixed(2)}</Text>
      {
        qtde > 1 &&
        <Text style={[styles.name, styles.negrito]}>Quantidade: {qtde}</Text>
      }   

       <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text style={[styles.name, styles.negrito]}>ingredientes:</Text>
        <Text> {ingredients?.join(', ')}</Text> 
      </View>

      {
        price < 20 &&
        <Text style={styles.promocao}>Promoção!</Text>
      }
    </View>

  </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#CCC'

  },
  name: {
    fontSize: 15,
  },
  price: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#0000FF',
  },
  negrito: {
    fontWeight: 'bold',
  },
  promocao: {
    color: '#FF0000',
    fontWeight: 'bold',
    fontSize: 20,
  } 
});