import { useState } from "react"
import { useFlashcard } from "../contexts/flashcardContext"


function CardCreator() {

  const [flashcard, setFlashcard]  = useState({
    title: "",
    info: "",
  })
  const [hidden, setHidden] = useState(true)
  const {addFlashcard} = useFlashcard()

  function handleChange(e){
    const {value, name} = e.target
    if(name == "title"){
    setFlashcard((prev)=> ({...prev, title: value}))
    }else{
    setFlashcard((prev)=> ({...prev, info: value}))
    }

    
    
  }
  function handleSubmit(e){
    e.preventDefault()
    addFlashcard(flashcard)
    setHidden(true)
    setFlashcard({
      title: "",
      info: ""
    })
  }
  return (
    
      <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-0 sticky">
      <div className="rounded-md overflow-hidden mt-5 shadow-lg bg-white">
      <div className="w-96 h-14 flex items-cennter bg-white pl-3">
        <input
          type="text"
          name = "title"
          value={flashcard.title}
          onChange={handleChange}
          onFocus={()=>{ setHidden(false)}}
          className="border border-b border-x-0 border-t-0 outline-none w-4/5"
          placeholder={hidden? "Click here to add a card": "Keywords. ex: What is photosynthesis?"}
         />
        </div>
        {
          hidden? "":(
        <div className=" w-full overflow-hidden flex flex-col bg-white pl-3">
          <textarea placeholder="Small description" className="outline-none border focus:border-slate-400 mb-0 border-t-0 border-r-0 border-l-0 mt-2" cols="45" rows="7"
            name="info"
            value={flashcard.info}
            onChange={handleChange}
          />
          <button type="submit" className="border-none text-blue-300 mb-2 mt-2 rounded-md hover:underline self-center">Add</button> 
        </div>)
        }
        </div>
      </form>
    
  )
}

export default CardCreator