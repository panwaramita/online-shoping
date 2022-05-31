import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductScreen from "./pages/ProductScreen";
import { CartScreen } from "./pages/CartScreen";
import Navbar from "./components/Navbar";
import { BackDrop } from "./components/BackDrop";
import SideDrawer from "./components/SideDrawer";
import { useState } from "react";
function App() {
  const [sideToogle, setSideToogle] = useState(false);
  return (
    <BrowserRouter>
      <Navbar click={() => setSideToogle(true)} />
      <BackDrop show={sideToogle} click={() => setSideToogle(false)} />
      <SideDrawer show={sideToogle} click={() => setSideToogle(false)} />
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/product/:id' element={<ProductScreen />} />
          <Route exact path='/cart' element={<CartScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
