import { useState } from "react";

function SearchBar() {
    
    const [searchTerm, setSearchTerm] = useState('Was suchst Du');

    function handleChange(event) {
        setSearchTerm(event.target.value);
    }
    
    return (
        <div>
            <label htmlFor="search">🔍 Suche: </label>
            <input 
                type="text"
                id="search"
                value={searchTerm}
                onChange={handleChange}
            />

            <p>Aktueller Suchbegriff:<br /><strong>{searchTerm}</strong></p>
        </div>
    )
}

export default SearchBar