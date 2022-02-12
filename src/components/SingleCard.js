import './singleCard.css';


export default function SingleCard({card, handleChoice, flipped}) {

    const handleClick = () => {
        handleChoice(card)
    }

  return (
    <div className='card'>
        <div className={flipped ? "flipped": "" }>
            <img className="front" src={card.src} alt="card front" />
            <img className="back" src="/image/cover.png" onClick={handleClick} alt="card back" />
        </div>
    </div>
  )
}
