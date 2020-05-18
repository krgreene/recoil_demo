import React from 'react'
import '../App.css'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

import { numState } from '../globalState'

const Section = styled.div`
      display: inline-block;
      border: 1px white solid;
      border-radius: 10px;
      padding-bottom: 20px;
      min-width: 300px;
      width: 30vw;
    `
    
    const Button = styled.button`
      border: 1px solid white;
      border-radius: 15px;
      background-color: blue;
      width: 150px;
      height: 40px;
      color: white;
      font-size: 18px;
    `

export default function Counter() {
    const [number, setNumber] = useRecoilState(numState)
  
    const handleClick = () => setNumber(current => current + 1)
    
    const handleAuxClick = event => {
      event.preventDefault()
      setNumber(current => current - 1)
    }
  
    return (
      <Section>
        <h3>Component "Counter"</h3>
        <p><i>Right click the button to reverse count</i></p>
        <Button onClick={handleClick} 
        onContextMenu={handleAuxClick}>{number}</Button>
      </Section>
    )
  }