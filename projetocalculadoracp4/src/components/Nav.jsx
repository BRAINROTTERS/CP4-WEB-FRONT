import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-gray-900 text-gray-200 px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-blue-400">CarShop</h1>
      <ul className="flex gap-6">
         <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/calculadora-normal" className="hover:text-blue-400 transition"> Calculadora </Link>
        <Link to="/contato" className="hover:text-blue-400 transition">Contato</Link>
      </ul>
    </nav>
  );
}
