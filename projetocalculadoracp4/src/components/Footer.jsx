import React from 'react'

/**
 * Footer.jsx
 * Componente Footer com uma calculadora de IMC (BMI) embutida.
 * - Recebe o peso em kg e altura em cm
 * - Calcula IMC = peso / (altura_m ** 2)
 * - Mostra a categoria de acordo com a OMS
 * - Salva último resultado no localStorage para persistência simples
 *
 * Uso: importe e coloque <Footer /> dentro do layout (por exemplo em pages/_app.js)
 */

export default function Footer() {
  const [peso, setPeso] = useState("");
  const [alturaCm, setAlturaCm] = useState("");
  const [imc, setImc] = useState(null);
  const [categoria, setCategoria] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [saved, setSaved] = useState(null);

  useEffect(() => {
    // Carrega último resultado salvo localmente (se houver)
    try {
      const raw = localStorage.getItem("carstore:last-bmi");
      if (raw) setSaved(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  function calcularIMC() {
    setMensagem("");
    const p = parseFloat(String(peso).replace(",", "."));
    const hcm = parseFloat(String(alturaCm).replace(",", "."));

    if (Number.isNaN(p) || Number.isNaN(hcm) || p <= 0 || hcm <= 0) {
      setMensagem("Por favor, informe peso (kg) e altura (cm) válidos.");
      setImc(null);
      setCategoria("");
      return;
    }

    const alturaM = hcm / 100;
    const valor = p / (alturaM * alturaM);
    const rounded = Math.round(valor * 10) / 10; // 1 casa decimal
    setImc(rounded);

    const cat = categoriaIMC(rounded);
    setCategoria(cat.label);
    setMensagem(cat.advice);

    const record = {
      imc: rounded,
      categoria: cat.label,
      peso: p,
      alturaCm: hcm,
      when: new Date().toISOString(),
    };

    try {
      localStorage.setItem("carstore:last-bmi", JSON.stringify(record));
      setSaved(record);
    } catch (e) {
      // ignore storage errors
    }
  }

  function limpar() {
    setPeso("");
    setAlturaCm("");
    setImc(null);
    setCategoria("");
    setMensagem("");
  }

  function categoriaIMC(valor) {
    // Classificação padrão (OMS)
    if (valor < 18.5)
      return {
        label: "Abaixo do peso",
        advice: "Consulte um profissional para avaliar ganho de massa e alimentação.",
      };
    if (valor >= 18.5 && valor < 25)
      return {
        label: "Peso normal",
        advice: "Parabéns! Mantenha uma alimentação equilibrada e atividade física.",
      };
    if (valor >= 25 && valor < 30)
      return {
        label: "Sobrepeso",
        advice: "Considere ajustes na dieta e mais atividade física.",
      };
    if (valor >= 30 && valor < 35)
      return {
        label: "Obesidade grau I",
        advice: "Procure orientação médica e nutricional.",
      };
    if (valor >= 35 && valor < 40)
      return {
        label: "Obesidade grau II",
        advice: "É recomendado acompanhamento médico e mudanças no estilo de vida.",
      };
    return {
      label: "Obesidade grau III",
      advice: "Procure assistência médica especializada.",
    };
  }

  return (
    <footer
      style={{
        marginTop: 32,
        padding: 16,
        borderTop: "1px solid #e5e7eb",
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexWrap: "wrap",
        borderRadius: 8,
        background: "#fafafa",
      }}
      aria-label="Footer com calculadora de IMC"
    >
      <div style={{ minWidth: 260, flex: "1 1 360px" }}>
        <h3 style={{ margin: "0 0 8px" }}>Calculadora de IMC</h3>

        <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
          <label style={{ display: "flex", flexDirection: "column", minWidth: 120 }}>
            Peso (kg)
            <input
              inputMode="decimal"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="ex: 75"
              style={{ padding: 8, borderRadius: 8, border: "1px solid #e5e7eb", marginTop: 6 }}
              aria-label="Peso em quilos"
            />
          </label>

          <label style={{ display: "flex", flexDirection: "column", minWidth: 140 }}>
            Altura (cm)
            <input
              inputMode="decimal"
              value={alturaCm}
              onChange={(e) => setAlturaCm(e.target.value)}
              placeholder="ex: 175"
              style={{ padding: 8, borderRadius: 8, border: "1px solid #e5e7eb", marginTop: 6 }}
              aria-label="Altura em centímetros"
            />
          </label>

          <div style={{ display: "flex", gap: 8, alignItems: "end" }}>
            <button
              onClick={calcularIMC}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid #111",
                cursor: "pointer",
                height: 40,
              }}
            >
              Calcular
            </button>
            <button
              onClick={limpar}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                background: "transparent",
                cursor: "pointer",
                height: 40,
              }}
            >
              Limpar
            </button>
          </div>
        </div>

        {mensagem && (
          <p style={{ margin: "6px 0", color: "#374151" }}>{mensagem}</p>
        )}
      </div>

      <div style={{ minWidth: 220, flex: "0 0 260px", textAlign: "right" }}>
        <div style={{ marginBottom: 8 }}>
          <strong style={{ display: "block", fontSize: 20 }}>
            {imc !== null ? `IMC: ${imc}` : "IMC: —"}
          </strong>
          <span style={{ display: "block", opacity: 0.8 }}>
            {categoria || "Categoria: —"}
          </span>
        </div>

        {saved ? (
          <div
            style={{
              border: "1px dashed #e5e7eb",
              padding: 10,
              borderRadius: 8,
              background: "#fff",
              textAlign: "left",
            }}
          >
            <small style={{ display: "block", color: "#6b7280" }}>Último resultado salvo</small>
            <div style={{ marginTop: 6 }}>
              <div><strong>{saved.imc}</strong> — {saved.categoria}</div>
              <div style={{ fontSize: 12, color: "#6b7280" }}>
                {saved.peso} kg · {saved.alturaCm} cm
              </div>
              <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 6 }}>
                {new Date(saved.when).toLocaleString("pt-BR")}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ color: "#6b7280", fontSize: 14 }}>Nenhum resultado salvo.</div>
        )}
      </div>
    </footer>
  );
}

// ...existing code...
function Footer() {
  // Footer component code
}


