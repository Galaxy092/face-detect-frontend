import React from 'react';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }
    
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitRegister = () => {
        fetch('https://alluring-everglades-90948.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(user => {
            if(user.id) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }

    render() {
        return (
            <article className="br3-ba-b--black-10-mv4-w-100-mw6-shadow-5 center">
                <main className="pa4-white-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba-b--transparent-ph0-mh0">
                            <legend className="f1-fw6-ph0-mh0">Register</legend>
                            <div className="mt3">
                                <label className="db-fw6-lh-copy-f6" htmlFor="name">Name</label>
                                <input 
                                className="pa2-input-reset-ba-bg-transparent-w-100 hover-bg-black hover-white" 
                                type="text" 
                                name="name"  
                                id="name"
                                onChange={this.onNameChange} />
                            </div>
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
                                <input 
                                className="pa2-input-reset-ba-bg-transparent-w-100 hover-bg-black hover-white" 
                                type="password" 
                                name="password"  
                                id="password"
                                onChange={this.onPasswordChange} />
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={this.onSubmitRegister}
                            className="b-ph3-pv2-input-reset-ba-b--white-bg-transparent-f6-dib-white grow pointer" 
                            type="submit" 
                            value="Register" />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}
    

export default Register;