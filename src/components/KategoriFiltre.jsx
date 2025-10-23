function KategoriFiltre({ kategori, setKategori }) {
  return (
    <select
      value={kategori}
      onChange={(e) => setKategori(e.target.value)}
      style={{
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ffffffff",
      }}
    >
      <option value="">Tüm Kategoriler</option>
      <option value="Klasik">Klasik</option>
      <option value="Roman">Roman</option>
      <option value="Psikoloji">Psikoloji</option>
      <option value="Kişisel Gelişim">Kişisel Gelişim</option>
    </select>
  );
}

export default KategoriFiltre;
