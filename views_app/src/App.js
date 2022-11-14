import './App.css';
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import Home from './components/content/Home';
import Science from './components/content/Science';
import Nature from './components/content/Nature'
import Nav from './components/parts/Nav'
import jwt_decode from 'jwt-decode';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  //This state is defined to store if the session is auth or not.
  const [isAuth, setIsAuth] = useState(false);
  //This state is defined to store the user signed in
  const [user, setUser] = useState({});

  /*This hook is used to mount the state to the component; it will readd the state
  into the page in the case of refereshing the page. */
  useEffect(() => {
    let token = localStorage.getItem("token");

    if(token != null){
      let user = jwt_decode(token);

      if(user){
        setIsAuth(true);
        setUser(user)
      }
      else if(!user){
        localStorage.removeItem("token");
        setIsAuth(false);
      }
    }
  }, [])

/*This function is designed to fetch the API that register the user details in the 
  DB.
    @Parameters:
      -user: this para. holds the user obj that contains the user details.
    @Return:
      -This is a void function designed to respond to the clicking the submit button.  
*/ 
  const registerHandler = (user) => {
    axios.post("http://localhost:4000/signup", user)
    .then(res => {
      // Store the token in Local Storage.
      if(res.data.token != null){
        localStorage.setItem("token", res.data.token);
        let user = jwt_decode(res.data.token);
        console.log(user)
        setIsAuth(true);
        setUser(user);
      }
      console.log(res);
    })
    .catch(err => {
      console.log(err)
    });
  }

/*This function is designed to fetch the API that login the user into their account.
    @Parameters:
      -user: this para. holds the user obj that contains the user details.
    @Return:
      -This is a void function designed to respond to the clicking the submit button.  
*/ 
  const signInHandler = (user) => {
    axios.post("http://localhost:4000/signin", user)
    .then(res => {
      // Store the token in Local Storage.
      if(res.data.token != null){
        localStorage.setItem("token", res.data.token);
        let user = jwt_decode(res.data.token);
        console.log(user)
        setIsAuth(true);
        setUser(user);
      }
      console.log(res);
    })
    .catch(err => {
      console.log(err)
    });
  }




    
  

  
   
  return (
    <div className="App">
      <Router>
        <nav>
            <Nav audience="Public" />
            <Link to="/">Home</Link>&nbsp;
            <Link to="/signup">SignUp</Link>&nbsp;
            <Link to="/signin">SignIn</Link> 
          </nav>
          <Routes>
              <Route path="/" element={<Home/>}> </Route>
              <Route path="/signup" element={<SignUp register={registerHandler}/>}></Route>
              <Route path="/signin" element={<SignIn sign={signInHandler}/>}></Route>
              <Route path="/sience" element={<Science/>}> </Route>
              <Route path="/nature" element={<Nature/>}> </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

