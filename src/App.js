import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Articles from './components/Articles';
import './App.css';


//const express = require('express');
// const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');
// const app = express();

function App() {
  return (

    <div>
      <Header />
      <Nav />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
