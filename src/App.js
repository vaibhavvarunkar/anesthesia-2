import logo from './logo.svg';
import './App.css';
import './css/style.css'
import React,{useMemo,useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Screen/login';
import IndexAfterLogin from './Screen/indexAfterLogin';
import Signup from './Screen/Signup';
import Favorites from './Screen/Favorites';
import AllAction from './Screen/AllAction';
import CaseSummary from './Screen/CaseSummary';
import ForgotPassword from './Screen/ForgotPassword';
import MyProfile from './Screen/MyProfile';
import Change_pass from './Screen/Change_Pass';
import Notification from '../src/Screen/Notification'
import MySubcription from './Screen/MySubcription';
import EditProfile from './Screen/EditProfile';
import Subcription from './Screen/Subcription';
import Settings from './Screen/Settings';
import Feedback from './Screen/Feedback';
import SaveCases from './Screen/SaveCases';
import Home from './Screen/Home.js'
import About from './Screen/About';
import Contact from './Screen/Contact';
import Tnc from './Screen/Tnc';
import PrivacyPolicy from './Screen/PrivacyPolicy.js'
import UserContext from './UserContext'
function App() {
  const [user,setUser]=useState(0)
  
  useEffect(() => {
   // checkUserFlow()
  }, [])

  const checkUserFlow=()=>{
    const token=sessionStorage.getItem('token')
    if(token==null){
      setUser(0)
    } else{
      setUser(1)
      window.location="/afterLogin"
    }
    
  }


  const authFlow = useMemo(
    () => ({
      signOut:  async() => {
        try {
        sessionStorage.removeItem('token')
          setUser(0);
       
        } catch (error) {
          setUser(0);
        }
      },
      logIn:  async() => {
        try {
          setUser(1);
        } catch (error) {
          console.log(error)
        }
      },
    }),
    [user,setUser],
  );

  return (
        <Router>
 
 <div>
   <UserContext.Provider value={authFlow} >
     <Switch>
  <Route exact path="/" component={Home} /> 
     <Route exact path="/login" component={Login}  />
     <Route exact path="/signup" component={Signup}  />
     <Route exact path="/forgotPassword" component={ForgotPassword}  />
     <Route exact path="/termsandconditions" component={Tnc} />
     <Route exact path="/privacypolicy" component={PrivacyPolicy} />
     
      
       <Route exact path="/afterLogin" component={IndexAfterLogin} />
       <Route exact path="/favorite" component={Favorites}  />
       <Route exact path="/allaction" component={AllAction}  />
       <Route exact path="/casesummary" component={CaseSummary}  />
       <Route exact path="/myprofile" component={MyProfile} />
       <Route exact path="/changepassword" component={Change_pass} />
       <Route exact path="/notification" component={Notification} />
       <Route exact path="/mysubcription" component={MySubcription} />
       <Route exact path="/editprofile" component={EditProfile} />
       <Route exact path="/subcription" component={Subcription} />
       <Route exact path="/settings" component={Settings} />
       <Route exact path="/feedback" component={Feedback} />
       <Route exact path="/savecases" component={SaveCases} />
       <Route exact path="/about" component={About} />
       <Route exact path="/contact" component={Contact} />
       
     
   
   </Switch>
   </UserContext.Provider>
   </div>
   </Router>
   
    );
}

export default App;
