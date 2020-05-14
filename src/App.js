import React from 'react';
import NavBar from './components/navbar/NavBar'
import { BrowserRouter as Router, Route, Swtich } from 'react-router-dom'
import './styles/Styles.scss'
import AppContextProvider from './contexts/AppContext';
import NavContent from './components/navbar/NavContent';

function App() {
  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          <NavContent />
          <NavBar />
        </div>
      </Router>
    </AppContextProvider>
  )
}

export default App;
