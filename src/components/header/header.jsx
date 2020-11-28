import React from 'react'
import {Link} from 'react-router-dom'
import {auth } from '../../firebase/firebase.utils'
import {connect} from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  

 const Header=({currentUser})=> {

    const classes = useStyles(); 


    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <div>
         {
             currentUser ? <div onClick={()=>auth.signOut()}>SignOut</div> : <Link to='/signin'>Sign in</Link>
         }   
        </div>
        </Toolbar>
      </AppBar>
    </div>

    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)