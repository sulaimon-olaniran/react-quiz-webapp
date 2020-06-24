import React, { useContext } from 'react'
import FormikAddQuestions from './add_questions/AddQuestions'
import { AppContext } from '../../contexts/AppContext'
import EndLeague from './end_league/EndLeague'

const Admin = () =>{
    const { themeClass } = useContext(AppContext)
    return(
        <div className={`admin-page-container ${themeClass}`}>
          <FormikAddQuestions />
          <hr/>
          <EndLeague />
        </div>
    )
}


export default Admin