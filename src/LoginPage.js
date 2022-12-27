import axios from "axios"
import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import styled from "styled-components"
import Input from "./Input"
import Button from "./Button"
import BigLogo from "./BigLogo"



export default function LoginPage (props) {

    // const [email, setEmail]= useState("")

    // const [password, setPassword] = useState("")
    
    const [form, setForm] = useState({ email: "", password: "" }); 
    const navigate = useNavigate()
    const {setToken, setName} = props
 

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        } 

    function login (e) {

        e.preventDefault()
        const url = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login"

        // const body = {email, password}

        const promise = axios.post(url, form)
        
        promise.then((res) => { 
        setToken(res.data.token) 
        setName(res.data.name)
        navigate("/subscription")
    });

    
        promise.catch((err) => alert(err.response.data.message))

        // if(userData.membership === null){
        //     navigate("/subscription")
        // } 
        // else {
        //     navigate(`/subscription/${userData.membership.id}`)
        // }

        

    }

    return (

       
        <Container>
            <BigLogo/>
            <form onSubmit={login}>
                <Input 
                type="email"
                name="email"
                placeholder="e-mail"
                value={form.email}
                onChange={handleForm}
                required/>


                <Input 
                type="password"
                name="password"
                placeholder="senha"
                value={form.password}
                onChange={handleForm}
                required/>

                <Button type="submit">Entrar</Button>
    
            </form>

                <StyledLink to="/sign-up">Não possui uma conta? Cadastre-se</StyledLink>

        </Container>


    )

}


const Container = styled.div`
  min-height: 667px;
  width: 375px;
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0E0E13;

`

const StyledLink = styled(Link)`
  
  color: #FFFFFF;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
`  
