import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header/header';
import Navbar from './Components/Navbar/navbar';
import MainContent from './Components/Content/content';
import Footer from './Components/Footer/Footer';

import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Router>
          <div>
            <Navbar />
            <MainContent />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
