/* eslint-disable react/prop-types */
import { useState } from "react"
import { useFlashcard } from "../contexts/flashcardContext"
import styles from "../css_modules/Flashcard.module.css"


function Flashcard({title, info, id}) {
    const [showing, setShowing] = useState(false)
    const {toggleShowing, deleteFlashcard} = useFlashcard()
    function handleClick(){
        setShowing((prev) => !prev)
        toggleShowing(id, showing)
    }
    function handleDelete(){
        deleteFlashcard(id)
    }
  return (
    <div className="rounded-lg overflow-hidden">
    <div className="w-full h-9  bg-white flex justify-end items-center" >
        <div onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle text-gray-400 mr-4 hover:cursor-pointer" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>
        </div>
    </div>
    <hr/>
      <div className="w-96 h-56 shadow-lg flex flex-col justify-center items-center gap-10 bg-white">
          {showing ? <p className={`${styles.fontDesc} text-xl text-center w-11/12 overflow-y-scroll `}>{info}</p>: <h2 className={`${styles.fontTitle} text-4xl`}>{title}</h2> }
      </div>
      <hr/>
      <div className="w-full h-10 bg-white flex justify-center items-center">
        <button className="hover:underline text-blue-400"
            onClick={handleClick}
            >{!showing ? "Show" : "Hide"}</button>
      </div>
    </div>
  )
}

export default Flashcard