import { useState } from 'react'
import Flashcard from "./Components/Flashcard"

import './App.css'



function App() {
 
  const [cards, setCards] = useState([{id: 1, question: "Whats the capital of France", answer: "Oui Oui Oui it is Paris"}])
  
  const [flipped, setFlipped] = useState(false)
  const [newQuestion, setNewQuestion] = useState("")
  const [newAnswer, setNewAnswer] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  
  function nextCard() {

      if(cards.length > currentIndex + 1) {
        setCurrentIndex(c => c + 1)
        setFlipped(false)
  } else {
    return
  }
    
  } 

  function prevCard() {
    if(cards[currentIndex - 1]) {
      setCurrentIndex(c => c - 1)
      setFlipped(false)
    } else {
      return
    }
  }
  

   function flip() {
    setFlipped(!flipped)
   }

   function handleQuestionChange(e) {
    setNewQuestion(e.target.value)
   }
   
    function handleAnswerChange(e) {
    setNewAnswer(e.target.value)
   }

   function addCard() {
     
     if(newQuestion.trim() !== "" && newAnswer.trim() !== "") {

      setCards([...cards, {
        id: cards.length + 1, question: newQuestion, answer: newAnswer
      }])
      setNewQuestion("")
      setNewAnswer("")
     } else {
        return
     }

   }

  return (
    <>
     <div>
     <Flashcard id = {cards[currentIndex].id} question = {cards[currentIndex].question} answer = {cards[currentIndex].answer} isFlipped = {flipped} onClick = {flip}/>
    </div>
    <div className="button">
    <button onClick={prevCard}>Prev</button>
    <button onClick = {nextCard}>Next</button>
    </div>
    
    <div className="inputs">
    <input type="text" placeholder= "Question..." value = {newQuestion} onChange={handleQuestionChange}/>
    <input type="text" placeholder = "Answer..." value = {newAnswer} onChange={handleAnswerChange}/>
    <button onClick = {addCard}>+</button>
</div>
    </>
  )
}

export default App
