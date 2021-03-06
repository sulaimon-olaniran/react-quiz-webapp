import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavContent from './navbar/NavContent'
import NavBar from './navbar/NavBar'
import HomePage from './homepage/Homepage'
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
import Admin from './admin/Admin'
import { AppContext } from '../contexts/AppContext'
import BuyCoins from './buy_coins/BuyCoins'


const Components = () => {
    const { loading, fetching } = useContext(ProfileContext)
    const { usersData } = useContext(AppContext)
    const message = "Fetching User Data"


    if (fetching) return <Loader message={message} loading={loading} />
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
                    <Route exact path="/signup" component={() => <FormikSignUpPage users={usersData} />} />
                    <Route exact path="/signin" component={FormikSignInPage} />
                    <Route exact path="/settings" component={SettingsPage} />
                    <Route exact path="/users" component={UsersPage} />
                    <Route exact path="/user/:id" component={UserProfile} />
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/coins" component={BuyCoins} />
                </Switch>
            </div>

        </React.Fragment>
    )

}

export default Components