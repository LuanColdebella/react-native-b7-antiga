import React, { useLayoutEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
export default function HomeScreen({ navigation }) {

  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Contagem: ${count}`
    });
  }, [count] );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title='+ 1' onPress={hendleHeaderPlus}/>
    });
  }, [])

  const handleSend = () => {
    navigation.setOptions({
      title: name,
      headerStyle: {
        backgroundColor: 'green'
      }
    });
  }

  const hendleHeaderPlus = () =>{
    // setCount(count + 1); //sempre pega o count como 0
    setCount((c) => c + 1); //sempre pega count com o valor atualizado
  }

 return (
   <View style={styles.container}>
     <Text>Qual seu nome?</Text>
     <TextInput
      style={styles.input}
      placeholder='Digite seu nome'
      value={name}
      onChangeText={(text) => setName(text)}
    />

    <Button title='Enviar'onPress={handleSend} />

    <Button
      title='BG AZUL' 
      onPress={() => navigation.setOptions({
        headerStyle: {
          backgroundColor: 'blue'
        }
      })}
    />

    
    <Button
      title='BG VERMELHO' 
      onPress={() => navigation.setOptions({
        headerStyle: {
          backgroundColor: 'red'
        }
      })}
    />

    <Button title='+ 1'onPress={() => setCount(count +1)} />

          
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
      borderWidth: 2, //largura da borda
      borderRadius: 5, //bordas arredondadas qtde
      borderColor: '#DDD', //cod da borda
      padding: 10 //espaco interno 
    },
});