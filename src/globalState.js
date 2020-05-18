import { atom, selector } from 'recoil'

// Global State

// An atom is a unit of global state. The atom function accepts an object.
export const numState = atom({
  key: "numState",
  default: 0
})

// Define as many atoms as needed. The key must be unique.
export const expoState = atom({
  key: "exponent",
  default: 0
})

// A selector creates derived state, i.e. create a new state based on a given state. Accepts an object which has a getter.
export const result = selector({
  key: 'result',
  get: ({get}) => get(numState) ** get(expoState)
})