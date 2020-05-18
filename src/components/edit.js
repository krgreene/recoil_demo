import React from 'react';
import '../App.css';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components'

import { expoState } from '../globalState'

const Section = styled.div`
      display: inline-block;
      border: 1px white solid;
      border-radius: 10px;
      padding-bottom: 20px;
      min-width: 300px;
      width: 30vw;
    `
    const Input = styled.input`
      border-radius: 10px;
      text-align: center;
      font-size: 18px;
    `

export default function EditPower() {
    // const [exponent, setExponent] = useRecoilState(expoState)
    const setExponent = useSetRecoilState(expoState)
  
    const handleChange = event => {
      if (isNaN(event.target.value)) {
        document.getElementById('input').reset();
        document.getElementById('message').style = 'color: red; font-weight: bold; font-size: large;';
      } else {
        document.getElementById('message').style = 'color: black;';
        setExponent(event.target.value);
      }
    }
    const handleClick = event => event.target.select()
  
    return (
      <Section>
        <form id={'input'}>
          <h3>Component "EditPower"</h3>
          <p><i id='message'>Enter a number below</i></p>
          <Input type={'text'} placeholder={0} onChange={handleChange} onClick={handleClick} />
        </form>
      </Section>
    )
  }