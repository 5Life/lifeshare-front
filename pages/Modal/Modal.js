import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './Modal.styles';

const Modal = ({ navigation, route }) => {
  const message =
    (route && route.params && route.params.errorMessage) ||
    'Mensagem genérica de erro';

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.text}>{message}</Text>
        <Button
          color="#E84C0E"
          title="Tentar novamente"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default Modal;
