
import React, {createContext, useState} from "react"; 


export const AuthContext = createContext({});



function AuthProvider(props){

    
    const [form, setForm] = useState({ email: "", password: "" }); 
    const [name, setName] = useState("")
    const [planos, setPlanos] = useState([])
    const [infos, setInfos] = useState([])
    const [perks, setPerks] = useState([])
    const [forms, setForms] = useState({membershipId: "", cardName: "", cardNumber:"", securityNumber:"", expirationDate:""})
    const [reset, setReset] = useState(false)
    // const [token, setToken] = useState("")
    const [token, setToken] = useState(localStorage.getItem("token"))

    console.log(token);

    return (
    <AuthContext.Provider value={{token, setToken,  planos, setPlanos, setInfos, perks, setPerks, form, setForm, name, setName,infos,
    forms, setForms, reset, setReset }}>
    {props.children}
    </AuthContext.Provider>
    )
    }
    
    export default AuthProvider; 