import Allpost from './component/Allpost'
import Navbar from "./component/Navbar"
import Singlepost from './component/Singlepost'
import { BrowserRouter , Routes, Route} from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route exact path="/" element={<Allpost/>}/>
      <Route exact path="/single/:id" element={<Singlepost/>}/>
     </Routes>
     
     </BrowserRouter>
    
  )
}

export default App
