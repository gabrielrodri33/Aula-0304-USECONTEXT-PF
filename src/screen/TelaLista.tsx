import { Avatar, Button, Icon, ListItem, Text } from "@rneui/base";
import { Alert, FlatList,View } from "react-native";
//import DadosUsuario from "../dados/DadosUsuario";

import { useContext } from "react";
import UsuarioContext from "../context/UsuarioContext";

 

export default props =>{

    const {estado} = useContext(UsuarioContext)
    console.log(Object.keys(estado.DadosUsuario))
      
function getUsuarios({item}){
    return(
        <ListItem 
            onPress={()=>props.navigation.navigate("TelaForm",item)}
            bottomDivider
        >
            <Avatar source={{uri: item.fotoPerfil}} rounded size={60}/>
            <ListItem.Content>
                <ListItem.Title>{item.nome}</ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>

            <ListItem.Content right style={{flexDirection:'row'}}>
                <Button 
                    icon={<Icon name='edit' color='orange' />} 
                    type="clear"
                    onPress={()=>props.navigation.navigate("TelaForm",item)}
                />
                <Button 
                    icon={<Icon name='delete' color='red' />} 
                    type="clear"
                    onPress={()=>Alert.alert("EXCLUIR REGISTRO","Deseja excluir?",[
                        {
                            text:'SIM',
                            onPress(){alert("USUARIO DELETADO - ID:"+item.id)}
                        },
                        {
                            text:"NÃO",
                            onPress(){alert("USUARIO NAO DELETADO")}
                        }
                ])}
                />
            </ListItem.Content>
            
        </ListItem>
    )
}

    return(
        <View>
        <Text>TELA LISTAGEM</Text>
        <FlatList
            data={estado.DadosUsuario}
            renderItem={getUsuarios}
        />
        </View>
    )
}