import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Frase from './components/Frase'
import Whatsapp from './components/Whatsapp'
import { textosCards, frasesD } from "./Listas"

function App() {
  return (
    <>
      <Header />
      <Frase frases={frasesD} />
      <Whatsapp />
      <Card txtCards={textosCards}/>
    </>
  )
}

export default App
