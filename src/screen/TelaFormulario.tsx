import { Button, Text } from "@rneui/base";
import { TextInput, View,StyleSheet } from "react-native";
import { useState } from "react";


export default props =>{
    const[usuario,setUsario]=useState(props.route.params?props.route.params:{})
    //console.log(Object.keys(props.route.params))

    return(
        <View style={{gap:15}}>
            <Text>NOME</Text>
            <TextInput 
                style={estilo.input}
                value={usuario.nome}

            />

            <Text>EMAIL</Text>
            <TextInput 
                style={estilo.input}
                value={usuario.email}
            />
            <Button title='Salvar'/>
        </View>
    )
}

const estilo = StyleSheet.create({
    input:{
        borderWidth:1,
        borderRadius:5,
        width:250,
        height:40
    }
})