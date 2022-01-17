import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header';
import Section from './components/Section/Section';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    );
  }
}

export default App;
