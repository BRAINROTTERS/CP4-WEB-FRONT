export default function Contato() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada! Responderemos por e-mail em breve.");
  };

  return (
    <section className="p-8 bg-gray-900 text-gray-200 min-h-screen flex items-center">
      <div className="w-full">
        {/* Título com gradiente */}
        <h2
          className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text 
                     bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-md"
          style={{ fontFamily: "Roboto" }}
        >
          Contato
        </h2>

        {/* Formulário estilizado */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gradient-to-br from-gray-800 to-gray-900 
                     p-8 rounded-2xl shadow-xl space-y-6"
        >
          {/* Nome */}
          <div>
            <label className="block mb-2 font-medium">Nome</label>
            <input
              type="text"
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         outline-none transition duration-300"
            />
          </div>

          {/* E-mail */}
          <div>
            <label className="block mb-2 font-medium">E-mail</label>
            <input
              type="email"
              required
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         outline-none transition duration-300"
            />
          </div>

          {/* Mensagem */}
          <div>
            <label className="block mb-2 font-medium">Mensagem</label>
            <textarea
              required
              className="w-full p-3 h-32 rounded-lg bg-gray-700 text-white border border-gray-600
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                         outline-none transition duration-300"
            ></textarea>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 
                       transition transform duration-200 
                       p-3 rounded-lg text-white font-semibold 
                       shadow-md shadow-blue-900"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
