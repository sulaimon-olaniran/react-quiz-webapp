import React from 'react';
import NavBar from './components/navbar/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/Styles.scss'
import AppContextProvider from './contexts/AppContext';
import NavContent from './components/navbar/NavContent';
import HomePage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import GameQuestions from './components/game/GameQuestions';
import GameContextProvider from './contexts/GameContext';

function App() {
  return (
    
    <AppContextProvider>
      <GameContextProvider >
      <Router>
        <div className="App">
       
          <NavContent />
          <NavBar />
         

          <div className="page-section">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/game" component={GameQuestions} />  
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
      </GameContextProvider>
      </AppContextProvider>
      
  )
}

export default App;
