import React, {Component, PropTypes} from 'react'

export default class AuthPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usernameLogin: '',
            passwordLogin: '',
            name: '',
            usernameRegister: '',
            passwordRegister: '',
            confirmPassword: '',
            email: '',
            image_url: '',
            match: true
        }
    }
    handleUsernameLoginChange(e) {
        this.setState({usernameLogin: e.target.value})
    }
    handlePasswordLoginChange(e) {
        this.setState({passwordLogin: e.target.value})
    }
    handleNameChange(e) {
        this.setState({name: e.target.value})
    }
    handleUsernameRegisterChange(e) {
        this.setState({usernameRegister: e.target.value})
    }
    handlePasswordRegisterChange(e) {
        this.setState({passwordRegister: e.target.value})
    }
    handleConfirmPasswordChange(e) {
        this.setState({confirmPassword: e.target.value})
    }
    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }
    handleImageUrlChange(e) {
        this.setState({image_url: e.target.value})
    }
    handleMatch(e) {
        e.preventDefault()
        this.setState({match: true})
    }
    handleSubmitLogin(e) {
        e.preventDefault()
        let usernameLogin = this.state.usernameLogin.trim()
        let passwordLogin = this.state.passwordLogin.trim()
        if (!usernameLogin || !passwordLogin) {
            console.log('fail');
            return;
        } else {
            this.props.onLogin(usernameLogin, passwordLogin)
            this.setState({usernameLogin: '', passwordLogin: ''})
        }
    }
    handleSubmitRegister(e) {
        e.preventDefault()
        let name = this.state.name.trim()
        let usernameRegister = this.state.usernameRegister.trim()
        let passwordRegister = this.state.passwordRegister.trim()
        let confirmPassword = this.state.confirmPassword.trim()
        let email = this.state.email.trim()
        let image_url = this.state.image_url.trim()

        if (!name || !usernameRegister || !passwordRegister || !confirmPassword || !email || !image_url) {
            console.log('fail');
            return;
        } else {
            if (passwordRegister != confirmPassword) {
                this.setState({match: false})
            } else {
                this.props.onRegister(name, usernameRegister, passwordRegister, email, image_url)
                this.setState({
                    name: '',
                    usernameRegister: '',
                    passwordRegister: '',
                    confirmPassword: '',
                    email: '',
                    image_url: ''
                })
            }
        }
    }

    render() {
        if (!this.state.match) {
            return (
                <div className="alert alert-danger">
                    <button  onClick={this.handleMatch.bind(this)} className="btn btn-xs btn-danger pull-right">Try again</button>
                    <strong>Confirm Password not match</strong>
                    Please type the password carefully
                </div>
            )
        } else {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <h2>Interactive Timeline with REDUX</h2>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                <div className="form-body">
                                    <ul className="nav nav-tabs final-login">
                                        <li className="active">
                                            <a data-toggle="tab" href="#sectionA">Login</a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#sectionB">Register</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="sectionA" className="tab-pane fade in active">
                                            <div className="innter-form">
                                                <form className="sa-innate-form" onSubmit={this.handleSubmitLogin.bind(this)}>
                                                    <label>Username</label>
                                                    <input type="text" name="usernameLogin" value={this.state.usernameLogin} onChange={this.handleUsernameLoginChange.bind(this)}/>
                                                    <label>Password</label>
                                                    <input type="password" name="passwordLogin" value={this.state.passwordLogin} onChange={this.handlePasswordLoginChange.bind(this)}/>
                                                    <button type="submit">Login</button>
                                                </form>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div id="sectionB" className="tab-pane fade">
                                            <div className="innter-form">
                                                <form className="sa-innate-form" onSubmit={this.handleSubmitRegister.bind(this)}>
                                                    <label>Name</label>
                                                    <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
                                                    <label>Username</label>
                                                    <input type="text" name="usernameRegister" value={this.state.usernameRegister} onChange={this.handleUsernameRegisterChange.bind(this)}/>
                                                    <label>Email Address</label>
                                                    <input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
                                                    <label>Password</label>
                                                    <input type="password" name="passwordRegister" value={this.state.passwordRegister} onChange={this.handlePasswordRegisterChange.bind(this)}/>
                                                    <label>Confirm Password</label>
                                                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange.bind(this)}/>
                                                    <label>Avatar url</label>
                                                    <input type="text" name="image_url" value={this.state.image_url} onChange={this.handleImageUrlChange.bind(this)}/>
                                                    <button type="submit">Register Now !</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
