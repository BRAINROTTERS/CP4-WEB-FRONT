import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import CalculadoraNormal from "./routes/CalculadoraNormal";
import Contato from "./routes/Contato";
import Compra from "./routes/Compra";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <Nav />
        <main className="flex-grow">
          <Routes>
          
            <Route path="/" element={<Home />} />       
            <Route path="/home" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/compra/:id" element={<Compra />} />
            <Route path="/calculadora-normal" element={<CalculadoraNormal />} />

          </Routes>
          
        </main>
        
        
       
        <Footer />
      </div>
    </Router>
  );
}
