import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export default function Header({ score, highestScore }) {
  return (
    <header className=' text-white flex flex-col items-center
    gap-3 p-5'>
      <div className='flex text-4xl gap-5'>
        <h1 className='text-5xl'>Memory Game</h1>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>?</TooltipTrigger>
            <TooltipContent>
              <p>Try not to click the same card twice, If you do, the game is over.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className='text-2xl'>
        <p>Current Score: {score}</p>
        <p>Highest Score: {highestScore}</p>
      </div>
    </header>
  )
}