import React, { useState, useEffect } from 'react'
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
//import DeviceOrientation, { Orientation } from 'react-screen-orientation'
import Instructions from './components/instructions/Instructions'
import ProfilePage from './components/profile/ProfilePage'
import FormikSignUpPage from './components/auth/sign_up/SignUp'
import FormikSignInPage from './components/auth/sign_in/SignIn'
import AboutPage from './components/about/AboutPage'
import QuestionContextProvider from './contexts/QuestionsContext'
import SettingsPage from './components/settings/Settings'
import ProfileContextProvider from './contexts/ProfileContext'
import { auth, db } from './firebase/Firebase'
import Loader from './components/loader/Loader'
import { Offline, Online } from "react-detect-offline"

function App() {
  const [isAuth, setIsAuth] = useState(true)
  const [show, setShow] = useState(false)
  const [user, setUser] = useState(true)

  const getUser = () => {
    const userId = auth.currentUser && auth.currentUser.uid
    db.collection("users").doc(userId)
      .get()
      .then((data) => {
        setUser(data.data())
        setIsAuth(false)
        setTimeout(() => {
          setShow(true)
        }, 500);
      })
  }

  useEffect(() => {
    authUser().then((user) => {
      getUser()

    }, (error) => {
      getUser()
      console.log(error);
      console.log("error was found")
    });

  }, [])

  const authUser = () => {
    return new Promise(function (resolve, reject) {
      auth.onAuthStateChanged(user => {
        if (user) {
          resolve(user)
        }
        reject("not logged in")
      })
    })
  }

  const message = "Authenticating User"

  if (show === false) return <Loader loading={isAuth} message={message} />

  else {
    return (
      <React.Fragment>
        <Online>
          <AppContextProvider>
            <GameContextProvider >
              <QuestionContextProvider>
                <ProfileContextProvider >
                  <Router>
                    <div className="App">
                      <NavContent />
                      <NavBar profile={user} />

                      <div className="page-section">

                        <Switch>
                          <Route exact path="/" component={HomePage} />
                          <Route exact path="/game" component={GameQuestions} />
                          <Route exact path="/game/instructions" component={Instructions} />
                          <Route exact path="/about" component={AboutPage} />
                          <Route exact path="/game/stats" component={GameStats} />
                          <Route exact path="/profile" component={ProfilePage} />
                          <Route exact path="/signup" component={FormikSignUpPage} />
                          <Route exact path="/signin" component={FormikSignInPage} />
                          <Route exact path="/settings" component={SettingsPage} />
                        </Switch>
                      </div>
                      <Footer />
                    </div>
                  </Router>
                </ProfileContextProvider>
              </QuestionContextProvider>
            </GameContextProvider>
          </AppContextProvider>
        </Online>
        <Offline>
          <h1>Connect to Internet</h1>
        </Offline>
      </React.Fragment>
    )
  }
}

export default App;
