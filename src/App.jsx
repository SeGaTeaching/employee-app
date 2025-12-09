import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Employees from './components/Employees';
import Counter from './components/state/Counter';
import Color from './components/state/Colors';
import Accordion from './components/state/Accordion';
import SearchBar from './components/state/Searchbar';
import AutoCounter from './components/effect/AutoCounter';
import ResizeWindow from './components/effect/ResizeWindow';
import ColorChoice from './components/effect/ColorChoice';
import EmployeeData from './components/effect/EmployeeData';

function App() {

  const name = "Waltraud"

  return (
    <BrowserRouter>
      
      {/* Optional: Eine einfache Navigation, um zu den Seiten zu kommen */}
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/employees" style={{ marginRight: '10px' }}>Employees</Link>
        <Link to="/accordion" style={{ marginRight: '10px' }}>Accordion</Link>
        <Link to="/color" style={{ marginRight: '10px' }}>Color</Link>
        <Link to="/count" style={{ marginRight: '10px' }}>Count</Link>
        <Link to="/search">Search</Link>
      </nav>

      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/autocounter" style={{ marginRight: '10px' }}>AutoCounter</Link>
        <Link to="/resize" style={{ marginRight: '10px' }}>Resize</Link>
        <Link to="/c-choice" style={{ marginRight: '10px' }}>C-Choice</Link>
        <Link to="/api">UserAPI</Link>
      </nav>

      <Routes>
        <Route path="/employees" element={<Employees />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/color" element={<Color />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/autocounter" element={<AutoCounter />} />
        <Route path="/resize" element={<ResizeWindow />} />
        <Route path="/c-choice" element={<ColorChoice />} />
        <Route path="/api" element={<EmployeeData />} />

      </Routes>
    

    </BrowserRouter>

  );
}

export default App
