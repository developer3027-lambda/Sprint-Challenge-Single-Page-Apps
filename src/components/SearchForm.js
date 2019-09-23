import React, { useState, useEffect } from "react";
import axios from 'axios';

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect (() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      const results = response.data.filter(character =>
        character.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
      
  })
  .catch(error => {
      console.log('axios data:', error);
  })
},[searchTerm]);

const handleChange = event => {
  setSearchTerm(event.target.value);
  };
  
  return (
    <div className="App">
      <form>
        <label for="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <li>{character}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default SearchForm
