import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {

  const [name, setName] = useState(''); //nome final aqui
  const [nameField, setNameField] = useState(''); //digitado no campo

  const handleClear = () => {
      setName('');
  }

  const handleSendName = () => {
    setName(nameField);
    setNameField('')
  }


  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>


        {name === '' &&
          <> {/*FRAGMENT*/}
            <Text style={styles.title}>Qual o seu nome?</Text>
            <TextInput 
              style={{ backgroundColor: '#EEE', padding: 10}}
              placeholder='Digite seu nome'
              placeholderTextColor='#999'
              value={nameField}
              onChangeText={text => setNameField(text)}
            />
            <Button
              title='Enviar'
              onPress={handleSendName}
            />
          </>
        }
        {name !== '' &&

          <>
            <Text>Olá {name}, tudo bem?</Text>
            <Text>Seja bem vindo(a)!</Text>

            <Button
              title={`Não sou ${name}`}
              onPress={handleClear}
            />
          </>

        }
       

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