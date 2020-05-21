import React, { Component } from "react";
import { Header} from "react-mdl";


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
  

class Login extends Component{

    constructor(props) {
        super(props);
        this.goTolanding = this.goTolanding.bind(this);
        this.state = {
          firstName: null,
          lastName: null,
          email: null,
          password: null,
          formErrors: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          }
        };
      }

      goTolanding = (e) =>{ 
        e.preventDefault();
        console.log(this.state);
        this.props.history.replace( '/landingpage');
    }

    handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          console.log(`
            --SUBMITTING--
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Password: ${this.state.password}
          `);
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "firstName":
            formErrors.firstName =
              value.length < 3 ? "Minimum 3 characaters required" : "";
            break;
          case "lastName":
            formErrors.lastName =
              value.length < 3 ? "Minimum 3 characaters required" : "";
            break;
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "Invalid email address";
            break;
          case "password":
            formErrors.password =
              value.length < 6 ? "Minimum 6 characaters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
    
    render(){

        const { formErrors } = this.state;

        return(    
            <div className="wrapper">
                    <h2>Blood Bank Management System</h2>
                     {/* <div>
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png"
                          alt="avatar-login"
                          className="avatar-login"
                        />
                    </div> */}
                <div className="form-wrapper">
                    <h1>LOGIN</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                                <input
                                className={formErrors.email.length > 0 ? "error" : null}
                                placeholder="Email"
                                type="email"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                                />
                                {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                                 )}
                        </div>
                        <div className="password">
                             <label htmlFor="password">Password</label>
                                <input
                                className={formErrors.password.length > 0 ? "error" : null}
                                placeholder="Password"
                                type="password"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                                />
                                {formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                                )}
                        </div>
                        <div className="createAccount">
                            <button type="submit" onClick={this.goTolanding}>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;