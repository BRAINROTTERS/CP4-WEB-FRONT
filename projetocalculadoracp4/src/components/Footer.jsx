export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 text-center py-6 mt-10 border-t border-gray-800">
      <p>© {new Date().getFullYear()} <span className="text-blue-400">CarShop</span> - Todos os direitos reservados.</p>
    </footer>
  );
}
