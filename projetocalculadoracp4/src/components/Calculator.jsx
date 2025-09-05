import { useState } from "react";

export default function Calculator() {
  const [price, setPrice] = useState("");
  const [entry, setEntry] = useState("");
  const [months, setMonths] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const p = parseFloat(price);
    const e = parseFloat(entry);
    const m = parseInt(months);

    if (isNaN(p) || isNaN(e) || isNaN(m) || m <= 0) {
      setResult("Preencha todos os campos corretamente!");
      return;
    }

    const financed = p - e;
    const installment = financed / m;

    setResult(`Parcelas de R$ ${installment.toFixed(2)} em ${m} meses.`);
  };

  return (
    <section className="p-8 bg-gray-950 rounded-lg shadow-md max-w-md mx-auto mt-10 text-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">Calculadora de Financiamento</h2>
      
      <input
        type="number"
        placeholder="Preço do carro"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border border-gray-700 bg-gray-800 text-white rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Valor de entrada"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        className="w-full border border-gray-700 bg-gray-800 text-white rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Quantidade de meses"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
        className="w-full border border-gray-700 bg-gray-800 text-white rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={calculate}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition"
      >
        Calcular
      </button>

      {result && (
        <p className="mt-6 text-center font-semibold text-lg text-gray-100">{result}</p>
      )}
    </section>
  );
}
