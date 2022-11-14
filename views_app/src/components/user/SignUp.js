import React from 'react'
import { useState } from 'react';


export default function SignUp(props) {
    const [newUser, setNewUser] = useState({});
    
    const changeHandler = (e) => {
        const user = { ...newUser };
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const regsiterHandler = () => {
        props.register(newUser)
    }

    return (
        <div>
            <h1>signUp</h1>
            <form/>
                <div className="col-sm-10">
                    <div className="row">
                        <label className="col-sm-2">First Name</label>
                        <input type="text" name="first_name" id="first_name" onChange={changeHandler} className="form-control" />
                    </div>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <label className="col-sm-2">Last Name</label>
                        <input type="text" name="last_name" id="last_name" onChange={changeHandler} className="form-control" />
                    </div>
                </div>
                <div className="col-sm-10">
                    <div class="row">
                        <label className="col-sm-2">Region</label>
                        <input type="text" name="region" id="region" onChange={changeHandler} className="form-control" />
                    </div>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <label className="col-sm-2">Email</label>
                        <input type="email" name="email" id="email" onChange={changeHandler} className="form-control" />
                    </div>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <label className="col-sm-2">Phone Number (<em>Optional</em>)</label>
                        <input type="text" name="phone" id="phone" onChange={changeHandler} className="form-control" />
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
                        <button type="submit" name="signup" id="signup"  onClick={regsiterHandler} className="btn btn-primary">submit</button>
                    </div>
                </div>
            <form/>
        </div>
    )
}
