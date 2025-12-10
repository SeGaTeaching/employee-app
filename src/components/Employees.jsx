import { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import styles from "./Employees.module.css";
import EmployeeForm from "./EmployeeForm";

function App() {

  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

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


  // useEffect(() => {
  //   console.log("Effekt wird ausgeführt");

  //   async function fetchUsers() {
  //     const API_URL = "https://jsonplaceholder.typicode.com/users";
  //     try {
  //       const response = await fetch(API_URL);
  //       const data = await response.json();
  //       data.map((user) => {
  //         user["role"] =
  //           roleArray[Math.floor(Math.random() * roleArray.length)];
  //         user["isActive"] =
  //           activeArray[Math.floor(Math.random() * activeArray.length)];
  //         user["imageUrl"] =
  //           imagesUrlArray[Math.floor(Math.random() * imagesUrlArray.length)];
  //       });
  //       setEmployees(data);
  //     } catch (e) {
  //       console.error("Fehler", e);
  //     }
  //   }

  //   fetchUsers();
  // }, []);

  const API_URL = "http://127.0.0.1:8000/";

  // --------------------------------------------------
  // 1. Definition der Fetch-Funktion im Haupt-Scope
  // --------------------------------------------------
  async function fetchUsers() {
    try {
      const response = await fetch(API_URL + "employees");
      const data = await response.json();
      setEmployees(data);
    } catch (e) {
      console.error("Fehler", e);
    }
  }

  // --------------------------------------------------
  // 2. useEffect ruft die Funktion beim Start auf
  // --------------------------------------------------
  useEffect(() => {
    console.log("Effekt wird ausgeführt");
    fetchUsers(); 
  }, []); // Leeres Array = nur beim ersten Laden


  // --------------------------------------------------
  // 3. CREATE: Neuen Mitarbeiter anlegen 
  // --------------------------------------------------
  async function handleAdd(newEmployeeData) { 
    try { 
      const res = await fetch(API_URL + "employees", { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(newEmployeeData) 
      }); 
      if (res.ok) { 
        const savedEmployee = await res.json(); 
        // State Update: Den Neuen zur Liste hinzufügen 
        setEmployees([savedEmployee, ...employees]); 
      } 
    } catch (error) {  
        console.error("Fehler beim Erstellen:", error);  
    } 
  }

  // ----------------------------------------------- 
  // 4. PUT: Mitarbeiter aktualisieren 
  // -----------------------------------------------
  async function handleUpdate(updatedData) {
    try { 
      const res = await fetch(`${API_URL}employees/${updatedData.id}`, { 
        method: 'PUT', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(updatedData) 
      }); 
 
      if (res.ok) { 
        const result = await res.json(); 
         
        // Lokale Liste aktualisieren: Den alten Eintrag durch den neuen ersetzen 
        setEmployees(employees.map(emp =>  
            emp.id === result.id ? result : emp 
        )); 
         
        // Modus zurücksetzen 
        setEditingEmployee(null); 
      } 
    } catch (error) {  
        console.error("Fehler beim Update:", error);  
    } 
  } 
 
  // Vorbereitung für Update: Daten in das Formular laden 
  function handleEditClick(id) { 
    const employeeToEdit = employees.find(e => e.id === id); 
    setEditingEmployee(employeeToEdit); 
    // Scrollt nach oben zum Formular für bessere UX 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }

  // --------------------------------------------------------- 
  // 4. DELETE: Mitarbeiter löschen 
  // ---------------------------------------------------------
  async function handleDelete(id) {
    if(!confirm("Möchtest du diesen Mitarbeiter wirklich löschen?")) return;
      try { 
      await fetch(`${API_URL}employees/${id}`, { method: 'DELETE' }); 
       
      // // Aus der Liste entfernen 
      // setEmployees(employees.filter(emp => emp.id !== id));
      fetchUsers() 
       
      // Falls der gelöschte gerade bearbeitet wird -> abbrechen 
      if (editingEmployee && editingEmployee.id === id) setEditingEmployee(null); 
 
    } catch (error) {  
        console.error("Fehler beim Löschen:", error);  
    }

  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Unser Team</h1>

      {/* Das intelligente Formular */} 
      <EmployeeForm  
        onAdd={handleAdd}  
        onUpdate={handleUpdate} 
        editingEmployee={editingEmployee} 
        onCancel={() => setEditingEmployee(null)} 
      />

      <div className={styles.grid}>
        {employees.map((ma) => (
          <EmployeeCard
            key={ma.id}
            id={ma.id}
            name={ma.name}
            role={ma.role}
            isActive={ma.isActive}
            // Hier übergeben wir die URL (oder nichts, bei Tom)
            imageUrl={ma.imageUrl}
            onDelete={handleDelete}
            onEdit={handleEditClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
