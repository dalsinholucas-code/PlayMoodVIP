"use client";
import { useState } from "react";

export default function Home() {
  const [logado, setLogado] = useState(false);
  const [nome, setNome] = useState("");

  const fazerLogin = () => {
    if (nome.trim() !== "") setLogado(true);
  };

  if (!logado) {
    return (
      <div style={fundoLogin}>
        <div style={cardLogin}>
          <h1 style={titulo}>PlayMood VIP</h1>
          <p style={subtitulo}>Análises Profissionais de Futebol</p>
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
      <div style={container}>
        {/* Hero */}
        <section style={hero}>
          <h1 style={tituloHero}>⚽ PlayMood VIP</h1>
          <p style={subtituloHero}>
            Estratégias, estatísticas e previsões inteligentes para apostas de futebol
          </p>
          <div style={botoesHero}>
            <button style={botaoHero}>Ver Palpite Gratuito</button>
            <button style={botaoHeroVIP}>Tornar-me VIP</button>
          </div>
        </section>

        {/* Como Funciona */}
        <section style={secao}>
          <h2 style={tituloSecao}>Como Funciona</h2>
          <ul>
            <li>✔ Análise estatística das principais ligas</li>
            <li>✔ Estudo tático das equipas</li>
            <li>✔ Avaliação de momento e lesões</li>
            <li>✔ Gestão de banca estratégica</li>
          </ul>
        </section>

        {/* Ligas */}
        <section style={secao}>
          <h2 style={tituloSecao}>Ligas Analisadas</h2>
          <ul>
            <li>Premier League (Inglaterra)</li>
            <li>La Liga (Espanha)</li>
            <li>Serie A (Itália)</li>
            <li>UEFA Champions League</li>
          </ul>
        </section>

        {/* Resultados */}
        <section style={secao}>
          <h2 style={tituloSecao}>Resultados Recentes</h2>
          <ul>
            <li>✅ Manchester City vs Arsenal — Mais de 2.5 Golos</li>
            <li>✅ Real Madrid vs Girona — Vitória Casa</li>
            <li>❌ Inter vs Milan — Ambas Marcam</li>
          </ul>
        </section>

        {/* Planos */}
        <section style={secao}>
          <h2 style={tituloSecao}>Planos</h2>
          <div style={planos}>
            <div style={plano}>
              <h3>Gratuito</h3>
              <ul>
                <li>1 palpite diário</li>
                <li>Acesso limitado</li>
              </ul>
              <button style={botaoPlano}>Acessar Gratuito</button>
            </div>
            <div style={planoVIP}>
              <h3>VIP</h3>
              <ul>
                <li>3–5 análises por dia</li>
                <li>Bilhetes combinados</li>
                <li>Estratégia de stake</li>
                <li>Grupo privado</li>
                <li>Atualizações ao vivo</li>
              </ul>
              <button style={botaoPlanoVIP}>Entrar no VIP</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// ------------------- ESTILOS -------------------

const fundo = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const fundoLogin = {
  ...fundo,
};

const container = {
  width: "90%",
  maxWidth: 900,
};

const cardLogin = {
  backgroundColor: "#111",
  padding: 30,
  borderRadius: 12,
  width: 350,
  textAlign: "center",
  boxShadow: "0 0 20px rgba(0,0,0,0.6)",
};

const titulo = {
  color: "#FFD700",
  fontSize: 28,
  marginBottom: 10,
};

const subtitulo = {
  color: "#fff",
  fontSize: 16,
  marginBottom: 20,
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

// Hero
const hero = {
  textAlign: "center",
  marginBottom: 50,
};

const tituloHero = {
  fontSize: 36,
  color: "#FFD700",
  marginBottom: 10,
};

const subtituloHero = {
  fontSize: 18,
  color: "#fff",
  marginBottom: 20,
};

const botoesHero = {
  display: "flex",
  justifyContent: "center",
  gap: 15,
};

const botaoHero = {
  padding: "10px 20px",
  borderRadius: 6,
  border: "none",
  backgroundColor: "#28a745",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
};

const botaoHeroVIP = {
  ...botaoHero,
  backgroundColor: "#FFD700",
  color: "#111",
};

// Seções
const secao = {
  marginBottom: 50,
};

const tituloSecao = {
  fontSize: 24,
  color: "#FFD700",
  marginBottom: 15,
};

// Planos
const planos = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  gap: 20,
};

const plano = {
  backgroundColor: "#222",
  padding: 20,
  borderRadius: 10,
  width: 250,
  textAlign: "center",
};

const planoVIP = {
  ...plano,
  backgroundColor: "#333",
  border: "2px solid #FFD700",
};

const botaoPlano = {
  marginTop: 15,
  padding: 10,
  width: "100%",
  borderRadius: 6,
  border: "none",
  backgroundColor: "#28a745",
  color: "#fff",
  cursor: "pointer",
};

const botaoPlanoVIP = {
  ...botaoPlano,
  backgroundColor: "#FFD700",
  color: "#111",
};
