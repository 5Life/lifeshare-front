import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './Login.styles';
import loginApi from './api/login';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const handleLogin = async () => {
    if (!email.length || !password.length) {
      return;
    }

    try {
      const data = await loginApi.authenticateUser({ email, password });
      // Salvar token, etc
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
