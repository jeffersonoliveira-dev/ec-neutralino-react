import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
  type TitleProps = {
    color?: string
  }


const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: ${(props: TitleProps) => props.color?? "white" };
`;


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Title color="orange" >Neutralino & React</Title>
      </header>
    </div>
  );
}

export default App;
