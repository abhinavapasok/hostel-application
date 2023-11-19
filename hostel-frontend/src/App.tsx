import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route, Form} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import ViewDetails from './Pages/ViewDetails'
import Master from './pages/Master'

function App() {

  return (
      <Router>
        {/* {showNav &&<Navbar />} */}
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="view-details" element={<ViewDetails />}></Route>
          <Route exact path="view-master" element={<Master />}></Route>
        </Routes>
      </Router>
  )
}

export default App
