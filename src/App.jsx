import React, { useState, useEffect } from 'react'
import PokemonCard from './components/PokemonCard.jsx'
import Loading from './components/Loading.jsx'
import Pregame from './components/Pregame.jsx'

import mainBg from './assets/images (39).jpeg'

export default function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true)
  const [gameStatus, setGameStatus] = useState('pregame')
  const [difficulty, setDifficulty] = useState('easy')
  
  useEffect(() => {
    const fetchData = async () => {
      const pokemonNames = [
        "pikachu", "charizard", "bulbasaur",
        "jigglypuff", "snorlax", "gengar",
        "mewtwo", "squirtle", "eevee",
        "magikarp", "dragonite", "machamp",
        "vaporeon", "alakazam", "gyarados",
        "meowth", "lapras", "arcanine", "mew", "ditto"
      ]
      const pokemonArray = [];
      
      pokemonNames.map(async (name) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        )
        const data = await response.json();
        
        setPokemonData([ ...pokemonArray, data])
        pokemonArray.push(data);
        if (pokemonArray.length === 20) setLoading(false)
      })
    }
    fetchData()
  }, [])
  
  const handleSetDifficulty = (e) => {
    const { mode } = e.target.dataset
    setDifficulty(mode)
  }
  
  const startGameHandler = () => {
    setGameStatus('start')
  }
  
  return (
    <>
      {loading ? (
        <Loading />
      ) : gameStatus === 'pregame' && !loading ? (
        <Pregame 
          currentDifficulty={difficulty}
          setDifficulty={handleSetDifficulty}
          onStart={startGameHandler}
        />
      ) : gameStatus === 'start' ? (
        <>
          <div className='flex flex-wrap gap-2'>
            {pokemonData.map((data) => (
              <PokemonCard 
                imgURL={data.sprites.front_default}
                name={data.name}
                key={data.id}
              />
            ))}
          </div>
        </>
      ) : (null)}
    </>
  )
}
