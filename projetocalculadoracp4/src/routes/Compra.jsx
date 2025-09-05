import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Compra() {
  const { id } = useParams();
  const [entrega, setEntrega] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Obrigado pela compra! Entraremos em contato por e-mail em breve.");
  };

  return (
    <section className="p-8 bg-gray-900 text-gray-200 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
        Finalizar Compra (Carro ID: {id})
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        <div className="mb-4">
          <label className="block mb-1">Nome Completo</label>
          <input
            type="text"
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">E-mail</label>
          <input
            type="email"
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">CPF</label>
          <input
            type="text"
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Região onde mora</label>
          <input
            type="text"
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Forma de retirada</label>
          <select
            onChange={(e) => setEntrega(e.target.value === "entrega")}
            className="w-full p-2 rounded bg-gray-700 text-white"
          >
            <option value="retirada">Retirar na concessionária</option>
            <option value="entrega">Entrega em casa</option>
          </select>
        </div>

        {entrega && (
          <div className="mb-4">
            <label className="block mb-1">Endereço Completo</label>
            <input
              type="text"
              required
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 p-3 rounded-lg text-white font-semibold"
        >
          Finalizar Compra
        </button>
      </form>
    </section>
  );
}
