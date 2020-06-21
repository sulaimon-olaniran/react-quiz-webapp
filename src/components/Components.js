import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavContent from './navbar/NavContent'
import NavBar from './navbar/NavBar'
import HomePage from './homepage/Homepage'
import Footer from './footer/Footer'
import GameQuestions from './game/GameQuestions'
import GameStats from './/game/game_stats/GameStats'
import Instructions from './instructions/Instructions'
import ProfilePage from './profile/ProfilePage'
import FormikSignUpPage from './auth/sign_up/SignUp'
import FormikSignInPage from './auth/sign_in/SignIn'
import AboutPage from './about/AboutPage'
import UsersPage from '../components/users/UsersPage'
import { ProfileContext } from '../contexts/ProfileContext'
import SettingsPage from './settings/Settings'
import Loader from './loader/Loader'
import GameLeague from './league/GameLeague'
import LeagueRules from './league/rules/LeagueRules'
import UserProfile from './users/user_profile/UserProfile'
import LeagueTable from './league_table/LeagueTable'
import Demo from './demo/Demo'
//import { GameContext } from '../contexts/GameContext'
// import { db } from '../firebase/Firebase'
// import firebase from '../firebase/Firebase'
// import { AppContext } from '../contexts/AppContext'


const Components = () => {
   // const [currentTime, setCurrentTime] = useState(new Date().getTime())
    const { loading, fetching } = useContext(ProfileContext)
   // const { countDownDate } = useContext(GameContext)
   // const { usersData } = useContext(AppContext)
    const message = "Fetching User Data"

    // let timing;

    // useEffect(() => {
    //     timing = setInterval(() => {
    //         setCurrentTime(new Date().getTime())
    //     }, 1000)

    //     return () => {
    //         clearInterval(timing)
    //     }
    // }, [])


    // if (currentTime > countDownDate) {
    //     // console.log("Timer is working pretty well")
    //     usersData && usersData.map(user => {
    //         if (user.leaguePosition === 1) {
    //             return db.collection("users").doc(user.id).update({
    //                gold : firebase.firestore.FieldValue.increment(1)

    //             })
            
    //         }
    //         else if ( user.leaguePosition === 2) {
    //             return db.collection("users").doc(user.id).update({
    //                silver : firebase.firestore.FieldValue.increment(1)
    //             })
    //         }
    //         else if ( user.leaguePosition === 3) {
    //             return db.collection("users").doc(user.id).update({
    //                bronze : firebase.firestore.FieldValue.increment(1)
    //             })
    //         }
    //     })
    // }

    // if ( currentTime < countDownDate){
    //     console.log("why you do this")
    //     if ( profile && profile.leaguePosition === 2) {
    //         alert("second")
    //     }
    // }

    // if (currentTime > countDownDate) {
    //     if ( profile && profile.leaguePostion === 1) {
    //         db.collection("users").doc(profile.id).update({
    //            gold : firebase.firestore.FieldValue.increment(1)

    //         })
    //     }
    //     else if ( profile && profile.leaguePostion === 2) {
    //         db.collection("users").doc(profile.id).update({
    //            silver : firebase.firestore.FieldValue.increment(1)
    //         })
    //     }
    //     else if ( profile && profile.leaguePostion === 3) {
    //         db.collection("users").doc(profile.id).update({
    //            bronze : firebase.firestore.FieldValue.increment(1)
    //         })
    //     }

    // }


    if (fetching) return <Loader message={message} loading={loading} />
    else {
        return (
            <React.Fragment>
                <NavContent />
                <NavBar />
                <div className="page-section">

                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/demo" component={Demo} />
                        <Route exact path="/league/game" component={GameLeague} />
                        <Route exact path="/league/rules" component={LeagueRules} />
                        <Route exact path="/game/instructions" component={Instructions} />
                        <Route exact path="/league/ranking" component={LeagueTable} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/game/stats" component={GameStats} />
                        <Route exact path="/profile" component={ProfilePage} />
                        <Route exact path="/signup" component={FormikSignUpPage} />
                        <Route exact path="/signin" component={FormikSignInPage} />
                        <Route exact path="/settings" component={SettingsPage} />
                        <Route exact path="/users" component={UsersPage} />
                        <Route exact path="/user/:id" component={UserProfile} />
                    </Switch>
                </div>
                <Footer />

            </React.Fragment>
        )
    }
}

export default Components