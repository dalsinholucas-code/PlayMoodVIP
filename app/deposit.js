"use client";
import { useState } from "react";

export default function Deposit({ userBalance, setUserBalance }) {
  const [bank, setBank] = useState("BFA");
  const [amount, setAmount] = useState(0);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleDeposit = () => {
    if (amount <= 0) return setMessage("💡 Insira um valor válido.");
    if (!file) return setMessage("💡 Faça upload do comprovante.");

    // Aqui você pode integrar API de armazenamento de comprovante
    // Por enquanto, apenas simula a validação manual
    setMessage(`✅ Depósito solicitado: ${amount} Kz via ${bank}. Aguardando validação.`);
    
    // Simula que depois de validação o saldo é atualizado
    setTimeout(() => {
      setUserBalance(prev => prev + Number(amount));
      setMessage(`🎉 Depósito aprovado! Novo saldo: ${userBalance + Number(amount)} Kz`);
      setAmount(0);
      setFile(null);
    }, 5000); // 5 segundos de simulação de aprovação
  };

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(to bottom right,#1a0033,#000000)", color:"white", padding:"20px", fontFamily:"Arial", display:"flex", flexDirection:"column", alignItems:"center" }}>
      <h1 style={{ fontSize:"2rem", marginBottom:"20px" }}>Depositar Créditos</h1>
      <p style={{ marginBottom:"10px" }}>Saldo atual: {userBalance} Kz</p>

      <label style={{ marginBottom:"10px" }}>
        Banco:
        <select value={bank} onChange={e => setBank(e.target.value)} style={{ marginLeft:"10px", padding:"5px" }}>
          <option value="BFA">BFA</option>
          <option value="BCI">BCI</option>
          <option value="BAI">BAI</option>
        </select>
      </label>

      <input type="number" placeholder="Valor a depositar" value={amount} onChange={e => setAmount(e.target.value)} style={{ margin:"10px 0", padding:"10px", width:"200px" }}/>

      <input type="file" onChange={e => setFile(e.target.files[0])} style={{ marginBottom:"10px" }}/>

      <button onClick={handleDeposit} style={{ padding:"10px 20px", background:"gold", border:"none", borderRadius:"5px", cursor:"pointer" }}>
        Enviar Comprovante
      </button>

      {message && <p style={{ marginTop:"20px", fontSize:"1.1rem" }}>{message}</p>}
    </div>
  );
}
