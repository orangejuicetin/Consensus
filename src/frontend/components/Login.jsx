import React from 'react'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props;
    }

    loginRequest() {

    }
    render() {
        return (
            <form action="/login" method="post">
                <div>
                    <label for="Username ">username</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label for="Password ">password</label>
                    <input type="password" name="password" />
                </div>
                <div class="=container">
                    <button class="btn btn-secondary">
                        Log In
                     </button>
                    <button class="btn btn-secondary">
                        Sign Up!
                     </button>
                </div>
            </form>
        )
    }
}