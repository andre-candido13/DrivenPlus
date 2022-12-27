import GlobalStyle from "./GlobalStyle"
import { useState } from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import LoginPage from "./LoginPage"
import SignUpPage from "./SignUpPage"
import Planos from "./Planos"
import Plano from "./Plano"
import Home from "./Home"





export default function App() {

  const [token, setToken] = useState("")
  const [form, setForm] = useState({ email: "", password: "" }); 
  const [name, setName] = useState("")
  const [planos, setPlanos] = useState([])
  const [infos, setInfos] = useState([])
  const [perks, setPerks] = useState([])
  const [forms, setForms] = useState({membershipId: "", cardName: "", cardNumber:"", securityNumber:"", expirationDate:""})
  const [reset, setReset] = useState(false)
  

  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<LoginPage form={form} setForm={setForm} setName={setName} setToken={setToken}/>}/>
      <Route path="sign-up" element={<SignUpPage/>}/>
      <Route path="/subscription" element={<Planos reset={reset} planos={planos} setPlanos={setPlanos} token={token}/>}/>
      <Route path="/subscriptions/:id_do_plano" element={<Plano setInfos={setInfos} planos={planos} setPlanos={setPlanos} perks={perks} setPerks={setPerks} forms={forms} setForms={setForms} token={token}/>}/>
      <Route path="/home" element={<Home setReset={setReset} reset={reset} infos={infos} name={name} token={token} perks={perks} forms={forms}/>}/>





    </Routes>
    </BrowserRouter>
  )
}


