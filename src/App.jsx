import { useState, useEffect } from "react";
import AramaCubugu from "./components/AramaCubugu";
import KategoriFiltre from "./components/KategoriFiltre";
import KitapListe from "./components/KitapListe";
import Favori from "./components/Favori";

function App() {
  const kitaplar = [
    { id: 1, baslik: "Suç ve Ceza", yazar: "Dostoyevski", kategori: "Klasik" },
    { id: 2, baslik: "Sefiller", yazar: "Victor Hugo", kategori: "Klasik" },
    { id: 3, baslik: "Psikolojinin Temelleri", yazar: "John Smith", kategori: "Psikoloji" },
    { id: 4, baslik: "Atom Alışkanlıkları", yazar: "James Clear", kategori: "Kişisel Gelişim" },
    { id: 5, baslik: "Simyacı", yazar: "Paulo Coelho", kategori: "Roman" },
    { id: 6, baslik: "Düşünce Gücüyle Tedavi", yazar: "Joseph Murphy", kategori: "Psikoloji" },
    { id: 7, baslik: "İnsan Neyle Yaşar?", yazar: "Tolstoy", kategori: "Klasik" },
    { id: 8, baslik: "1984", yazar: "George Orwell", kategori: "Roman" },
    { id: 9, baslik: "Savaş ve Barış", yazar: "Tolstoy", kategori: "Klasik" },
    { id: 10, baslik: "Felsefe 101", yazar: "Will Durant", kategori: "Kişisel Gelişim" },
    // ... diğer kitapları 50’e tamamlayabilirsin
  ];

  const [aramaMetni, setAramaMetni] = useState(localStorage.getItem("aramaMetni") || "");
  const [kategori, setKategori] = useState("");
  const [favoriler, setFavoriler] = useState(
    JSON.parse(localStorage.getItem("favoriler")) || []
  );

  const filtrelenmis = kitaplar
    .filter((k) => k.baslik.toLowerCase().includes(aramaMetni.toLowerCase()))
    .filter((k) => (kategori ? k.kategori === kategori : true));

  useEffect(() => {
    localStorage.setItem("aramaMetni", aramaMetni);
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
  }, [aramaMetni, favoriler]);

  const toggleFavori = (id) => {
    setFavoriler((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "30px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Başlık */}
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Mini Kitap</h1>

      {/* Üst: Arama ve kategori ortalanmış */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <AramaCubugu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />
        <KategoriFiltre kategori={kategori} setKategori={setKategori} />
      </div>

      {/* Alt: Favoriler + Kitaplar */}
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {/* Sol kolon: Favoriler */}
        <div style={{ flex: "1" }}>
          <Favori favoriler={favoriler} kitaplar={kitaplar} toggleFavori={toggleFavori} />
        </div>

        {/* Sağ kolon: Kitaplar iki sütun */}
        <div
          style={{
            flex: "2",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          <KitapListe kitaplar={filtrelenmis} favoriler={favoriler} toggleFavori={toggleFavori} />
        </div>
      </div>
    </div>
  );
}

export default App;
