import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './Modal.styles';

const Modal = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Usuario ou Senha incorreto.</Text>
    <Button
      style={styles.close}
      color="#E84C0E"
      title={'Fechar'}
      onPress={() => navigation.goBack()}
    />
  </View>
);

export default Modal;
