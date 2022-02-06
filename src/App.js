import {
  Routes,
  Route
} from "react-router-dom"


import TemplateDefault from './templates/Default'

import Home from "./pages/Home"


const App = () => {
  return (
    <TemplateDefault>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </TemplateDefault>
  )
}

export default App
   
