import styles from "./EmployeeCard.module.css"; // 1. Styles importieren
import placeholderImg from "../assets/user-placeholder.jpg"; // 2. Fallback-Bild importieren

export default function EmployeeCard({ id, name, role, isActive, imageUrl, onDelete, onEdit }) {
  // Logik für die Status-Farbe
  const statusStyle = isActive ? styles.active : styles.inactive;

  // Logik für das Bild:
  // "Ist imageUrl vorhanden? Wenn JA, nimm es. Wenn NEIN (||), nimm placeholderImg."
  const imageSource = imageUrl || placeholderImg;

  return (
    <div className={styles.card}>
      <img src={imageSource} alt={name} className={styles.profileImage} />

      <h3 className={styles.name}>{name}</h3>
      <p>{role}</p>

      {/* Wir kombinieren zwei Klassen: Die Basis (.badge) und die Farbe (.active/.inactive) */}
      <span className={`${styles.badge} ${statusStyle}`}>
        {isActive ? "Aktiv" : "Abwesend"}
      </span>

      {/* Button Bereich */}
      <div className={styles.actionButtons}>
        {/* EDIT Button */}
        <button
          className={styles.editBtn}
          onClick={(e) => {
            onEdit(id);
          }}
        >
          Bearbeiten
        </button>

        {/* DELETE Button */}
        <button
          className={styles.deleteBtn}
          onClick={(e) => {
            onDelete(id);
          }}
        >
          Löschen
        </button>
      </div>
    </div>
  );
}
