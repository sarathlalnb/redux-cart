
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Whishlist from './pages/Whishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import PNF from './pages/PNF'
import Footer from './components/Footer'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/whishlist' element={<Whishlist />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/:id/view' element={<View />}/>
      <Route path='/*' element={<PNF />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
