import React, {Component} from 'react'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils' 
import CustomButton from '../custom-button/custombutton';

import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// })); 


class SignUp extends React.Component {
   
  constructor(){
       super()
       this.state = {
           displayName : '',
           email : '',
           password: '',
           confirmPassword: ''
       }
   }

  
  

handleSubmit = async e => {
    e.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state;
    if(password!==confirmPassword){
        alert ('password donot match')
        return;
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, {displayName})
      this.setState({
        displayName : '',
        email : '',
        password: '',
        confirmPassword: ''
      })

    } catch(error){
       console.error(error)
    }
}


handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]:value});

}

   render(){
       const {displayName, email, password, confirmPassword} = this.state;
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
      <Avatar >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        I do not have an account
        <span>Sign up with your email and passoword</span>
        </Typography>
          
           
            <form onSubmit={this.handleSubmit} noValidate> 
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                name="displayName"
                value = {displayName}
                onChange={this.handleChange}
                label="Display Name"
                required /> 
                </Grid>
                 <Grid item xs={12} sm={6}>
              <TextField
                type="email"
                name="email"
                value = {email}
                onChange={this.handleChange}
                label="Email"
                required /> 
                </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                type="password"
                name="password"
                value = {password}
                onChange={this.handleChange}
                label="password"
                required />
                </Grid>
                 <Grid item xs={12} sm={6}>
              <TextField
                type="password"
                name="confirmPassword"
                value = {confirmPassword}
                onChange={this.handleChange}
                label="confirmPassword"
                required /></Grid>
                </Grid>
           <CustomButton 
           fullWidth
           variant="contained"
           color="primary"
         
           type="submit">Sign Up </CustomButton>
           <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
            </form>
      </div>
    </Container>




    )
   }
    
}
export default SignUp ;