import './App.css';
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import Home from './components/publicContent/Home';
import Science from './components/publicContent/Science';
import Culture from './components/publicContent/Culture'
import Languages from './components/publicContent/Languages'
import Art from './components/publicContent/Art'
import Nature from './components/publicContent/Nature'
import Tourism from './components/publicContent/Tourism'
import Entertainment from './components/publicContent/Entertainment'
import Discover from './components/publicContent/Discover'
import Fiction from './components/publicContent/Fiction'
import Profile from './components/user/Profile';
import UploadPictures from './components/userSpace/UploadPictures';
import UploadArticles from './components/userSpace/UploadArticles';
import UploadVideo from './components/userSpace/UploadVideo'
import AllPosts from './components/user/AllPosts';
import UploadAudio from './components/userSpace/UploadAudios'
import AddContent from './components/userSpace/AddContent';
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
  let[State, setState] = useState({})

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
      console.log(res.data.token)
      // Store the token in Local Storage.
      if(res.data.token != null){
        localStorage.setItem("token", res.data.token);
        let user = jwt_decode(res.data.token);
        console.log(user)
        setIsAuth(true);
        setUser(user);
      }
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
const contentHandler = (user) => {
  axios.post("http://localhost:4000/add/post", user)
}

const onLogoutHandler = () => {
  //e.preventDefault();
  localStorage.removeItem("token");
  setIsAuth(false);
  setUser(null);
}
   
  return (
    <div className="App">
      <Router>
        <nav>
          <Nav audience="Public" />
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/signup" element={<SignUp register={registerHandler}/>}></Route>
            <Route path="/signin" element={<SignIn sign={signInHandler}/>}></Route>
            <Route path="/sience" element={<Science/>}> </Route>
            <Route path="/nature" element={<Nature/>}> </Route>
            <Route path="/culture" element={<Culture/>}> </Route>
            <Route path="/languages" element={<Languages/>}> </Route>
            <Route path="/art" element={<Art/>}> </Route>
            <Route path="/tourism" element={<Tourism/>}> </Route>
            <Route path="/entertainment" element={<Entertainment/>}> </Route>
            <Route path="/fiction" element={<Fiction/>}> </Route>
            <Route path="/discover" element={<Discover/>}> </Route>
            <Route path="/add/content" element={<AddContent/>}> </Route>
            <Route path="/upload/pic" element={<UploadPictures/>}> </Route>
            <Route path="/upload/video" element={<UploadVideo/>}> </Route>
            <Route path="/upload/audio" element={<UploadAudio/>}> </Route>
            <Route path="/upload/article" element={<UploadArticles register={contentHandler}/>}> </Route>
            <Route path="/profile" element={isAuth ? <Profile out={onLogoutHandler} /> : <SignIn sign={signInHandler}/>}> </Route>
            <Route path="/all/user/posts" element={<AllPosts />}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

