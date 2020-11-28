import React, { Component } from 'react'
import {connect} from 'react-redux'

import {googleSignInStart ,emailSignInStart} from '../../redux/user/user.action'

class SignIn extends Component {
constructor(props){
    super(props);

this.state={
    email:'',
    password: ''
}
};

handleSubmit = async e => {
    e.preventDefault();
   const {emailSignInStart} = this.props;
   const {email, password} = this.state;
   
   emailSignInStart(email, password);
   console.log(this.props)
}

handleChange = e =>{
    const {value, name } = e.target;
    this.setState({[name]: value})
}

    render() {
        const {googleSignInStart} = this.props;
        return (
            <div>
                <h2>I already jhave an account</h2>
            
            <form onSubmit={this.handleSubmit}> 
                <input name="email"  onChange={this.handleChange} value={this.state.email}></input>
                <input name="password"  onChange={this.handleChange} value={this.state.password}></input>
                <button type="submit" value="Submit Form" >Email Sign In</button>
                <button  type='button'
                  onClick={googleSignInStart} >Login In with Google</button>
                {/* <CustomButton onClick={googleSignInStart}>Sign In with Google</CustomButton> */}
            </form>
        </div>
        )
    }
}

const mapDispatchToPros = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()), 
    emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null ,mapDispatchToPros)(SignIn) 