import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBord from "./components/DashBord";
import Products from "./components/Products";

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashBord />} />
          <Route path="management" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
