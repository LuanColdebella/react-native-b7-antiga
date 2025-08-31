import { Button, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen( {navigation, route} ) {

    const name = route.params?.name ?? 'Visitante';

    const handleHomeBack = () => {
        navigation.goBack();
    }

 return (
   <View style={styles.container}>
     <Text>TELA DE SOBRE: {name} </Text>
        <Button title='Ir para o Home'
           onPress={handleHomeBack} 
        />
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});