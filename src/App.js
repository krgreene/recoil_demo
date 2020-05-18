// State management with Recoil.
// Recoil is an experimental state management library for React.

import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil'
import styled from 'styled-components'

import Counter from './components/counter'
import Monitor from './components/monitor'
import EditPower from './components/edit'

import sclogo from './graphics/sclogo.png'

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

// Main application
export default function App() {
  return (
    <RecoilRoot>
      <Section className={"App"}>
        <h1>Managing State with Recoil</h1>
        <img src={sclogo} alt='styled components logo' width={'70px'} href={'https://styled-components.com/'} />
        <p>Styled with styled components</p>
        <Counter />
        <Monitor />
        <EditPower />
      </Section>
    </RecoilRoot>
  );
}
