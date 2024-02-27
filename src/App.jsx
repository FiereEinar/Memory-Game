import React, { useState, useEffect } from 'react'
import Loading from './components/Loading.jsx'
import Pregame from './components/Pregame.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Loser from './components/Loser.jsx'

import mainBg from './assets/images (39).jpeg'

export default function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true)
  const [gameStatus, setGameStatus] = useState('pregame')
  const [difficulty, setDifficulty] = useState('easy')
  const [score, setScore] = useState({ current: 0, highest: 0 })
  const [cards, setCards] = useState([])
  const [clickedCardNames, setClickedCardNames] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const pokemonNames = [
        "pikachu", "charizard", "bulbasaur",
        "jigglypuff", "snorlax", "gengar",
        "mewtwo", "squirtle", "eevee",
        "magikarp", "dragonite", "machamp",
        "vaporeon", "alakazam", "gyarados"
      ]
      const pokemonArray = [];
      
      pokemonNames.map(async (name) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        )
        const data = await response.json();
        
        setPokemonData([ ...pokemonArray, data])
        pokemonArray.push(data);
        if (pokemonArray.length === pokemonNames.length) setLoading(false)
      })
    }
    fetchData()
  }, [])
  
  
  
  const getAmount = (mode) => {
    switch(mode) {
      case 'easy':
        return 4
      case 'medium':
        return 5
      case 'hard':
        return 6
    }
  }
  
  const getRandomCard = () => {
    const cardAmount = getAmount(difficulty)
    const cardArray = []
    const taken = []
    
    while (cardArray.length !== cardAmount) {
      const num = Math.floor(Math.random() * 15)
      
      if (!taken.includes(num)) {
        cardArray.push(pokemonData[num])
        taken.push(num)
      }
    }
    setCards([ ...cardArray ])
  }
  
  const handleSetDifficulty = (e) => {
    const { mode } = e.target.dataset
    setDifficulty(mode)
  }
  
  const startGameHandler = () => {
    setGameStatus('start')
    getRandomCard()
  }
  
  const incrementScore = (amount) => {
    if (score.current + amount > score.highest) {
      setScore({ 
        current: score.current + amount, 
        highest: score.current + amount 
      })
    } else {
      setScore({ 
        current: score.current + amount, 
        highest: score.highest 
      })
    }
  }
  
  const handleCardClick = (e) => {
    const { name } = e.target.dataset
    
    if (!clickedCardNames.includes(name)) {
      setClickedCardNames([ ...clickedCardNames, name ])
      incrementScore(1)
      getRandomCard()
    } else {
      setGameStatus('loser')
    }
  }
  
  const restartGameHandler = () => {
    setScore({
      current: 0,
      highest: score.highest
    })
    setGameStatus('pregame')
    setClickedCardNames([])
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
          <Header
            score={score.current}
            highestScore={score.highest}
          />
          <Main 
            cardClick={handleCardClick}
            pokemonData={cards}
            difficulty={difficulty}
          />
        </>
      ) : gameStatus === 'loser' ? (
        <>
          <Header
            score={score.current}
            highestScore={score.highest}
          />
          <Loser
            restart={restartGameHandler}
          />
        </>
      ) : (
        <p>Something unexpected happened. Please resart the game.</p>  
      )}
    </>
  )
}
