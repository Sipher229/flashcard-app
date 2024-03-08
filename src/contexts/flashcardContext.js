import { createContext, useContext } from "react";

export const FlashcardContext = createContext({
    flashcards: [
        {
            id: 1,
            title: "",
            info: "",
            showing: false
        },
        
    ],
    toggleShowing: (id, status) => {},
    addFlashcard: (flashcard) => {},
    deleteFlashcard: (id) => {},
    editFlashcard: (id)=> {}
})

export function useFlashcard(){
    return useContext(FlashcardContext);
}

export const FlashcardProvider = FlashcardContext.Provider;