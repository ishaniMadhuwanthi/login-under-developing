import React, { Component } from "react";
import { Header, IconButton,Menu,MenuItem} from "react-mdl";

class Otherlanding extends Component{

    constructor(props) {
        super(props);
        this.goToHome = this.goToHome.bind(this);
        this.goToAbout= this.goToAbout.bind(this);
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

    render(){
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
            </div>
        )
    }
}
export default Otherlanding;