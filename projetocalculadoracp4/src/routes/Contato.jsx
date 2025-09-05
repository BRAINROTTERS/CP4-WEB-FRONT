export default function Contato() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada! Responderemos por e-mail em breve.");
  };

  return (
    <section className="p-8 bg-gray-900 text-gray-200 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
        Contato
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        <div className="mb-4">
          <label className="block mb-1">Nome</label>
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
          <label className="block mb-1">Mensagem</label>
          <textarea
            required
            className="w-full p-2 rounded bg-gray-700 text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-white font-semibold"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
}
