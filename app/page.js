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

    setMensagem("Depósito enviado. Aguardando confirmação...");

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
      <div style={{padding: 40}}>
        <h1>PlayMood VIP</h1>
        <input
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button onClick={fazerLogin}>Entrar</button>
      </div>
    );
  }

  return (
    <div style={{padding: 40}}>
      <h1>Bem-vindo, {nome}</h1>
      <h2>Saldo: {saldo} Kz</h2>

      <hr />

      <h3>Depositar Créditos</h3>

      <select value={banco} onChange={(e) => setBanco(e.target.value)}>
        <option>BFA</option>
        <option>BCI</option>
        <option>BAI</option>
      </select>

      <br /><br />

      <input
        type="number"
        placeholder="Valor a depositar"
        value={valorDeposito}
        onChange={(e) => setValorDeposito(e.target.value)}
      />

      <button onClick={depositar}>Enviar Comprovante</button>

      <hr />

      <h3>Fazer Aposta</h3>

      <input
        type="number"
        placeholder="Valor da aposta"
        value={valorAposta}
        onChange={(e) => setValorAposta(e.target.value)}
      />

      <button onClick={apostar}>Apostar</button>

      <p>{mensagem}</p>
    </div>
  );
      }
