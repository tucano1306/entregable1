import { useState } from 'react'
import FortuneCard from './components/FortuneCard'
import Button from './components/Button'
import phrases from './data/phrases.json'
import './styles/components.css'

function App() {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0])
  const [currentBackground, setCurrentBackground] = useState(1)
  const [currentButtonColor, setCurrentButtonColor] = useState(0)

  const buttonColors = [
    '#FF9F43', 
    '#4ECDC4', 
    '#FF6B6B', 
    '#A8E6CF', 
    '#FFD93D', 
  ]

  const backgroundImages = [1, 2, 3, 4]

  const getRandomItem = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
  }

  const handleClick = () => {
    const newPhrase = getRandomItem(phrases)
    const newBackground = getRandomItem(backgroundImages)
    const newColorIndex = (currentButtonColor + 1) % buttonColors.length
    
    setCurrentPhrase(newPhrase)
    setCurrentBackground(newBackground)
    setCurrentButtonColor(newColorIndex)
  }

  return (
    <div className={`app-container background-${currentBackground}`}>
      <div className="content-wrapper">
      <h1 className="fortune-title">GALLETAS DE LA</h1>
      <h1 className="fortune-title">FORTUNA</h1>
        <Button 
          onClick={handleClick} 
          color={buttonColors[currentButtonColor]}
        />
        <FortuneCard phrase={currentPhrase} />
      </div>
    </div>
  )
}

export default App
