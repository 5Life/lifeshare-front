import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import axios from 'axios'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')

  function login() {
    axios
      .post('localhost:8080/api/auth', { email, password })
      .then(function () {
        console.log('Success')
      })
      .catch(function (error) {
        console.log(error)
        navigation.navigate('Modal')
      })
  }
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Life Share</Text>
        <View>
          <Text>Login</Text>
          <TextInput style={styles.input} onChangeText={setEmail} />
          <Text style={{ marginTop: 20 }}>Senha</Text>
          <TextInput style={styles.input} onChangeText={setPass} />
        </View>
        <View>
          <Button title='ENTRAR' color='#E84C0E' onPress={login} />
          <Text
            style={styles.signUp}
            onPress={() => navigation.navigate('Dados Pessoais')}
          >
            Cadastre-se
          </Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E84C0E',
    height: 30,
    marginTop: 8,
  },
  signUp: {
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 8,
  }
})