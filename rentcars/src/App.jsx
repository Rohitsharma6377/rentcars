import { Route, Routes } from "react-router-dom";
import "../src/App.css"
import Home from "./pages/Home";
import Test from "./pages/Test";
import Fleetspage from "./pages/Fleetspage";
import Reserve from "./pages/Reserve";
import Contacts from "./pages/Contacts";


function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contacts/>} />
      <Route path="/testmontial" element={<Test/>}/>
      <Route path="/fleet" element={<Fleetspage/>} />
      <Route path="/reservation" element={<Reserve/>} />
      
    </Routes>
   
   </>
  )
}

export default App;
