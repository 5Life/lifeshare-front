import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './pages/Login'
import Register from './pages/Register'
import Modal from './pages/Modal'
import Profile from './pages/Profile'

const Stack = createStackNavigator(); 
const Root = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Dados Pessoais" component={Register}/>
        <Stack.Screen name="Meu Perfil" component={Profile}/>
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator mode={"modal"}>
        <Root.Screen name={"Main"} component={MainStack} options={{headerShown: false}}/>
        <Root.Screen name={"Modal"} component={Modal} options={{headerShown: false}}/>
      </Root.Navigator>
    </NavigationContainer>
  )
}