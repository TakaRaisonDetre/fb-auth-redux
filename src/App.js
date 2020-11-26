import React , {Component}from 'react'
import './App.css';

import {Switch, Route} from 'react-router-dom'
import {auth, createUserProfileDocument } from './firebase/firebase.utils'
import Header from './components/header/header'
import SignUpPage from './pages/sign-up.screen';
import SignInPage from './pages/sign-in.screen'


class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser: null 
    }
  }

  unsubscribedFromAuth=null 

  componentDidMount(){
   this.unsubscribedFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          console.log(snapShot.data()); // there is no id
        this.setState({
          currentUser: {
            id : snapShot.id,
            ...snapShot.data()
          }
        }, ()=>{
          console.log(this.state)
        })
        })
        
      }
      this.setState({currentUser: userAuth})
    });
  }

  componentWillUnmount(){
    this.unsubscribedFromAuth()
  }

  
  
  render(){

    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
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

export default App;
