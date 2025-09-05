import CarCard from "../components/CarCard";
import Calculator from "../components/Calculator";

import bmw from "../assets/bmwm3.jpg";
import audi from "../assets/audia4.jpg";
import tesla from "../assets/tesla.jpg";

export default function Home() {
  const cars = [
    { id: 1, name: "BMW M3", price: 350000, img: bmw },
    { id: 2, name: "Audi A4", price: 280000, img: audi },
    { id: 3, name: "Tesla Model 3", price: 320000, img: tesla },
  ];

  return (
    <section className="p-8 bg-gray-900 text-gray-200">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Carros à Venda</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <div className="flex justify-center">
        <Calculator />
      </div>
    </section>
  );
}
