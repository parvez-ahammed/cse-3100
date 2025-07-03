import { create } from 'zustand'

const statemanage = create((set) => ({
  character:null,
  setCharacter: (character)=>set({character}),
  allCharacter:null,
  setAllCharacter:(allCharacter)=>set({allCharacter}),
  selected:"",
  setSelected:(selected)=>set({selected})
}))

export default statemanage