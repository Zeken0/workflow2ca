import React, { useState,useEffect } from "react";
import axios from "axios";
// import { capitalize } from "lodash";

function FetchData() {
  const [characters, setCharacters] = useState([])
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
        .then(res => {
          console.log(res.data.results);
//           You must sort your data using sortBy from lodash before setting it to characters
          setCharacters(res.data.results)
        })
    },[])
  return (
    <div className='results'>
      {characters.map(character => (
        <div key={character.id}>
          <h1>
            {character.name}
          </h1>
          <img src={character.image}/>
        </div>
      ))}
    </div>
  )
}
export default FetchData;

