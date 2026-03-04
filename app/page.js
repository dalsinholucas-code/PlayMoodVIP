"use client";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [balance, setBalance] = useState(3000);
  const [betAmount, setBetAmount] = useState(0);
  const [selectedGame, setSelectedGame] = useState(null);
  const [message, setMessage] = useState("");
  const [isVIP, setIsVIP] = useState(false);

  const games = [
    { id: 1, name: "Goal Master", multiplier: 2, winChance: 0.5 },
    { id: 2, name: "Derby Pro", multiplier: 2.8, winChance: 0.38 },
    { id: 3, name: "Lucky Number VIP", multiplier: 6, winChance: 0.18, vipOnly: true },
  ];

  const login = () => {
    if (username.trim() !== "") setLoggedIn(true);
  };

  const placeBet = () => {
    if (!selectedGame) return setMessage("Selecione um jogo!");
    if (selectedGame.vipOnly && !isVIP) return setMessage("Este jogo é VIP!");
    if (betAmount <= 0 || betAmount > balance) return setMessage("Valor inválido!");

    const win = Math.random() < selectedGame.winChance;
    if (win) {
      const winnings = betAmount * selectedGame.multiplier;
      setBalance(balance + winnings);
      setMessage(`🎉 Ganhou ${winnings.toFixed(2)} créditos!`);
    } else {
      setBalance(balance - betAmount);
      setMessage("❌ Perdeu a aposta!");
    }
  };

  const activateVIP = () => {
    if (balance >= 1000) {
      setBalance(balance - 1000);
      setIsVIP(true);
      setMessage("👑 VIP ativado!");
    } else {
      setMessage("Saldo insuficiente para VIP!");
    }
  };

  if (!loggedIn) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center", height:"100vh", background:"#1a0033", color:"white" }}>
        <h1 style={{ fontSize: "3rem", marginBottom:"20px" }}>PLAYMOOD VIP</h1>
        <input placeholder="Digite seu nome" value={username} onChange={e => setUsername(e.target.value)} style={{ padding:"10px", fontSize:"1rem", marginBottom:"10px" }}/>
        <button onClick={login} style={{ padding:"10px 20px", fontSize:"1rem", cursor:"pointer", background:"gold", border:"none", borderRadius:"5px" }}>Entrar</button>
      </div>
    );
  }

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(to bottom right,#1a0033,#000000)", color:"white", padding:"20px", fontFamily:"Arial" }}>
      <h1 style={{ fontSize:"2.5rem", marginBottom:"10px" }}>Bem-vindo, {username} {isVIP && "👑"}</h1>
      <h2 style={{ fontSize:"1.5rem", marginBottom:"20px" }}>Saldo: {balance.toFixed(2)} créditos</h2>

      <div style={{ display:"flex", gap:"10px", marginBottom:"20px", flexWrap:"wrap" }}>
        {games.map(game => (
          <div key={game.id} style={{ border:"2px solid gold", padding:"10px", borderRadius:"10px", minWidth:"200px", cursor:"pointer", background: selectedGame?.id === game.id ? "gold" : "#330044", color: selectedGame?.id === game.id ? "#000" : "white" }} onClick={() => setSelectedGame(game)}>
            <h3>{game.name} {game.vipOnly && "👑"}</h3>
            <p>Multiplicador: x{game.multiplier}</p>
          </div>
        ))}
      </div>

      <input type="number" placeholder="Valor da aposta" value={betAmount} onChange={e => setBetAmount(Number(e.target.value))} style={{ padding:"10px", fontSize:"1rem", marginRight:"10px" }}/>
      <button onClick={placeBet} style={{ padding:"10px 20px", fontSize:"1rem", cursor:"pointer", background:"gold", border:"none", borderRadius:"5px" }}>Apostar</button>

      {!isVIP && <button onClick={activateVIP} style={{ marginLeft:"10px", padding:"10px 20px", fontSize:"1rem", cursor:"pointer", background:"yellowgreen", border:"none", borderRadius:"5px" }}>Ativar VIP (1000 créditos)</button>}

      {message && <p style={{ marginTop:"20px", fontSize:"1.2rem" }}>{message}</p>}
    </div>
  );
        }
