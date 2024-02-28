import Tilt from 'react-parallax-tilt'
import ReactCardFlip from 'react-card-flip'

import cardBack from "/card-back.jpeg"
import cardFront from '/card-front.jpeg'

export default function PokemonCard({ imgURL, name, cardClick, isFlipped }) {

  return (
    <ReactCardFlip 
    //containerStyle={
      //{backdropFilter: 'blur(4px)'}
    //}
    isFlipped={isFlipped}
    flipDirection='horizontal'
    >
      <div>
        <Tilt 
        glareEnable={true}
        glareColor='#ffffff'
        glareMaxOpacity={0.6}
        >
          <button
          style={{backgroundImage: `url(${cardFront})`}}
          data-name={name}
          onClick={cardClick}
          className='w-32 h-52 text-white bg-cover bg-center
          flex flex-col justify-center items-center rounded '>
            <img data-name={name} src={imgURL} className='w-32 h-36'/>
            <p data-name={name} className='w-32 h-16 font-light'>{name}</p>
          </button>
        </Tilt>
      </div>
      
      <div
      style={{backgroundImage: `url(${cardBack})`}}
      data-name={name}
      className=' w-32 h-52 text-white 
      flex flex-col justify-center items-center rounded bg-cover bg-center'
      >

      </div>
    </ReactCardFlip>
  )
}





