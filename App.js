/*
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @rneui/themed @rneui/base
*/
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TelaFormulario from './src/telas/TelaFormulario';
import TelaLista from './src/telas/TelaLista';
import { Button, Icon, Text} from "@rneui/base";

import { UsuarioProvider } from './src/context/UsuarioContext';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <UsuarioProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='TelaList'

          screenOptions={{
            headerStyle:{
              backgroundColor:'green'
            },headerTintColor:'white'
          }}
        >
          <Stack.Screen
            name='TelaList'
            component={TelaLista}
            options={({navigation})=>{
              return{
                title:'TELA LISTAGEM',
                headerRight:()=>(
                  <Button
                    type='clear' 
                    icon={<Icon  name='add' color='white' size={30}/>}
                    onPress={()=>navigation.navigate('TelaForm')}
                  />
                )

              }
            }}
            
          />

          <Stack.Screen
            name='TelaForm'
            component={TelaFormulario}
            options={{title:'TELA FORMULÁRIO'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </UsuarioProvider>
  );
}

