import React from 'react'

export default function SignUp() {
    const [newUser, setNewUser] = useState({}); 

    return (
        <div>
            <h1>signUp</h1>
            <form/>
                <div className="col-sm-10">
                    <div className="row">
                        <label className="col-sm-2">First Name</label>
                        <input type="text" name="first_name" id="first_name" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <label className="col-sm-2">Last Name</label>
                        <input type="text" name="last_name" id="last_name" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-10">
                    <div class="row">
                        <label className="col-sm-2">Region</label>
                        <input type="text" name="region" id="region" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <label className="col-sm-2">Email</label>
                        <input type="text" name="email" id="email" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <label className="col-sm-2">Phone Number (<em>Optional</em>)</label>
                        <input type="text" name="phone" id="phone" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <label className="col-sm-2">Password</label>
                        <input type="text" name="password" id="password" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <button type="submit" name="signup" id="signup"  className="btn btn-primary"></button>
                    </div>
                </div>
            <form/>
        </div>
    )
}
