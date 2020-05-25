import React, { Component } from 'react'
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
    return(
        <div>
          <div>
          <span>{this.state.reply}</span>
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
