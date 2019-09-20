import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");

  // useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    useEffect(() => {
      const fetchData = () => {
        axios
          .get("https://rickandmortyapi.com/api/character/" + query)
          .then(response => {
            console.log('res from axios', response);
          })
          .catch(err => {
            console.log(err);
          })
      };
  
      fetchData();
    }, [query]);
  

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  )
}


  

  
  