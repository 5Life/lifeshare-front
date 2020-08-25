import React, { Component } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Life Share</Text>
        <View>
          <Text>Login</Text>
          <TextInput style={styles.input} />
          <Text style={{ marginTop: 20 }}>Senha</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Button title="ENTRAR" color="#E84C0E" />
          <Text style={styles.signUp}>Cadastre-se</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E84C0E",
    height: 30,
    marginTop: 8,
  },
  signUp: {
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 8,
  },
});
