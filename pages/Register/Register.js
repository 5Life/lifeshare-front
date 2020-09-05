import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import axios from 'axios'

export default function Register({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [bloodType, setBloodType] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function register() {
    navigation.navigate('Meu Perfil')
    axios.post('', {name, email, bloodType, password, confirmPassword})
    .then(function() {
      console.log('Success')
      navigation.navigate('Meu Perfil')
    })
    .catch(function(error) {
      console.log(error)

    })
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
        <Button title='CADASTRAR' color='#E84C0E' onPress={register} />
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
  }
})
