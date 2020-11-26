import React, {Component} from 'react'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils' 
import CustomButton from '../custom-button/custombutton';

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
        <div>
            <h2>I do not have an account</h2>
            <span>Sign up with your email and passoword</span>
            <form onSubmit={this.handleSubmit}> 
                <input 
                type="text"
                name="displayName"
                value = {displayName}
                onChange={this.handleChange}
                label="Display Name"
                required ></input>
                  <input 
                type="email"
                name="email"
                value = {email}
                onChange={this.handleChange}
                label="Email"
                required ></input>
                  <input 
                type="password"
                name="password"
                value = {password}
                onChange={this.handleChange}
                label="password"
                required ></input>
                  <input 
                type="password"
                name="confirmPassword"
                value = {confirmPassword}
                onChange={this.handleChange}
                label="confirmPassword"
                required ></input>
           <CustomButton type="submit">Sign Up </CustomButton>
            </form>
        </div>
    )
   }
    
}
export default SignUp ;