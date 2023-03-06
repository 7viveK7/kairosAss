import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductCard from "./Components/ProductDeatils";
import Products from "./Components/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<ProductCard />} />
      </Routes>
    </Router>
  );
}

export default App;
