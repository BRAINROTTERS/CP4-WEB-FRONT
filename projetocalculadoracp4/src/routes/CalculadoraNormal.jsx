import { useState } from "react";

export default function CalculadoraNormal() {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    if (input === "0" && value !== "." && !["+", "-", "*", "/"].includes(value)) {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput("0");
  };

  const handleEqual = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(String(result));
    } catch {
      setInput("Erro");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-72">
        <h2 className="text-center text-xl font-bold mb-4">Calculadora</h2>

        {/* Tela */}
        <div className="bg-black text-right text-2xl font-mono p-3 rounded mb-4 overflow-x-auto">
          {input}
        </div>

        {/* Botões */}
        <div className="grid grid-cols-4 gap-3">
          {["7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+"].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "=" ? handleEqual() : handleClick(btn)
              }
              className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg text-lg font-bold"
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Botão limpar */}
        <button
          onClick={handleClear}
          className="mt-4 w-full bg-red-600 hover:bg-red-500 p-3 rounded-lg text-lg font-bold"
        >
          Limpar
        </button>
      </div>
    </div>
  );
}
