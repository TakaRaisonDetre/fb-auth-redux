import React from 'react'
import {Link} from 'react-router-dom'
import {auth } from '../../firebase/firebase.utils'


 const Header=({currentUser})=> {
    return (
        <div>
         {
             currentUser ? <div onClick={()=>auth.signOut()}>SignOut</div> : <Link to='/signin'>Sign in</Link>
         }   
        </div>
    )
}
export default Header