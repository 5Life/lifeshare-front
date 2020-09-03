import React from 'react'
import { Text, View, Dimensions, StyleSheet } from 'react-native'

var { height } = Dimensions.get('window');

var box_count = 2;
var box_height = height / box_count;

export default function Profile({ navigation }) {
  return(
    <View style={styles.container}>
      <View style={[styles.box, styles.profile]}>
        <Text style={styles.data}>Andrezinho</Text>
        <Text style={styles.data}>O+</Text>
        <Text style={styles.data}>Órgãos</Text>
        <Text style={styles.data}>Sangue</Text>
      </View>
      <View style={[styles.box, styles.emptyBox]}>
        <Text style={styles.empty}>Você ainda não tem doações cadastradas</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    display: "flex",
    height: box_height
  },
  profile: {
    backgroundColor: "#E84C0E"
  },
  data: {
    fontSize: 30,
    color: "white"
  },
  emptyBox: {
    justifyContent: "center",
    alignItems: "center"
  },
  empty: {
    fontSize: 20
  }
})