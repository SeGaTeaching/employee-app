import { useState, useEffect } from "react"

export default function AutoCounter() {

    const [laufend, setLaufend] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!laufend) return

        const timer = setInterval(() => {
            setCount(c => c + 1);
        }, 1000)

        return () => clearInterval(timer);
    }, [laufend])

    return (
        <div>
            <h2>Zähler: {count}</h2>
            <button onClick={() => setLaufend(true)}>Start</button>
            <button onClick={() => setLaufend(false)}>Stopp</button>
            <button onClick={() => setCount(0)}>Zurücksetzen</button>
        </div>
  )

}