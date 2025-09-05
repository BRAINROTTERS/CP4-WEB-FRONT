import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <div className="border border-gray-800 rounded-lg shadow-lg overflow-hidden bg-gray-800 hover:scale-105 transition-transform">
      <img src={car.img} alt={car.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{car.name}</h3>
        <p className="text-gray-400">Preço: R$ {car.price.toLocaleString()}</p>
        <Link
        to={`/compra/${car.id}`}
        className="mt-3 block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
        Comprar
      </Link>
      </div>
    </div>
  );
}
