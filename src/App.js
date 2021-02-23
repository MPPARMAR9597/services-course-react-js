import React from 'react';

import { Provider } from "react-redux";
import initStore from "../src/store/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import FaqPage from "./pages/Faq";
import ProfilePage from "./pages/Profile";
import ServicesPage from "./pages/Services";
import ServiceDetailPage from "./pages/ServiceDetail";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

import Navbar from '../src/components/Navbar'
import Sidebar from "../src/components/Sidebar";

const store = initStore()

// React Components
// Functional Component
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Navbar id="navbar-clone" />
        <Sidebar />

        <Switch>

          <Route path="/services/:servicesId"><ServiceDetailPage /></Route>

          <Route path="/services"><ServicesPage /></Route>

          <Route path="/profile"><ProfilePage /></Route>

          <Route path="/faq"><FaqPage /></Route>

          <Route path="/login"><LoginPage /></Route>

          <Route path="/register"><RegisterPage /></Route>

          <Route path="/"><HomePage /></Route>

        </Switch>

      </Router>
    </Provider>
  );
}

export default App;