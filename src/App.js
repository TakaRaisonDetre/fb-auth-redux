import React , {Component}from 'react'
import './App.css';

import {Switch, Route} from 'react-router-dom'
import {auth, createUserProfileDocument } from './firebase/firebase.utils'
import Header from './components/header/header'
import SignUpPage from './pages/sign-up.screen';
import SignInPage from './pages/sign-in.screen'
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'


class App extends React.Component {


  unsubscribedFromAuth=null 

  componentDidMount(){

    const {setCurrentUser} = this.props

   this.unsubscribedFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          console.log(snapShot.data()); // there is no id
     setCurrentUser({
            id : snapShot.id,
            ...snapShot.data()
         });
        });
        
      }
     setCurrentUser(userAuth)
    });
  }

  componentWillUnmount(){
    this.unsubscribedFromAuth()
  }

  
  
  render(){

    return (
      <div className="App">
        <Header/>
      <Switch>
        <Route path='/signin' component={SignInPage}/>
        <Route path='/signup' component={SignUpPage}/>
      </Switch>
     
      <div>harahara
  
      </div>
  
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
