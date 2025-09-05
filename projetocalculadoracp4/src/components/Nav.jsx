import { Link } from "react-router-dom";
import logo from "../assets/image-Photoroom.png";
const marca = [
  { id: 5, name: "logo-marca", img: logo }
];


export default function Nav() {
  return (
    <nav className="bg-gray-900 text-gray-200 px-6 py-4 flex justify-between items-center shadow-md">
      <div className="">
    <img className="w-40 h-27" src={marca[0].img} alt={marca[0].name} />
</div>
      <ul className="flex gap-6">
         <Link to="/" className="hover:text-blue-400 text-2xl transition"style={{ fontFamily: "'Kameron', sans-serif" }}>Home</Link>
          <Link to="/calculadora-normal" className="hover:text-blue-400 text-2xl transition"style={{ fontFamily: "'Kameron', sans-serif" }}> Calculadora </Link>
        <Link to="/contato" className="hover:text-blue-400 text-2xl transition"style={{ fontFamily: "'Kameron', sans-serif" }}>Contato</Link>
      </ul>
    </nav>
  );
}
