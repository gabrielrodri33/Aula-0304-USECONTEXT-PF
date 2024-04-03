import { Text, ListItem, Avatar, Icon } from "@rneui/base";
import { FlatList,View } from "react-native";
import dadosUsuarios from "../data/dadosUsuarios";
import { Button } from "@rneui/themed";


function getUsuarios({item}){
    return(
        <ListItem>
            <Avatar source={{uri: item.fotoPerfil}} rounded size={60}/>
            <ListItem.Content>
                <ListItem.Title>{item.nome}</ListItem.Title>
                <ListItem.Title>{item.email}</ListItem.Title>
            </ListItem.Content>

            <ListItem.Content right>
            <Button
                    icon={<Icon name='edit' color='orange' backgroundColor={'white'}/>} 
                    type="clear"
                />
            </ListItem.Content>
            <ListItem.Content right>
                <Button
                    icon={<Icon name='delete' color='red'/>}
                    type="clear"
                />
            </ListItem.Content>
        </ListItem>
    )
}

export default props =>{

    return(
        <View>
        <Text>TELA LISTAGEM</Text>
        <FlatList
            data={dadosUsuarios}
            renderItem={getUsuarios}
        />
        </View>
    )
}