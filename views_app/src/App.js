import './App.css';
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import Home from './components/content/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
            <h1>VIEWS</h1>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/signup">SignUp</Link>&nbsp;
            <Link to="/signin">SignIn</Link>
          </nav>
          <Routes>
              <Route path="/" element={<Home/>}> </Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/signin" element={<SignIn />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
