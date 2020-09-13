import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import axios from 'axios'

export default function Register({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [bloodType, setBloodType] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false);

  function register() {
    navigation.navigate('Meu Perfil')
    setLoading(true)
    axios.post('', {name, email, bloodType, password, confirmPassword})
    .then(function() {
      console.log('Success')
      navigation.navigate('Meu Perfil')
    })
    .catch(function(error) {
      console.log(error)

    })
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Life Share</Text>
      <View>
        <Text>Nome *</Text>
        <TextInput style={styles.input} onChangeText={setName}/>
        <Text style={styles.textLabel}>E-mail *</Text>
        <TextInput style={styles.input} onChangeText={ setEmail}/>
        <Text style={styles.textLabel}>Tipo Sanguíneo</Text>
        <TextInput style={styles.input} onChangeText={setBloodType}/>
        <Text style={styles.textLabel}>Senha *</Text>
        <TextInput style={styles.input} onChangeText={setPassword}/>
        <Text style={styles.textLabel}>Repita a Senha *</Text>
        <TextInput style={styles.input} onChangeText={setConfirmPassword}/>
      </View>
      <View>
        <TouchableOpacity
          onPress={register}>
          <View style={styles.button}>

          {loading
              ? <ActivityIndicator size="small" color="white" animating={loading}/>
              : <Text style={{alignSelf: 'center'}}>CADASTRAR</Text>
            }

          </View>
        </TouchableOpacity>
        {/* TODO: Fazer a cor do texto do botão ficar branco */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  textLabel: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#E84C0E',
    height: 30,
    marginTop: 8,
  },
  button:{
    justifyContent: 'center',
    backgroundColor: '#E84C0E',
    color: 'white',
    height: 30,
    paddingHorizontal:137,
    alignSelf: 'center'
  }
})
