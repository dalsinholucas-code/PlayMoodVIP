export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #1a0033, #000000)",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: "40px" }}>PLAYMOOD VIP</h1>
      <p>Plataforma Oficial de Jogos com Créditos</p>
      <button style={{
        marginTop: "20px",
        padding: "15px 30px",
        backgroundColor: "gold",
        border: "none",
        borderRadius: "10px",
        fontWeight: "bold",
        cursor: "pointer"
      }}>
        Entrar na Plataforma
      </button>
    </div>
  );
    }
