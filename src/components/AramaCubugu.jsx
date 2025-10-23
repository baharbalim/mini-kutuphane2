function AramaCubugu({ aramaMetni, setAramaMetni }) {
  return (
    <input
      type="text"
      placeholder="Kitap ara..."
      value={aramaMetni}
      onChange={(e) => setAramaMetni(e.target.value)}
      style={{
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
    />
  );
}

export default AramaCubugu;
