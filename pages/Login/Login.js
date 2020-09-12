import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import axios from 'axios'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const [loading, setLoading] = useState(false);

  function login() {
    setLoading(true)
    axios
      .post('localhost:8080/api/auth', { email, password })
      .then(function () {
        console.log('Success')
      })
      .catch(function (error) {
        console.log(error)
        navigation.navigate('Modal')
      })
      setLoading(false)
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
          <TouchableOpacity
            onPress={login}>
            <View style={styles.button}>

            {loading
                ? <ActivityIndicator size="small" color="white" animating={loading}/>
                : <Text style={{alignSelf: 'center'}}>ENTRAR</Text>
              }

            </View>
          </TouchableOpacity>
          {/* TODO: Fazer a cor do texto do botão ficar branco */}
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
  },
  button:{
    justifyContent: 'center',
    backgroundColor: '#E84C0E',
    color: 'white',
    height: 30,
    paddingHorizontal:150,
    alignSelf: 'center'
  }
})