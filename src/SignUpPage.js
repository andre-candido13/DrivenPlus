import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import BigLogo from "./BigLogo";
import axios from "axios";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";




export default function LoginPage () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpf, setCpf] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()

    function createAccount (e) {

        e.preventDefault()
        const url = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up"
        const body = {email, name, cpf, password}

        const promise = axios.post(url, body)
        promise.then(res=> {
            alert("Cadastro realizado")
            navigate("/")
            
        })

        promise.catch((err) => alert(err.response.data.message))

    }

    return (

        <Container>
            <BigLogo/>
            <form onSubmit={createAccount}>
                <Input 
                type="text"
                placeholder="name"
                value={name}
                onChange={e => setName(e.target.value)}
                required/>

                <Input 
                type="CPF"
                placeholder="CPF"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
                required/>

                <Input 
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required/>

                <Input 
                type="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required/>



            <Button type="submit">Cadastrar</Button>

            </form>

            <StyledLink to="/">Já possui uma conta? Entre</StyledLink>

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
  
