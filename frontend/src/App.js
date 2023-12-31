import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/product/:id" element={<ProductScreen />} />
              {/*For making id optional need to add ?*/}
              <Route path="/cart/:id?" element={<CartScreen />} />
              <Route path="/" element={<HomeScreen />} exact />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
