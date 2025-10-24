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
  { id: 11, baslik: "Bilinçaltının Gücü", yazar: "Joseph Murphy", kategori: "Psikoloji" },
  { id: 12, baslik: "Küçük Prens", yazar: "Antoine de Saint-Exupéry", kategori: "Roman" },
  { id: 13, baslik: "Moby Dick", yazar: "Herman Melville", kategori: "Klasik" },
  { id: 14, baslik: "Düşün ve Zengin Ol", yazar: "Napoleon Hill", kategori: "Kişisel Gelişim" },
  { id: 15, baslik: "Sineklerin Tanrısı", yazar: "William Golding", kategori: "Roman" },
  { id: 16, baslik: "Körlük", yazar: "José Saramago", kategori: "Roman" },
  { id: 17, baslik: "Psikolojiye Giriş", yazar: "Philip Zimbardo", kategori: "Psikoloji" },
  { id: 18, baslik: "Jane Eyre", yazar: "Charlotte Bronte", kategori: "Roman" },
  { id: 19, baslik: "Don Kişot", yazar: "Miguel de Cervantes", kategori: "Klasik" },
  { id: 20, baslik: "Felsefenin Tesellisi", yazar: "Alain de Botton", kategori: "Kişisel Gelişim" },
  { id: 21, baslik: "Psikoloji ve Yaşam", yazar: "Richard Gerrig", kategori: "Psikoloji" },
  { id: 22, baslik: "Hayvan Çiftliği", yazar: "George Orwell", kategori: "Roman" },
  { id: 23, baslik: "Beyin ve Zihin", yazar: "David Eagleman", kategori: "Psikoloji" },
  { id: 24, baslik: "Karamazov Kardeşler", yazar: "Dostoyevski", kategori: "Klasik" },
  { id: 25, baslik: "İnsanın Anlam Arayışı", yazar: "Viktor Frankl", kategori: "Psikoloji" },
  { id: 26, baslik: "Usta ve Margarita", yazar: "Mihail Bulgakov", kategori: "Klasik" },
  { id: 27, baslik: "Dört Anlaşma", yazar: "Don Miguel Ruiz", kategori: "Kişisel Gelişim" },
  { id: 28, baslik: "Kayıp Zamanın İzinde", yazar: "Marcel Proust", kategori: "Klasik" },
  { id: 29, baslik: "Baba ve Oğul", yazar: "Dostoyevski", kategori: "Klasik" },
  { id: 30, baslik: "Zorba", yazar: "Nikos Kazancakis", kategori: "Roman" },
  { id: 31, baslik: "İçsel Güç", yazar: "Louise Hay", kategori: "Kişisel Gelişim" },
  { id: 32, baslik: "Psikolojinin Derinlikleri", yazar: "Carl Jung", kategori: "Psikoloji" },
  { id: 33, baslik: "Gurur ve Önyargı", yazar: "Jane Austen", kategori: "Roman" },
  { id: 34, baslik: "Çavdar Tarlasında Çocuklar", yazar: "J.D. Salinger", kategori: "Roman" },
  { id: 35, baslik: "Küçük Kadınlar", yazar: "Louisa May Alcott", kategori: "Roman" },
  { id: 36, baslik: "Duygusal Zeka", yazar: "Daniel Goleman", kategori: "Psikoloji" },
  { id: 37, baslik: "Klasik Hikayeler", yazar: "Edgar Allan Poe", kategori: "Klasik" },
  { id: 38, baslik: "Mutluluk Projesi", yazar: "Gretchen Rubin", kategori: "Kişisel Gelişim" },
  { id: 39, baslik: "Görünmez Adam", yazar: "Ralph Ellison", kategori: "Roman" },
  { id: 40, baslik: "Meditasyonlar", yazar: "Marcus Aurelius", kategori: "Klasik" },
  { id: 41, baslik: "İçsel Barış", yazar: "Thich Nhat Hanh", kategori: "Kişisel Gelişim" },
  { id: 42, baslik: "Psikoloji ve Davranış", yazar: "B.F. Skinner", kategori: "Psikoloji" },
  { id: 43, baslik: "Kırmızı ve Siyah", yazar: "Stendhal", kategori: "Klasik" },
  { id: 44, baslik: "Hayvanların Psikolojisi", yazar: "John Watson", kategori: "Psikoloji" },
  { id: 45, baslik: "Aşk ve Gurur", yazar: "Jane Austen", kategori: "Roman" },
  { id: 46, baslik: "Başarı İlkeleri", yazar: "Jack Canfield", kategori: "Kişisel Gelişim" },
  { id: 47, baslik: "Uçurtma Avcısı", yazar: "Khaled Hosseini", kategori: "Roman" },
  { id: 48, baslik: "Küçük Prens", yazar: "Antoine de Saint-Exupéry", kategori: "Roman" },
  { id: 49, baslik: "Hayatın Anlamı", yazar: "Viktor Frankl", kategori: "Psikoloji" },
  { id: 50, baslik: "Dört Kural", yazar: "Don Miguel Ruiz", kategori: "Kişisel Gelişim" },
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
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Mini Kitaplık</h1>

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
