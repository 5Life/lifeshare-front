import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './Modal.styles';

const Modal = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.text}>Usuario ou Senha incorretos.</Text>
      <Button
        color="#E84C0E"
        title="Tentar novamente"
        onPress={() => navigation.goBack()}
      />
    </View>
  </View>
);

export default Modal;
