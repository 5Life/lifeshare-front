import React, { useState } from 'react';
import axios from 'axios';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './Login.styles';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const login = () => {
    axios
      .post('localhost:8080/api/auth', { email, password })
      .then(() => {
        console.log('Success');
      })
      .catch((error) => {
        console.log(error);
        navigation.navigate('Modal');
      });
  };

  const handleLogin = () => {
    if (!email.length || !password.length) {
      return;
    }
    login();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Life Share</Text>
      <View>
        <Text>Login</Text>
        <TextInput style={styles.input} onChangeText={setEmail} />
        <Text style={{ marginTop: 20 }}>Senha</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          onChangeText={setPass}
        />
      </View>
      <View>
        <Button title="ENTRAR" color="#E84C0E" onPress={handleLogin} />
        <Text
          style={styles.signUp}
          onPress={() => navigation.navigate('Dados Pessoais')}
        >
          Cadastre-se
        </Text>
      </View>
    </View>
  );
};

export default Login;
