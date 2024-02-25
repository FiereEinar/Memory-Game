'use client'

import React, { useState, useEffect } from 'react'

export default function App() {
  const [pokemonData, setPokemonData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const pokemonNames = ["pikachu", "charizard", "bulbasaur", "jigglypuff", "snorlax", "gengar", "mewtwo", "squirtle", "eevee", "magikarp", "dragonite", "machamp", "vaporeon", "alakazam", "gyarados", "meowth", "lapras", "arcanine", "mew", "ditto"]
      const pokemonArray = [];
      
      pokemonNames.map(async (name) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        
        setPokemonData([ ...pokemonArray, data])
        pokemonArray.push(data);
      })
    }
    fetchData()
  }, [])
  
  return (
    <>
      {pokemonData.length !== 0 && 
      <div>
        {pokemonData.map((data) => (
          <div key={data.id}>
            <p>{data.name} {data.order}</p>
            <img src={data.sprites.front_default} className='w-20 h-20'/>
          </div>
        ))}
      </div>
      }
    </>
  )
}
