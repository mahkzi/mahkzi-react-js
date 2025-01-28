import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/product/:id" element={<ItemDetailContainer />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
