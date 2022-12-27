import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { Link } from "react-router-dom"



export default function Planos(props) {

    const {token, planos, setPlanos, reset} = props
    

    useEffect(() => {
       
        const url = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships"
        const config = {
           headers:{  Authorization: `Bearer ${token}` 
        } }
        console.log(token, "token1")
        const promise = axios.get(url, config)

        promise.then((res) => setPlanos(res.data))
        promise.catch((err) => console.log(err.response.data))


    }, [reset])

  

    return (

        <Container>
        <Header>
            <h1>Escolha seu Plano</h1>
        </Header>
        {planos.map((e) => (
            <StyledLink key={e.id} to={`/subscriptions/${e.id}`}>
                <H2plano>
                    <Image>
                        <img src={e.image}/>
                    </Image>
                    <Price>
                        <h1>R$ {e.price}</h1>
                    </Price>
                </H2plano>
            </StyledLink>
        ))}
    </Container>
)
}

const StyledLink = styled(Link)`
text-decoration: none;
`

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

const Header = styled.div`
margin: 29px 0 24px 0;
h1{
    font-family: 'Roboto';
    width:275px;
    height: 38px;
    font-size: 27px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: start;
    color:#FFFFFF;

}
`

const H2plano = styled.div`
width: 290px;
height: 180px;
display: flex;
justify-content: space-between;
align-items: center;
border: 3px solid #7E7E7E;
border-radius: 5px;
margin-bottom: 10px;
`

const Image = styled.div`
padding-left: 10px;
`

const Price = styled.div`
padding-right: 10px;
h1{
    color: #fff;
    font-weight: 700;
    font-size: 24px;
}
`