import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
import './Components.css';

export default function SearchForm() {
  const [char, setChar] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        const data = res.data.results;
        const result = data.filter(chars =>
          chars.name.toLowerCase().includes(search.toLowerCase())
        );
        setChar(result);
      })
  },[search]);
  const handleInputChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value);
  }
  return (
    <section className="search-form">
    
      <form className='formSearch'>
      <span className='link1'>Character List</span>
      <div className='search'>
        <input
        value={search}
        onChange={handleInputChange}
        className=''
        type='text'
        placeholder='Search' />
        
        </div>
      </form>
      {char.map((character, index) => {
        return (<CharacterCard key={index} {...character} />)
      })}
    </section>
  );
}
