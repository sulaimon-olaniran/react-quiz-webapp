import React from 'react'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/Styles.scss'
import AppContextProvider from './contexts/AppContext'
import NavContent from './components/navbar/NavContent'
import HomePage from './components/homepage/Homepage'
import Footer from './components/footer/Footer'
import GameQuestions from './components/game/GameQuestions'
import GameContextProvider from './contexts/GameContext'
import GameStats from './components/game/game_stats/GameStats'
import DeviceOrientation, { Orientation } from 'react-screen-orientation'
import Instructions from './components/instructions/Instructions'
import ProfilePage from './components/profile/ProfilePage'
import FormikSignUpPage from './components/auth/sign_up/SignUp'
import FormikSignInPage from './components/auth/sign_in/SignIn'
import AboutPage from './components/about/AboutPage'

function App() {
  return (

    <AppContextProvider>
      <GameContextProvider >
        <Router>
        <DeviceOrientation lockOrientation={'portrait'}>
        <Orientation orientation='portrait' alwaysRender={true}>
          <div className="App">

            <NavContent />
            <NavBar />


            <div className="page-section">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/game" component={GameQuestions} />
                <Route exact path="/game/instructions" component={Instructions} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/game/stats" component={GameStats} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/signup" component={FormikSignUpPage}  />
                <Route exact path="/signin" component={FormikSignInPage} />

              </Switch>
            </div>
            <Footer />
          </div>
          </Orientation>
          </DeviceOrientation>
        </Router>
      </GameContextProvider>
    </AppContextProvider>

  )
}

export default App;
