import Header from "./components/Header"
import Footer from "./components/Footer"
import CardCreator from "./components/CardCreator"
import styles from "./css_modules/App.module.css"
import Flashcard from "./components/Flashcard"
import { FlashcardProvider } from "./contexts/flashcardContext"
import { useEffect, useState } from "react"

function App() {
  const [flashcards, setFlashcards] = useState([])

  
  const toggleShowing = (id, showing) =>{
    setFlashcards((prevFc) =>{
      return prevFc.map((flashcard)=>flashcard.id == id ? {...flashcard, showing: showing}: flashcard)
    })
    
  }
  const editFlashcard = (id, flashcard) => {
    setFlashcards((prevArr)=>{
      return prevArr.map((prevFc)=> prevFc.id == id ? flashcard: prevFc)
    })
  }
  const deleteFlashcard = (id) => {
    setFlashcards((prevFc)=>{
      return prevFc.filter((prev)=> prev.id !== id ) 
    })
  }
  const addFlashcard = (flashcard) => {
    setFlashcards((prev)=> [...prev, {...flashcard, id: Date.now()}])

  }

  useEffect(()=>{
    const flashcards = JSON.parse(localStorage.getItem("flashcards"))
    setFlashcards(flashcards)
    
  }, [])
  useEffect(()=>{
     localStorage.setItem("flashcards", JSON.stringify(flashcards))
  }, [flashcards])

  return (
    <FlashcardProvider value={{flashcards, toggleShowing, editFlashcard, deleteFlashcard, addFlashcard}}>
      <div className={`${styles.parentDiv}flex flex-col justify-between bg-blue-50 w-full`}>
        <Header />
          <div className="w-full flex justify-center">
            <CardCreator  />
          </div>
          <div className="flex gap-2 flex-wrap px-10 mt-4">
          {
            flashcards.map((fc, index)=>{
              return <Flashcard key={index} title={fc.title} info={fc.info} id ={fc.id}/>
            })
          }
          </div>
          
        
        <Footer />
      </div>
    </FlashcardProvider>
  )
}

export default App
