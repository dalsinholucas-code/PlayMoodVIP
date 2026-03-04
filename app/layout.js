export const metadata = {
  title: "PlayMood VIP",
  description: "Plataforma oficial PlayMood VIP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
    }
