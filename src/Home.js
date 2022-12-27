import styled, { ServerStyleSheet } from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"



export default function Home (props) {

    const navigate = useNavigate()


    const {infos, name, perks, forms, token, setReset, reset} = props
    

    // console.log(infos.membership.image, "infos")






console.log(infos.image, "image")

console.log(perks, "perks2")


function mudarPLano () {

    const url = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions"
    const config = {
       headers:{  Authorization: `Bearer ${token}` 
    } }
    console.log(token, "post")
    const promise = axios.post(url, forms, config)

    promise.then((res) => {
    navigate("/home")    
   
})        
    promise.catch((err) => console.log(err.response.data))
}       

function cancelar() {



  const url = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions"
  const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }
  console.log(token, "post")
  const promise = axios.delete(url, config)

  promise.then((res) => {
    setReset(!reset)
    navigate("/subscription")  
  })
  promise.catch((err) => console.log(err.response.data))
}





    return (

        <Container> 

      <ContainerLogo>
       <img src={infos.membership.image}/>
       <ion-icon name="person-circle-outline"></ion-icon>
       </ContainerLogo>
       <h1> Olá, {name}</h1>
       {perks.map((p) => <a href={p.link}><button>{p.id}-{p.title}</button></a>)}

      <ContainerButton>
       <button onClick={()=> navigate("/subscription")}>Mudar Plano</button>

       <button className="cancelar" onClick={cancelar}>Cancelar Plano</button>

       </ContainerButton>

       


        </Container>
    )
}


const Container = styled.div`
  width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
  background-color: #0E0E13;
  h1 {  
  margin-top:12.13px;
  margin-bottom:53px;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  color:#FFFFFF;
  }
  button{
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
  margin-bottom: 8px;
  margin-left:38px;
}
.cancelar {
  background: #FF4747;

}
  ion-icon {
    color: white;
    font-size: 50px;
  }
  `


const ContainerLogo = styled.div`
display: flex;
    justify-content:space-between;
    img{
      height: 50.86px;
      width: 74.52px;
      margin-top:32px;
      margin-left:38px;
    }
    ion-icon{
      height: 34px;
      width: 34px;
      margin-top:22px;
      margin-right:22px;
    }
`
const ContainerButton =styled.div`
position: fixed;
bottom: 122px;
left: 0;
display:flex;
flex-direction:column;
`