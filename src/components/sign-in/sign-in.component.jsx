import React, { Component } from 'react'
import CustomButton from '../custom-button/custombutton'

import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn   extends Component {
constructor(props){
    super(props);

this.state={
    email:'',
    password: ''
}
};

handleSubmit = async e => {
    e.preventDefault();
   const {email, password} = this.state;
   try {
       await auth.signInWithEmailAndPassword(email, password);
       this.setState({email:'', password:''})

   } catch (error) {
       console.log(error);
   }
}

handleChange = e =>{
    const {value, name } = e.target;
    this.setState({[name]: value})
}

    render() {
        return (
            <div>
                <h2>I already jhave an account</h2>
            
            <form onSubmit={this.handleSubmit}> 
                <input name ="email" handleChange={this.handleChange} value ={this.state.enail}></input>
                <input name ="password" handleChange={this.handleChange} value ={this.state.password}></input>
                <button type="submit" value="Submit Form" ></button>
                <CustomButton  onClick={signInWithGoogle}>Sign In with Google</CustomButton>
            </form>
        </div>
        )
    }
}
export default SignIn 