import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
function App() {


  return (
    // HABILITA A NAVEGAÇÃO POR ROTAS NA APLICAÇÃO
    <BrowserRouter>
    <Nav/>
    <main>
      {/* Gerencia a exibição dos componentes com base na url */}
      <Routes>
        {/* Rota para lidar com as urls não encontradas */}
        <Route path="*" element={<Error/>}/>

        {/* Rota para chamar a página home */}
        <Route path="/" element={<Home/>}/>

         {/* Rota para chamar a página Cliente */}
        <Route path="/cliente" element={<Cliente/>}/>
        

      </Routes>
    </main>
     <Footer/>
    </BrowserRouter>
  )
}

export default App