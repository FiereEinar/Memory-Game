export default function Header({ score, highestScore }) {
  return (
    <header className=' text-white flex flex-col items-center
    gap-3 p-5'>
      <h1 className='text-5xl'>PokeGuess</h1>
      <div className='text-2xl'>
        <p>Current Score: {score}</p>
        <p>Highest Score: {highestScore}</p>
      </div>
    </header>
  )
}