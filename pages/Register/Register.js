import React, { useState } from 'react';
import axios from 'axios';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './Register.styles';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const register = () => {
    navigation.navigate('Meu Perfil');
    axios
      .post('', { name, email, bloodType, password, confirmPassword })
      .then(function () {
        console.log('Success');
        navigation.navigate('Meu Perfil');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Life Share</Text>
      <View>
        <Text>Nome *</Text>
        <TextInput style={styles.input} onChangeText={setName} />
        <Text style={styles.textLabel}>E-mail *</Text>
        <TextInput style={styles.input} onChangeText={setEmail} />
        <Text style={styles.textLabel}>Tipo Sanguíneo</Text>
        <TextInput style={styles.input} onChangeText={setBloodType} />
        <Text style={styles.textLabel}>Senha *</Text>
        <TextInput style={styles.input} onChangeText={setPassword} />
        <Text style={styles.textLabel}>Repita a Senha *</Text>
        <TextInput style={styles.input} onChangeText={setConfirmPassword} />
      </View>
      <View>
        <Button title="CADASTRAR" color="#E84C0E" onPress={register} />
      </View>
    </View>
  );
};

export default Register;
