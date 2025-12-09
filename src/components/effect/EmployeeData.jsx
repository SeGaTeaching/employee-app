import { useState, useEffect } from "react";

export default function EmployeeData() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        console.log("Effekt wird ausgeführt")

        async function fetchUsers() {
            const API_URL = 'https://jsonplaceholder.typicode.com/users'
            try {
                const response = await fetch(API_URL);
                const data = await response.json()
                setEmployees(data);
                console.log(data)
            } catch(e) {
                console.error("Fehler", e)
            }
            
        }

        fetchUsers()

    }, [])

    return (
        <ul>
            {employees.map(user => {
                return <li key={user.id}>{user.name}<br />{user.username}<br />{user.email}</li>
            })}
        </ul>
    )
}

