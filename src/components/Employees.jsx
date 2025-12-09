import { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import styles from "./Employees.module.css"; // Unser neues Layout

function App() {
  // Simulierter Datenbestand (Datenbank)
  //   const [employees] = useState([
  //     {
  //       id: 1,
  //       name: "Anna Müller",
  //       role: "Frontend Dev",
  //       isActive: true,
  //       // Anna hat ein Bild aus dem Internet/Server:
  //       imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
  //     },
  //     {
  //       id: 2,
  //       name: "Tom Schmidt",
  //       role: "Backend Dev",
  //       isActive: false,
  //       // Tom hat KEIN Bild -> imageUrl fehlt (ist undefined)
  //     },
  //     {
  //       id: 3,
  //       name: "Sarah Code",
  //       role: "Designer",
  //       isActive: true,
  //       imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
  //     }
  //   ]);
  const [employees, setEmployees] = useState([]);

  const activeArray = [true, false];
  const imagesUrlArray = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    undefined,
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200"
  ];
  const roleArray = [
    "Frontend-Dev",
    "Backend-Dev",
    "Designer",
    "Fullstack-Dev",
    "Product-Owner"
  ];

  useEffect(() => {
    console.log("Effekt wird ausgeführt");

    async function fetchUsers() {
      const API_URL = "https://jsonplaceholder.typicode.com/users";
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        data.map((user) => {
          user["role"] =
            roleArray[Math.floor(Math.random() * roleArray.length)];
          user["isActive"] =
            activeArray[Math.floor(Math.random() * activeArray.length)];
          user["imageUrl"] =
            imagesUrlArray[Math.floor(Math.random() * imagesUrlArray.length)];
        });
        setEmployees(data);
      } catch (e) {
        console.error("Fehler", e);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Unser Team</h1>

      <div className={styles.grid}>
        {employees.map((ma) => (
          <EmployeeCard
            key={ma.id}
            name={ma.username}
            role={ma.role}
            isActive={ma.isActive}
            // Hier übergeben wir die URL (oder nichts, bei Tom)
            imageUrl={ma.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
