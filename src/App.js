import { useState } from 'react';
import './App.css';

const cardImages = [
  {"src": "/image/attenti-1.png"},
  {"src": "/image/bravo-1.png"},
  {"src": "/image/mazzate-1.png"},
  {"src": "/image/pensieroso-1.png"},
  {"src": "/image/pugno-1.png"},
  {"src": "/image/tivoglio-1.png"},
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // fn per mischiare le carte
  const mischiaCarte = () => {
    const mischiaCarte = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5 )
      .map((card) => ({...card, id: Math.random()}))
    // console.log(mischiaCarte)

    setCards(mischiaCarte)
    setTurns(0)
  }

  console.log('sonocards',cards, turns)

  return (
    <div className="App">
      <h1>Longo's Memory</h1>
      <button onClick={mischiaCarte}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card front" />
              <img className="back" src="/image/cover.png" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
