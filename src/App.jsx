
import Header from './components/Header/Header'
import './App.css'
import Mensagem from './components/Mensagem/Mensagem'
import Horario from './components/Horario/Horario'
import Card from './components/Card/Card'
import Retorno from './components/Retorno/Retorno'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div>
       <Header/>
      <div className="corpo">
       <Mensagem/>
       <Horario/>
       <Card/>
       <Retorno/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
