export default function Pregame({ onStart, setDifficulty, currentDifficulty }) {
  const difficulties = ['easy', 'medium', 'hard']
  
  return (
    <section className='min-h-screen w-full grid place-items-center border
    text-white'>
      <div className='backdrop-blur-sm bg-white/20 p-5 rounded shadow-2xl'>
        <div className='flex flex-col items-center gap-3'>
          <p className='text-2xl'>Select a difficulty</p>
          <p>Current Difficulty: {currentDifficulty}</p>
          <div className='flex gap-5'>
            {difficulties.map((mode, i) => (
              <button key={i} 
              data-mode={mode}
              onClick={setDifficulty}
              className='border rounded w-20 py-1 hover:bg-white/30
              transition-all'>
                {mode}
              </button>  
            ))}
          </div>
          <button
          onClick={onStart}
          className='border rounded w-32 py-1 hover:bg-white/30
          transition-all'>
            Start
          </button>

        </div>
      </div>
    </section>
  )
}



