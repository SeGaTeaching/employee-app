import { useState } from "react";

export default function Counter() {

    // Count-Variable deklarieren
    const [count, setCount] = useState(0)

    function increment() {
        setTimeout(() => {
            setCount(count => count + 1); 
        }, 3000);
    }

    function reset() {
        setCount(0)
    }

    return (
        <>
            <h2>Counter Example</h2>

            <p>Aktueller Zählerstand: {count}</p>
            <button onClick={increment}>Erhöhen</button>
            <button onClick={reset}>Zurücksetzen</button>
        </>
    )
}