function KitapKarti({ baslik, yazar, kategori, favorideMi, toggleFavori, id }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 12px",
        border: "1px solid #000000ff",
        borderRadius: "8px",
        backgroundColor: "#000000ff",
        minHeight: "50px", // yüksekliği biraz artırdık
      }}
    >
      <div>
        <strong>{baslik}</strong> - {yazar} ({kategori})
      </div>

      <div
        onClick={() => toggleFavori(id)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {/* Yıldız */}
        <span style={{ fontSize: "20px" }}>{favorideMi ? "⭐" : "☆"}</span>

        {/* Yazı */}
        <span style={{ fontSize: "14px", color: "#555" }}>
          {favorideMi ? "Favorilerde" : "Favorilere Ekle"}
        </span>
      </div>
    </div>
  );
}

export default KitapKarti;

