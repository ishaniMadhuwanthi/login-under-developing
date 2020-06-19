import React, { Component } from "react";
import { Header,IconButton, MenuItem,Menu} from "react-mdl";

class Aboutme extends Component{

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
            <div class="about" scroll >
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
                
                       <h3>WELCOME!</h3>
                       <p class="intro">Blood Bank Management System<br/>
                       Under the authority of Ministry of Health Department<br/> 
                       </p>

                       <h5 class="hserv">Services we provided</h5>
                       <p class="serv">1. Donors can donate bloods in blood donation centers of your area.</p>
                       <p class="serv">2. Recipients can request for bloods with the permission of any hospital.</p>
                       <p class="serv">3. Blood donation campaigns can be organized in your ares, firms by the participation of responsible persons.(doctors/nurses)</p>
                       <p class="serv">4. You can contact us in any problem using our department contacts.</p>

                       <br/>

                       <h5 class="hserv">Branches we have across the country</h5>
                       <p class="serv"> >> Colombo</p>
                       <p class="serv"> >> Kurunegala</p>
                       <p class="serv"> >> Gampaha</p>
                       <p class="serv"> >> Rathnapura</p>
                       <p class="serv"> >> Mathara</p>
                       <p class="serv"> >> Kandy</p>
                       <p class="serv"> >> Badulla</p>
                       <p class="serv"> >> Nuwaraeliya</p>
                       <p class="serv"> >> Chilaw</p>
                       <p class="serv"> >> Puttlam</p>

            </div>
        )
    }
}
export default Aboutme;