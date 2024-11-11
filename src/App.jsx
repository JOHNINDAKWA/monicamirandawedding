import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Portfolio from "./pages/Portfolio/Portfolio"
import Contact from "./pages/Contact/Contact"
import Journals from "./pages/Journals/Journals"
import Weddings from "./pages/Weddings/Weddings"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/journals" element={<Journals/>}/>
        <Route path="/weddings" element={<Weddings/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
