import React from 'react'
import '../App.css'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import { result } from '../globalState'

const Section = styled.div`
      display: inline-block;
      border: 1px white solid;
      border-radius: 10px;
      padding-bottom: 20px;
      min-width: 300px;
      width: 30vw;
      margin: 20px 0px 20px 0px;
    `
    const Display = styled.div`
      height: 40px;
      min-width: 100px;
      padding: 0px 10px 0px 10px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border: 1px black solid;
      border-radius: 10px;
      background-color: black;
      color: green;
      font-family: Consolas;
      font-size: 18px;
    `

export default function Monitor() {
    // const number = useRecoilValue(numState)
    const value = useRecoilValue(result)

    return (
      <Section>
        <h3>Component "Monitor"</h3>
        <Display>{value}</Display>
      </Section>
    )
  }