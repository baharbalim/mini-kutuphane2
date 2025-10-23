function Favori({ favoriler, kitaplar, toggleFavori }) {
  const favoriKitaplar = kitaplar.filter((k) => favoriler.includes(k.id));

  return (
    <div
      style={{
        border: "1px solid #333",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "#000000ff",
      }}
    >
      <h2>Favoriler ({favoriKitaplar.length})</h2>
      <ul style={{ paddingLeft: "15px", listStyleType: "none" }}>
        {favoriKitaplar.map((k) => (
          <li
            key={k.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <span>{k.baslik}</span>
            <button
              onClick={() => toggleFavori(k.id)}
              style={{
                padding: "2px 6px",
                borderRadius: "5px",
                border: "1px solid #000000ff",
                backgroundColor: "#ffeb3b",
                cursor: "pointer",
              }}
            >
              Kaldır
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favori;
