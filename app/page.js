"use client";
import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [logado, setLogado] = useState(false);
  const [saldo, setSaldo] = useState(3000);
  const [valorAposta, setValorAposta] = useState("");
  const [mensagem, setMensagem] = useState("");

  const fazerLogin = () => {
    if (nome.trim() !== "") setLogado(true);
  };

  const apostar = (odd) => {
    if (!valorAposta || valorAposta <= 0) {
      setMensagem("Digite um valor válido.");
      return;
    }

    if (valorAposta > saldo) {
      setMensagem("Saldo insuficiente.");
      return;
    }

    const ganhou = Math.random() > 0.5;

    if (ganhou) {
      const premio = valorAposta * odd;
      setSaldo(saldo + premio);
      setMensagem("Ganhou! Recebeu " + premio + " Kz (Odd " + odd + ")");
    } else {
      setSaldo(saldo - valorAposta);
      setMensagem("Perdeu a aposta.");
    }

    setValorAposta("");
  };

  if (!logado) {
    return (
      <div style={fundoLogin}>
        <div style={card}>
          <h1 style={titulo}>PlayMood VIP</h1>
          <input
            style={input}
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button style={botaoDourado} onClick={fazerLogin}>
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={fundo}>
      <div style={card}>
        <h1 style={titulo}>Bem-vindo, {nome}</h1>
        <h2>Saldo: {saldo} Kz</h2>

        <input
          style={input}
          type="number"
          placeholder="Valor da aposta"
          value={valorAposta}
          onChange={(e) => setValorAposta(e.target.value)}
        />

        <h3>⚽ Jogo Futebol (Odd 2.00)</h3>
        <button style={botaoVerde} onClick={() => apostar(2)}>
          Apostar Futebol
        </button>

        <h3>🎲 Dupla Chance (Odd 1.50)</h3>
        <button style={botaoAzul} onClick={() => apostar(1.5)}>
          Apostar Dupla Chance
        </button>

        <h3>💎 Super Odd (Odd 3.00)</h3>
        <button style={botaoVermelho} onClick={() => apostar(3)}>
          Apostar Super Odd
        </button>

        <p style={{ marginTop: 20 }}>{mensagem}</p>
      </div>
    </div>
  );
}

const fundo = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const fundoLogin = {
  minHeight: "100vh",
  background: "black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const card = {
  backgroundColor: "#111",
  padding: 30,
  borderRadius: 12,
  width: 350,
  textAlign: "center",
  color: "white",
  boxShadow: "0 0 20px rgba(0,0,0,0.6)",
};

const titulo = {
  color: "#FFD700",
};

const input = {
  width: "100%",
  padding: 10,
  marginBottom: 15,
  borderRadius: 6,
  border: "none",
};

const botaoDourado = {
  width: "100%",
  padding: 10,
  backgroundColor: "#FFD700",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: "bold",
};

const botaoVerde = {
  width: "100%",
  padding: 10,
  backgroundColor: "#28a745",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  color: "white",
};

const botaoAzul = {
  width: "100%",
  padding: 10,
  backgroundColor: "#007bff",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  color: "white",
};

const botaoVermelho = {
  width: "100%",
  padding: 10,
  backgroundColor: "#dc3545",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  color: "white",
};


