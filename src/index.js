import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { lightBlue, } from '@mui/material/colors'


import App from './App'
import './index.css'





const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[300],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});


ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)





