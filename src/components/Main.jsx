import PokemonCard from './PokemonCard.jsx'

export default function Main({ pokemonData, difficulty, cardClick, isFlipped }) {
  
  return (
    <div className='flex flex-wrap max-w-4xl gap-5 justify-around m-auto'>
      {pokemonData.map((data) => (
        <PokemonCard 
          isFlipped={isFlipped}
          cardClick={cardClick}
          imgURL={data.sprites.front_default}
          name={data.name}
          key={data.id}
        />
      ))}
    </div>
  )
}


