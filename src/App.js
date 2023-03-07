import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductCard from "./Components/ProductDeatils";
import Products from "./Components/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductCard />} />
      </Routes>
    </Router>
  );
}

export default App;
