import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Text } from "@rneui/base";

import TelaFormulario from './src/screen/TelaFormulario';
import TelaLista from './src/screen/TelaLista';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

// const {Screen, Navigator} = createNativeStackNavigator();
const {Screen, Navigator} = createDrawerNavigator();

/*
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @rneui/themed @rneui/base
*/

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
      initialRouteName='TelaList'
      screenOptions={{
        headerStyle:{
          backgroundColor:'#272727'
        },headerTintColor: 'white'
      }}>
        <Screen
          name='TelaForm'
          component={TelaFormulario}
        />
        <Screen
          name="TelaList"
          component={TelaLista}
          options={({navigation})=>{
            return{
              title: "Tela Listagem",
              headerRight: ()=>(
                <Button
                  type='clear'
                  icon={<Icon name='add' color='white' size={30}/>}
                  onPress={()=>navigation.navigate('TelaForm')}
                />
              )
            }
          }}
        />
      </Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text h1 h1Style={{color:'red'}}>TURMA 2TDSPF</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
