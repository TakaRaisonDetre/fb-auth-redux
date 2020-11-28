import React from 'react'
import './App.css';

import {Switch, Route, Redirect} from 'react-router-dom'

import Header from './components/header/header'
import SignUpPage from './pages/sign-up.screen';
import SignInPage from './pages/sign-in.screen'
import {connect} from 'react-redux'

import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors'
import {checkUserSession} from './redux/user/user.action'

class App extends React.Component {


  unsubscribedFromAuth=null 

  componentDidMount(){
   const {checkUserSession} = this.props
   checkUserSession();
  }

  componentWillUnmount(){
    this.unsubscribedFromAuth()
  }

  
  
  render(){

    return (
      <div className="App">
        <Header/>
      <Switch>
        <Route path='/signin' 
        render={()=>
          this.props.currentUser? 
        <Redirect to='/'/>:
        <SignInPage/>}/>
        <Route path='/signup' component={SignUpPage}/>
      </Switch>
     
      <div>harahara
  
      </div>
  
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession : ()=>dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
