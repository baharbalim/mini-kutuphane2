import KitapKarti from "./KitapKarti";

function KitapListe({ kitaplar, favoriler, toggleFavori }) {
  return (
    <>
      {kitaplar.map((k) => (
        <KitapKarti
          key={k.id}
          {...k}
          favorideMi={favoriler.includes(k.id)}
          toggleFavori={toggleFavori}
        />
      ))}
    </>
  );
}

export default KitapListe;
