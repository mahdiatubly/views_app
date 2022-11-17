import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'
    
export default function SignIn(props) {
    //Creating the state that will hold the info of the new users
    const [newUser, setNewUser] = useState({});

    /*This function updates the value of the state with the user's input. It's an
      event handler.
        @Parameters:
            - e: is an event obj represents the the values given by the user.
        @Return:
            - This is a void function that update the newUser state. */
    const changeHandler = (e) => {
        const user = { ...newUser };
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const signHandler = (e) => {
        e.preventDefault()
        props.sign(newUser)
    }
    

  return (
    <div>
        <h1>SignIn</h1>
        <form>
            <div className="col-sm-10">
                <div className="row">
                    <label className="col-sm-2">Email</label>
                    <input type="email" name="email" id="email" onChange={changeHandler} className="form-control" />
                </div>
            </div>
            <div className="col-sm-10">
                <div className="row">
                    <label className="col-sm-2">Password</label>
                    <input type="password" name="password" id="password" onChange={changeHandler} className="form-control" />
                </div>
            </div>
            <div className="col-sm-10">
            
                <div className="row">
                    <button type="submit" name="signup" id="signup"  onClick={signHandler} className="btn btn-primary"><Link to='/private/home'>submit</Link></button>
                </div>
            
                
            </div>
        </form>
    </div>
  )
}
