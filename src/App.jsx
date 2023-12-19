import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
    <Navbar />
    <Navigation />
    <Routes>
      <Route path='/'element={<Home />}/>
      <Route path='/about'/>
      <Route path='/logos'/>
      <Route path='/medias'/>
      <Route path='/websites'/>
    </Routes>
    <Footer />
  </Router>
  )
}

export default App;
