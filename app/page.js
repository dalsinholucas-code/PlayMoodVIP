"use client";
import { useState } from "react";

export default function Home() {
  const [nome, setNome] = useState("");
  const [logado, setLogado] = useState(false);
  const [saldo, setSaldo] = useState(3000);
  const [valorDeposito, setValorDeposito] = useState("");
  const [banco, setBanco] = useState("BFA");
  const [mensagem, setMensagem] = useState("");
  const [valorAposta, setValorAposta] = useState("");

  const fazerLogin = () => {
    if (nome.trim() !== "") {
      setLogado(true);
    }
  };

  const depositar = () => {
    if (!valorDeposito || valorDeposito <= 0) {
      setMensagem("Digite um valor válido.");
      return;
    }

    setMensagem("Depósito enviado. Aguarde confirmação.");

    setTimeout(() => {
      setSaldo(saldo + Number(valorDeposito));
      setMensagem("Depósito confirmado! Saldo atualizado.");
      setValorDeposito("");
    }, 3000);
  };

  const apostar = () => {
    if (!valorAposta || valorAposta <= 0) {
      setMensagem("Digite um valor válido para apostar.");
      return;
    }

    if (valorAposta > saldo) {
      setMensagem("Saldo insuficiente.");
      return;
    }

    const ganhou = Math.random() > 0.5;

    if (ganhou) {
      const premio = valorAposta * 2;
      setSaldo(saldo + premio);
      setMensagem("Parabéns! Você ganhou " + premio + " Kz!");
    } else {
      setSaldo(saldo - valorAposta);
      setMensagem("Perdeu a aposta. Tente novamente.");
    }

    setValorAposta("");
  };

  if (!logado) {
    return (
      <div style={estiloLogin}>
        <div style={card}>
          <h1 style={titulo}>PlayMood VIP</h1>
          <input
            style={input}
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button style={botaoPrincipal} onClick={fazerLogin}>
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={estiloPagina}>
      <div style={card}>
        <h1 style={titulo}>Bem-vindo, {nome}</h1>
        <h2>Saldo: {saldo} Kz</h2>

        <hr />

        <h3>Depositar Créditos</h3>

        <select style={input} value={banco} onChange={(e) => setBanco(e.target.value)}>
          <option>BFA</option>
          <option>BCI</option>
          <option>BAI</option>
        </select>

        <input
          style={input}
          type="number"
          placeholder="Valor a depositar"
          value={valorDeposito}
          onChange={(e) => setValorDeposito(e.target.value)}
        />

        <button style={botaoVerde} onClick={depositar}>
          Enviar Comprovante
        </button>

        <hr />

        <h3>Fazer Aposta</h3>

        <input
          style={input}
          type="number"
          placeholder="Valor da aposta"
          value={valorAposta}
          onChange={(e) => setValorAposta(e.target.value)}
        />

        <button style={botaoDourado} onClick={apostar}>
          Apostar
        </button>

        <p style={{ marginTop: 20 }}>{mensagem}</p>
      </div>
    </div>
  );
}

const estiloPagina = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
};

const estiloLogin = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #000000, #1f1f1f)",
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
  boxShadow: "0 0 20px rgba(0,0,0,0.5)",
  color: "white",
};

const titulo = {
  color: "#FFD700",
  marginBottom: 20,
};

const input = {
  width: "100%",
  padding: 10,
  marginBottom: 15,
  borderRadius: 6,
  border: "none",
};

const botaoPrincipal = {
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

const botaoDourado = {
  width: "100%",
  padding: 10,
  backgroundColor: "#ffc107",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: "bold",
};
