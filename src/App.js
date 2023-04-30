import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import SwapPage from "./pages/SwapPage";
import NavBarPage from "./pages/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarPage />
        <Routes>
          <Route path="/" end element={<HomePage />} />
          <Route path="/swap" end element={<SwapPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
