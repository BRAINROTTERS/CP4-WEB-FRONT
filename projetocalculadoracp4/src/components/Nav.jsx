import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";


export default function Nav() {
  const { items } = useCart();
function Nav({ itemsCount }) {
  const { items } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        borderBottom: "1px solid #e5e7eb",
        padding: "12px 16px",
        marginBottom: 24,
        background: "#fafafa",
        borderRadius: 8,
      }}
      aria-label="Barra de navegação"
    >
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h2 style={{ margin: 0 }}>🚗 CarStore</h2>
        </Link>

        {/* Botão menu hambúrguer (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            background: "transparent",
            cursor: "pointer",
          }}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* Links (desktop + mobile aberto) */}
        <div
          style={{
            display: open ? "flex" : "none",
            flexDirection: "column",
            gap: 12,
            width: "100%",
            marginTop: 12,
          }}
        >
          <NavLinks itemsCount={items.length} />
        </div>

        {/* Links (desktop visível sempre) */}
        <div
          style={{
            display: "none",
            gap: 16,
          }}
          className="nav-desktop"
        >
          <NavLinks itemsCount={items.length} />
        </div>
      </div>

      <style jsx>{`
        /* Desktop */
        @media (min-width: 640px) {
          .nav-desktop {
            display: flex !important;
            align-items: center;
          }
        }
      `}</style>
    </nav>
  );
}
  return (
    <>
      <Link href="/cars/civic-2022" style={linkStyle}>
        Carros
      </Link>
      <Link href="/cart" style={linkStyle}>
        🛒 Carrinho ({itemsCount})
      </Link>
      <Link href="/about" style={linkStyle}>
        Sobre
      </Link>
    </>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#111",
  padding: "6px 10px",
  borderRadius: 6,
  border: "1px solid transparent",
  transition: "0.2s",
};

