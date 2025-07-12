import { Link } from "react-router-dom";

export default function CharacterCard({ character, theme }) {
  const isDark = theme === "dark";
  const styles = {
    card: {
      background: isDark ? "#1e1e1e" : "#f4f4f4",
      borderRadius: 12,
      overflow: "hidden",
      color: isDark ? "#eee" : "#111",
      boxShadow: isDark
        ? "0 4px 12px rgba(0,0,0,0.6)"
        : "0 4px 12px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    img: {
      width: "100%",
      height: 240,
      objectFit: "cover",
      display: "block",
    },
    body: {
      padding: 16,
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    title: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: isDark ? "#00ff9f" : "#00776f",
      marginBottom: 8,
    },
    text: {
      fontSize: "0.95rem",
      lineHeight: 1.4,
      marginBottom: 10,
      flexGrow: 1,
    },
    link: {
      marginTop: "auto",
      padding: "10px",
      backgroundColor: isDark ? "#00ff9f" : "#00776f",
      color: isDark ? "#000" : "#fff",
      textAlign: "center",
      borderRadius: 8,
      fontWeight: "bold",
      textDecoration: "none",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.card}>
      <img src={character.image} alt={character.name} style={styles.img} />
      <div style={styles.body}>
        <h3 style={styles.title}>{character.name}</h3>
        <p style={styles.text}>
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>
        <Link to={`/character/${character.id}`} style={styles.link}>
          View Details
        </Link>
      </div>
    </div>
  );
}
