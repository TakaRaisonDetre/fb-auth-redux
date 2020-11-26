import React, { Component } from 'react'
import CustomButton from '../custom-button/custombutton'

import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn   extends Component {
constructor(props){
    super(props);

this.state={
    email:'',
    password: ''
}
};

handleSubmit =e => {
    e.preventDefault();
    this.setState({email: '', password: ''})
}

    render() {
        return (
            <div>
                <h2>I already jhave an account</h2>
            
            <form onSubmit={this.handleSubmit}> 
                <input name ="email" value ={this.state.enail}></input>
                <input name ="password" value ={this.state.password}></input>
                <button type="submit" value="Submit Form" ></button>
                <CustomButton  onClick={signInWithGoogle}>Sign In with Google</CustomButton>
            </form>
        </div>
        )
    }
}
export default SignIn 