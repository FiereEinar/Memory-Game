
export default function PokemonCard({ imgURL, name, cardClick }) {
  
  return (
    <button
    data-name={name}
    onClick={cardClick}
    className='w-32 h-32 text-white backdrop-blur-sm bg-white/20
    flex flex-col justify-center items-center hover:scale-105
    transition-all rounded'>
      <img data-name={name} src={imgURL} className='w-20 h-20'/>
      <p data-name={name}>{name}</p>
    </button>
  )
}





