import React from 'react';
import './Signin.css';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }
  
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }
  
    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://alluring-everglades-90948.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(res => res.json())
        .then(user => {
            if(user.id){ // does the user exist? Did we receive a user with a property of id?
              this.props.loadUser(user);
              this.props.onRouteChange('home');
            }
        })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3-zba-b--black-10-mv4-w-100-mw6-shadow-5 center">
                <main className="pa4-white-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba-b--transparent-ph0-mh0">
                            <legend className="f1-fw6-ph0-mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db-fw6-lh-copy-f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2-input-reset-ba-bg-transparent-w-100 hover-bg-black hover-white" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                    onChange={this.onEmailChange} />
                            </div>
                            <div className="mv3">
                                <label className="db-fw6-lh-copy-f6" htmlFor="password">Password</label>
                                <input className="pa2-input-reset-ba-bg-transparent-w-100 hover-bg-black hover-white" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={this.onPasswordChange} />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                            onClick={this.onSubmitSignIn}
                            className="b-ph3-pv2-input-reset-ba-b--white-bg-transparent-f6-dib-white grow pointer" 
                            type="submit" 
                            value="Sign in" />
                        </div>
                        <div className="lh-copy-mt3">
                            <p onClick={() => onRouteChange('register')} className="f6 link dim white db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}
    

export default Signin;