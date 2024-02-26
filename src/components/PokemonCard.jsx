
export default function PokemonCard({ imgURL, name }) {
  
  return (
    <button
    className='w-32 h-32 text-white backdrop-blur-sm bg-white/20
    flex flex-col justify-center items-center hover:scale-105
    transition-all rounded'>
      <img key={imgURL} src={imgURL} className='w-20 h-20'/>
      <p key={name}>{name}</p>
    </button>
  )
}





