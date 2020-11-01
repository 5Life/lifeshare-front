import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './Register.styles';
import userApi from './api/user';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    try {
      const data = await userApi.registerUser({
        name,
        email,
        bloodType,
        // TODO: criptografar antes de enviar para o backend
        password,
        confirmPassword,
      });
      navigation.navigate('Meu Perfil', { user: data });
    } catch (error) {
      navigation.navigate('Modal', {
        errorMessage: 'Erro ao cadastrar.',
      });
    }
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
        <TextInput
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
        />
        <Text style={styles.textLabel}>Repita a Senha *</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View>
        <Button title="CADASTRAR" color="#E84C0E" onPress={handleRegister} />
      </View>
    </View>
  );
};

export default Register;
