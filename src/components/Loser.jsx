export default function Loser({ restart }) {
  return (
    <div className='w-full text-white flex flex-col justify-center
    gap-5'>
      <h1 className='w-fit self-center text-3xl'>You Lost!</h1>
      <button 
      className='outline w-fit self-center py-1 px-8 rounded
      hover:bg-white/30 transition-all' 
      onClick={restart}>
        Resart
      </button>
    </div>
  )
}