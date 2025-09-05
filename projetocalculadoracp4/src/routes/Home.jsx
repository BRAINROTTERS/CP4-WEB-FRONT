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
  function App() {
  return (
    <div style={{ fontFamily: "'Kameron', sans-serif" }}>
      <h1>Texto com a Fonte Kameron</h1>
    </div>
  );
}

  return (
    <section className="p-8 bg-gray-900 text-gray-200">
      <h2 className="text-4xl text-center mb-8 text-blue-400" style={{ fontFamily: "'Kameron', sans-serif" }}>Carros à Venda</h2>
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
