import { useState, useEffect } from 'react';

function ResizeWindow() {
  const [breite, setBreite] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
        setBreite(window.innerWidth);
        console.log(breite);

    }
    window.addEventListener('resize', handleResize);

    //return () => window.removeEventListener('resize', handleResize);
  }, []); // nur einmal beim Mounten

  return (
    <div>
      <h2>Fensterbreite: {breite}px</h2>
      <p>Ändere die Größe des Browserfensters!</p>
    </div>
  )
}

export default ResizeWindow