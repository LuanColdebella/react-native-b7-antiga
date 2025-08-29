import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {

  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');

  const hendleLoginBtn = () => {
    alert(`email: ${emailField} \n senha: ${passwordField}`);
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>

      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image 
            style={styles.logo}
            source={require('./assets/logo.png')}
          />

          <Text style={styles.h1}>Sistema de Login</Text>
          <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>
          
          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.inputField}
              placeholder='Digite seu email'
              placeholderTextColor='#999'
              value={emailField}
              onChangeText={(email) => setEmailField(email)}
              autoCapitalize='none' //nunca deixa a primeira letra maiuscula
              keyboardType='email-address' //deixa o teclado de email
            />
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput
              style={styles.inputField}
              placeholder='Digite sua senha'
              secureTextEntry={true}
              placeholderTextColor='#999'
              value={passwordField}
              onChangeText={(password) => setPasswordField(password)}
            />
          </View>

          <View style={styles.aditionals}>
              <TouchableOpacity style={styles.forgotBtnArea}>
                <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
              </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => hendleLoginBtn()}
            >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.signUpArea}>
            <Text style={styles.signUpText}>Não tem uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpBtnText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.footerArea}>
            <Text style={styles.footerText}>Criado por Luan Coldebella</Text>
          </View>


        </View>
      </ScrollView>
      

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;


const styles = StyleSheet.create({
  scrollView :{
    backgroundColor: '#FFF', //cor de fundo
    paddingHorizontal: 15, //espaço na direita e na esquerda
    paddingTop: 40 // espaço em cima
  },
  container: {
    alignItems: 'center', //alinhar ao centro
  },
  logo: {
    width: 150, //largura
    height: 150 //altura
  },
  h1: {
    color: '#000', //cor do texto
    fontSize: 27, //tamnho do texto
    fontWeight: 'bold', //peso do texto
    marginVertical: 10 //margem vertical em cima e em baixo
  },
  h2: {
    color: '#999', //cor do texto
    fontSize: 15, //tamanho do texto
  },
  inputArea: {
    width: '100%', //largura do input 100%
    paddingTop: 20, //espaco em cima

  },
  inputLabel: {
    color: '#777', //cor do texto
    fontSize: 14, //tamanho do texto
    fontWeight: 'bold', //peso do texto
    marginBottom: 7 //margem em baixo
  },
  inputField: {
    borderWidth: 2, //largura da borda
    borderRadius: 5, //bordas arredondadas qtde
    borderColor: '#DDD', //cod da borda
    padding: 10 //espaco interno 
  },
  aditionals: {
    width: '100%' //largura 100%
  },
  forgotBtnArea: {
    paddingVertical: 20, //Colocar este padding para tem um espaço legar para apertar por que o usario pode ter um dedão maior 
    // backgroundColor: '#FF0000',
    alignSelf: 'flex-end' //alinhar ele ao lado direito
  },
  forgotBtnText: {
    color: '#4162B7',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4162B7',
    width: '100%',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    alignSelf: 'center', //alinhar ao centro
    color: '#FFFF',
    fontSize: 16,
  },
  signUpArea: {
    flexDirection: 'row', //alinhar lado a lado
    marginTop: 30,
  },
  signUpText: {
    color: '#999',
    fontSize: 13,
    fontWeight: 'bold',
  },
  signUpBtnText: {
    color: '#4162B7',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 5
  },
  footerArea: {
    marginVertical: 30
  },
  footerText: {
    color: '#999',
    fontSize: 13,
  }
});