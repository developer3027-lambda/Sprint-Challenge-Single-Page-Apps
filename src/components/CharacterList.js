import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';




const CharacterList = () => {
    const [character, setCharacter] = useState([]);
    useEffect (() => {
        axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
            console.log(response.data);
            const characters = response.data;
            setCharacter(characters);
            
        })
        .catch(error => {
            console.log('axios data:', error);
        })
    },[]);

    if (!character.results) {
        return (
            <div>
                <h3>Working on it, but you may want to check back later.</h3>
            </div>
        );
    }

    return (
        <div className='charBase'>
            <h2>Characters</h2>
            <div className='charWrap'>
                <div className='charInfo'>
                    {character.results.map((character, index) => {
                        return (<CharacterCard key={index} {...character} />)
                    })}
                </div>
            </div>
        </div>
    );
}
export default CharacterList

  

  
  