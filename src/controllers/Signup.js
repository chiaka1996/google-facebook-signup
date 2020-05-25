// saved on my github repo as google-facebook-signup

import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'

export default class Signup extends Component {
  constructor(props){
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      reply:''
    }
  }

  
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

    onChangePassword(e){
      this.setState({
        password: e.target.value
      })
    }

    onSubmit(e){
      e.preventDefault(); 

      const registrationDetails = {
        email: this.state.email,
        password: this.state.password
      }

      console.log(registrationDetails);

      axios.post('http://localhost:5000/Signup/add', registrationDetails)
      .then(
          (res) => {
            this.setState({
              reply: res.data
            })
            console.log(res.data);
          }
      );
    }
  

  render() {

    const responseGoogle = (response) => {
      console.log(response);
    }

    const responseFacebook = (response) => {
      console.log(response);
    }

    return(
        <div>
          <div>
          <span>{this.state.reply}</span>

      {/* project ID : sincere-office-278314 */}
          <GoogleLogin
    clientId="644327615477-p9jv7hr2j3mouu4ip5gqjqt8al7sr6h3.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
  />

<FacebookLogin
    appId = "265359627993051"
    textButton = "Log in with Facebook"
    fields="name,email,picture" 
    callback={responseFacebook}
     />

            <form >
            
            <div className="form-group">
                <label>Email address</label>
                <input type="text" className="form-control" 
                placeholder = "Enter email" required
                value = {this.state.email} onChange = {this.onChangeEmail}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control"
                 placeholder="Enter password"  required
                 onChange = {this.onChangePassword} value = {this.state.password}
                 />
            </div>
            <button type="button" className="btn btn-primary" onClick = {this.onSubmit} >Submit</button>
            </form>
            </div>
            <p> Already have an account? <span>Login</span></p>
        </div>
    )
    
  }
}
