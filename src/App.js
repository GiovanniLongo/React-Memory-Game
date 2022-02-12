import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src": "/image/attenti-1.jpg", matched: false},
  {"src": "/image/bravo-1.jpg", matched: false},
  {"src": "/image/mazzate-1.jpg", matched: false},
  {"src": "/image/pensieroso-1.jpg", matched: false},
  {"src": "/image/pugno-1.jpg", matched: false},
  {"src": "/image/tivoglio-1.jpg", matched: false},
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)


  // fn per mischiare le carte
  const mischiaCarte = () => {
    const mischiaCarte = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5 )
      .map((card) => ({...card, id: Math.random()}))

    setCards(mischiaCarte)
    setTurns(0)
  }

  // gestione scelta
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //confrontare le 2 carte selezionate
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src){
        setCards( prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src){
              return {...card, matched: true}
            }else{
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 900)
        
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  // resetta scelta se sbagliata e aumenta il contatore del turno
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns +1)

  }

  return (
    <div className="App">
      <h1>Longo's Memory</h1>
      <button onClick={mischiaCarte}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched} />
        ))}
      </div>
    </div>
  );
}

export default App;
