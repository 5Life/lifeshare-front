import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default function Modal({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Usuario ou Senha incorreto.</Text>
      <Button style={styles.close} color="#E84C0E" title={"Fechar"} onPress={() => navigation.goBack() }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "transparent",
    justifyContent: 'space-around',
    textAlign: "center"
  },
  text: {
    fontSize: 30,
    color: "#E84C0E"
  }
})