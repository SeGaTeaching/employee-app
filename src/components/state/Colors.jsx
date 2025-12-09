import { useState } from "react";

function Colors() {
  const [color, setColor] = useState("");

  const colors = [
    { name: "Rot", css: "red" },
    { name: "Grün", css: "green" },
    { name: "Blau", css: "blue" },
    { name: "Gelb", css: "gold" },
    { name: "Lila", css: "purple" }
  ];

  return (
    <>
      <h2>Meine Lieblingsfarbe</h2>
      {colors.map((c) => (
        <button
          key={c.name}
          onClick={() => setColor(c.name)}
          style={{
            backgroundColor: c.css,
            color: "white",
            margin: "5px",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          {c.name}
        </button>
      ))}
      <p>
        Meine Liebslingsfarbe ist{" "}
        <strong
          style={{
            color: colors
              .filter((c) => {
                return c.name === color;
              })
              .map((c) => c.css)
          }}
        >
          {color || "Schwarz"}
        </strong>
      </p>
    </>
  );
}

export default Colors;
