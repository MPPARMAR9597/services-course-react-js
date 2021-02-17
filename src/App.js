import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "../src/components/Sidebar";

// React Components
// Functional Component
function App() {
  return (
    <div>
      <Home />
      <Sidebar />
    </div>
  );
}

export default App;