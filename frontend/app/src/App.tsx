import React from 'react';
import styled from "@emotion/styled";
import Button from '@mui/material/Button';

const SButton = styled.button`
  border: none;
`

const SButton = styled.button`
  border: none;
`
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SButton>ボタン</SButton>
        <Button variant="text">Text</Button>
        <p>
          Edit <code>src/App.tsx</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
