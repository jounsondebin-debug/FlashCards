import "./Flashcard.css"

export default function Flashcard({id, question, answer, isFlipped, onClick}) {
   
   return(
    <div className="card" onClick={onClick}>
       {isFlipped ? <h1>{answer}</h1> : <div><p>{id}</p> <h1>{question}</h1></div>}
    </div>
   )

}