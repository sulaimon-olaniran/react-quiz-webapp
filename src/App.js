import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/Styles.scss'
import AppContextProvider from './contexts/AppContext'
import GameContextProvider from './contexts/GameContext'
import QuestionContextProvider from './contexts/QuestionsContext'
import ProfileContextProvider from './contexts/ProfileContext'
import { auth } from './firebase/Firebase'
import Loader from './components/loader/Loader'
import { Offline, Online } from "react-detect-offline"
import Components from './components/Components'
import ErrorBoundary from './ErrorHandler'

function App() {
  const [isAuth, setIsAuth] = useState(true)
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)


  useEffect(() => {
    authUser().then((user) => {
      setIsAuth(false)
      setTimeout(() => {
        setShow(true)
      }, 1000);

    }, (error) => {
      setError(true)
      setIsAuth(false)
      setTimeout(() => {
        setShow(true)
      }, 1000);
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

  if (show === false) return <Loader loading={isAuth} message={message} error={error} />

  else {
    return (
      <React.Fragment>
        <ErrorBoundary>
        <Online>
          <Router>
            <AppContextProvider>
              
                <QuestionContextProvider>
                  <ProfileContextProvider >
                   <GameContextProvider >
                    <div className="App">

                      <Components />

                    </div>
                    </GameContextProvider>
                  </ProfileContextProvider>
                </QuestionContextProvider>
              
            </AppContextProvider>
          </Router>
        </Online>
        <Offline>
          <h1>Connect to Internet</h1>
        </Offline>
        </ErrorBoundary>
      </React.Fragment>
    )
  }
}

export default App;
