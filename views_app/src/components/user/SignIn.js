import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react'

export default function SignIn() {
  return (
    <div>
        <h1>SignIn</h1>
        <div className="col-sm-10">
            <div className="row">
                <label class="col-sm-2">Email</label>
                <input type="text" name="email" id="email" className="form-control" />
            </div>
        </div>
        <div className="col-sm-10">
            <div className="row">
                <label className="col-sm-2">Password</label>
                <input type="text" name="Password" id="Password" className="form-control" />
            </div>
        </div>

    </div>
  )
}
