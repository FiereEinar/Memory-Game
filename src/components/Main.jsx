import PokemonCard from './PokemonCard.jsx'

export default function Main({ pokemonData, difficulty }) {
  
  return (
    <div className='flex flex-wrap gap-2 justify-center'>
      {pokemonData.map((data) => (
        <PokemonCard 
          imgURL={data.sprites.front_default}
          name={data.name}
          key={data.id}
        />
      ))}
    </div>
  )
}


