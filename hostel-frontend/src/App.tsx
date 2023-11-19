import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import ViewDetails from './Pages/ViewDetails'
import MasterTable from './Components/MasterTable'

function App() {

  return (
      <Router>
        {/* {showNav &&<Navbar />} */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="view-details" element={<ViewDetails />}></Route>
          <Route path="view-master" element={<MasterTable/>}> </Route>
        </Routes>
      </Router>
  )
}

export default App
