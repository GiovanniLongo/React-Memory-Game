import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src": "/image/attenti-1.jpg"},
  {"src": "/image/bravo-1.jpg"},
  {"src": "/image/mazzate-1.jpg"},
  {"src": "/image/pensieroso-1.jpg"},
  {"src": "/image/pugno-1.jpg"},
  {"src": "/image/tivoglio-1.jpg"},
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

  return (
    <div className="App">
      <h1>Longo's Memory</h1>
      <button onClick={mischiaCarte}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
