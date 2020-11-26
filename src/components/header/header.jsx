import React from 'react'
import {Link} from 'react-router-dom'
import {auth } from '../../firebase/firebase.utils'
import {connect} from 'react-redux'

 const Header=({currentUser})=> {
    return (
        <div>
         {
             currentUser ? <div onClick={()=>auth.signOut()}>SignOut</div> : <Link to='/signin'>Sign in</Link>
         }   
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)