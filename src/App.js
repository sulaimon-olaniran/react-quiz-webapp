import React from 'react';
import NavBar from './components/navbar/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/Styles.scss'
import AppContextProvider from './contexts/AppContext';
import NavContent from './components/navbar/NavContent';
import HomePage from './components/homepage/Homepage';

function App() {
  return (
    <AppContextProvider>
      <Router>
        <div className="App">
          <NavContent />
          <NavBar />

          <div className="page-section">
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </div>

        </div>
      </Router>
    </AppContextProvider>
  )
}

export default App;
