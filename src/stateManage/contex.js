import { create } from 'zustand'

const statemanage = create((set) => ({
  character:null,
  setCharacter: (character)=>set({character}),
  allCharacter:null,
  setAllCharacter:(allCharacter)=>set({allCharacter})
}))

export default statemanage
