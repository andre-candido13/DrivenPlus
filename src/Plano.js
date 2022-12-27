import styled from "styled-components"
import axios from "axios"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Modal from "react-modal"






Modal.setAppElement("#root");



export default function Plano(props) {

    const { token, planos, setPlanos, setInfos, perks, setPerks } = props

    const navigate = useNavigate()

  


    const { id_do_plano } = useParams();
    const [form, setForm] = useState({ membershipId: id_do_plano, cardName: "", cardNumber: "", securityNumber: "", expirationDate: "" })



    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    useEffect(() => {

        const url = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id_do_plano}`
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.get(url, config)

        promise.then((res) => {
           
            setPerks(res.data.perks)
        })
        promise.catch((err) => console.log(err.response.data))


    }, [])

    console.log(perks,)

    function confirmacao(Event) {
        Event.preventDefault();
    }


    const Modal = () => {
        return <h1>Hello Modal</h1>;
    };


    function dados() {



        const url = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        console.log(token, "post")
        const promise = axios.post(url, form, config)

        promise.then((res) => {
            setInfos(res.data)
            navigate("/home")
            console.log(res.data.perks, "teste array")
        })
        promise.catch((err) => console.log(err.response.data))
    }

  
console.log(planos.image,"imagem")



   
    return (

        <div>


            <Container>

                <Logo>
                    <img src={planos.image} alt="logo do plano"/>
                </Logo>

                <Titulo>
                    {planos.name}
                </Titulo>

                <h2> Beneficios </h2>

                {perks.map((p) => <h1> {p.id}-{p.title}</h1>)}

                <TituloPreco>
                    <h3>Preço</h3>
                    {planos.price}
                </TituloPreco>

                <Form onSubmit={confirmacao}>

                    

                        <input
                            type="name"
                            name="cardName"
                            placeholder="Nome impresso do cartão"
                            value={form.nome}
                            onChange={handleForm}
                            required />


                        <input
                            type="name"
                            name="cardNumber"
                            placeholder="Digitos do cartão"
                            value={form.number}
                            onChange={handleForm}
                            required />

                        <input
                            type="name"
                            name="securityNumber"
                            placeholder="Código de segurança"
                            value={form.codigo}
                            onChange={handleForm}
                            required />




                        <input
                            type="name"
                            name="expirationDate"
                            placeholder="Data de validade"
                            value={form.data}
                            onChange={handleForm}
                            required />

                    


                    <ButtonOne onClick={dados}






                        type="submit">Assinar</ButtonOne>





                </Form>


            </Container>

        </div>


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
  h2{
    margin-top: 22px;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    margin-left: -225px;
    margin-bottom:10px;
    color: #FFFFFF;
  }
  h1{
    margin-left: -177px;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }
  h3{
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color:#FFFFFF;
    margin-left: -177px;
    margin-top:12px;
  }
`

const Logo = styled.div`
  margin-top:87px;
  img {
    width: 139.38px;
    height:95.13px;
  
  }
`


const Titulo = styled.div`
display: flex;
justify-content: center;
width: 164px;
    height:38px;


`
const TituloPreco = styled.div`
display: flex;
margin-left: 44px;
p{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #FFFFFF;
    margin-left: 5px;
}
`
const Form = styled.form`
margin-top: 34px;
input{
    height: 52px;
  width: 299px;
  border: 1px solid #BEBEBE;
  background-color: #FFFFFF;
  color: #222222;
  font-family: 'Lexend Deca', sans-serif;
  padding: 14px;
  margin-bottom: 20px;
  border-radius: 8px;
  ::placeholder {
    color: #7E7E7E;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }
}
input:nth-child(3){
    width:145px;
    height: 52px;
    margin-right:9px;
}
input:nth-child(4){
    width:145px;
    height: 52px;
}
`

const ButtonOne =styled.button`
    height: 52px;
  width: 299px;
  background-color: #FF4791;
  color: #FFFFFF;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  border:none;
  border-radius:8px;
  margin-bottom: 24px;
`
