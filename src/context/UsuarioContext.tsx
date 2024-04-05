import React,{createContext} from "react";
import dadosUsuarios from "../data/dadosUsuarios";

const UsuarioContext = createContext({})

export const UsuarioProvider = props=>{
    return(
        <UsuarioContext.Provider value={{
            estado:{
                dadosUsuarios
            }
        }}>
         {props.children}   
        </UsuarioContext.Provider>
    )
}



export default UsuarioContext

