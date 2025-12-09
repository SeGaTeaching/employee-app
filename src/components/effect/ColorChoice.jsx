import { useState, useEffect } from "react"

function ColorChoice() {
    const [farbe, setFarbe] = useState('');
    const [status, setStatus] = useState('Bitte wähle eine Farbe');

    useEffect(() => {
      if (farbe !== '') {
        console.log('Neue Farbe:', farbe)
        setStatus(`Aktuell ausgewählte Farbe: ${farbe}`);
      }
      
    }, [farbe])
    

  return (
    <div>
      <h2>Farbwahl</h2>
      <button onClick={() => setFarbe('Rot')}>Rot</button>
      <button onClick={() => setFarbe('Grün')}>Grün</button>
      <button onClick={() => setFarbe('Blau')}>Blau</button>
      <p>{status}</p>
    </div>
  )
}

export default ColorChoice
