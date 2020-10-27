import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Register from './pages/Register';
import Modal from './pages/Modal';
import Profile from './pages/Profile';
import AddDonation from './pages/Donation/AddDonation';
import EditDonation from './pages/Donation/EditDonation';

const Stack = createStackNavigator();
const Root = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Dados Pessoais" component={Register} />
    <Stack.Screen
      name="Meu Perfil"
      component={Profile}
      options={{
        headerStyle: styles.perfil,
        headerTitleStyle: { color: 'white' },
      }}
    />
    <Stack.Screen name="Adicionar Doação" component={AddDonation} />
    <Stack.Screen name="Editar Doação" component={EditDonation} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Root.Navigator mode={'modal'}>
      <Root.Screen
        name={'Main'}
        component={MainStack}
        options={{ headerShown: false }}
      />
      <Root.Screen
        name={'Modal'}
        component={Modal}
        options={{ headerShown: false }}
      />
    </Root.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  perfil: {
    backgroundColor: '#E84C0E',
  },
});

export default App;
