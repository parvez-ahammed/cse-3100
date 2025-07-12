export default function About({ theme }) {
  const isDark = theme === "dark";

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "40px auto",
        padding: 20,
        color: isDark ? "#eee" : "#111",
        display: "flex",
        flexDirection: "column",
        minHeight: "70vh",
      }}
    >
      <div>
        <h2 style={{ color: isDark ? "#00ff9f" : "rgb(0, 119, 111)" }}>
          About Rick & Morty Explorer
        </h2>
        <p>
          This is a simple React app to browse Rick & Morty characters.
          <br />
          Built with love by <strong>KAWSAR AHMED FAHIM</strong> and... iykyk
        </p>
      </div>

      <div
        style={{
          marginTop: 40,
          borderTop: `1px solid ${isDark ? "#444" : "#ccc"}`,
          paddingTop: 10,
          fontStyle: "italic",
          color: isDark ? "#ccc" : "#555",
        }}
      >
        <p>
          “Wubba Lubba Dub Dub!” <br />— Rick Sanchez <br /> I am in great pain.
          Please help me.
        </p>
      </div>
    </div>
  );
}
