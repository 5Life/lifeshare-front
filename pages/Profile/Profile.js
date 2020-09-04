import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Profile({ navigation }) {
  return(
    <View style={[styles.main,styles.container]}>
      <View style={[styles.main,styles.container, styles.profile]}>
        <View style={styles.main}>
          <Image 
            source={require('../../assets/Ellipse2.png')}
            style={{minHeight: 150, minWidth: 150, margin: 10
            }}/>
          <View style={[styles.main, styles.row]}>
            <Text style={styles.data}>Andrezinho</Text>
            <Text style={styles.data}> O+</Text>
            <Image source={require('../../assets/Ellipse8.png')}
            style={{width:30, height:30, marginLeft:10
            }}/>
          </View>
        </View>
        <View style={styles.basicData}>
            <Text style={styles.data}>Órgãos</Text>
            <Text style={styles.data}>Sangue</Text>
        </View>
      </View>
      <View style={[styles.main,styles.container]}>
        <Text style={styles.empty}>Você ainda não tem doações cadastradas</Text>  
        <Image source={require('../../assets/semDoacoes.png')}
            style={{minHeight:80, minWidth:80, marginTop:10}}/>
        <View style={styles.button}>
          <TouchableOpacity>
            <Image 
              style={{width:45, height:45}} 
              source={require('../../assets/buttonAdd.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:"100%"
  },
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  profile: {
    backgroundColor: "#E84C0E",
  },
  data: {
    fontSize: 25,
    color: "white"
  },
  empty: {
    fontSize: 18,
  },
  row: {
    flexDirection: "row"
  },
  basicData:{
    display:"flex", 
    flexDirection:"row", 
    justifyContent:"space-around", 
    width:"100%",
    marginTop:20
  },
  button: {
    position: "absolute", 
    bottom:20, 
    right:10
  }
})