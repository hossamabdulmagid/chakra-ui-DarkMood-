import React, { Fragment } from 'react';
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from '@chakra-ui/core';
import HomePage from './component/homepage'
import Example from './component/button'
import './App.css';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <HomePage />
      </ColorModeProvider>
    </ThemeProvider>

  )
}

export default App;


