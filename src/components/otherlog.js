import React, { Component } from "react";
import { Header, IconButton,Menu,MenuItem} from "react-mdl";

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
  

class Otherlogin extends Component{

    constructor(props) {
        super(props);
        this.goTolanding = this.goTolanding.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.goToAbout= this.goToAbout.bind(this);
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
    goToHome = (e) =>{ 
      e.preventDefault();
      console.log(this.state);
      this.props.history.replace( '/home');
  }
  goToAbout = (e) => {
      e.preventDefault();
      console.log(this.state);
      this.props.history.replace( '/aboutme');
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
          <div>
            <Header className="header-color" scroll>
                 <div style={{position: 'relative'}}>
                    <IconButton name="more_vert" id="demo-menu-lower-left"/>
                         <Menu target="demo-menu-lower-left">
                            <MenuItem onClick={this.goToHome}>Home</MenuItem>
                            <MenuItem onClick={this.goToAbout}>About us</MenuItem>
                            <MenuItem>Logout</MenuItem>
                            <MenuItem>Settings</MenuItem>
                         </Menu>
                 </div>
                      <h2>Blood Bank Management System</h2>
                </Header> 
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>SIGN IN</h1>
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
            </div>
        )
    }
}
export default Otherlogin;