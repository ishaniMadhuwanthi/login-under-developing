import React, { Component } from "react";
import { Header,Tabs, Tab,Grid,Cell, IconButton,Menu,MenuItem, Button} from "react-mdl";

class Landingpage extends Component{

    constructor(props) {
        super(props);
        this.state = {activeTab:0};
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

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
 <div>
<div class="row1">
  <div class="column">
        <div class="card" data-toggle="collapse" data-target="#demo1" >
            <h2>Check donor details</h2>
        </div>
    <div id="demo1" class="collapse">
    <form class="card-form1">
        <div className="dnic">
            <label htmlFor="dnic">Enter NIC:</label>
                <input class ="cinput" placeholder="Enter NIC" type="text" name="dnic" noValidate />    
        </div> 
        <button>Search</button>
    </form>
  </div>
  </div>

  <div class="column">
  <div class="card" data-toggle="collapse" data-target="#demo2" >
      <h2>Check blood stock</h2>  
    </div>
    <div id="demo2" class="collapse">
    <form class="card-form2" >
        <div className="cbgrp">
            <label htmlFor="cbgrp">Select blood type:</label>
            <select id="cbgrp" name="cbgrp" >
                <option value="O-">O-</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="A+">A+</option>
                <option value="B-">B-</option>
                <option value="B+">B+</option>
                <option value="AB-">AB-</option>
                <option value="AB+">AB+</option>
            </select> 
        </div> 
        <button>Search</button>
    </form>
  </div>
  </div>
 
  </div>
 
  <div class="row2">
  <div class="column">
    <div class="card">
      <h2>Card 3</h2>
    </div>
    </div>
  <div class="column">
    <div class="card">
      <h2>Card 4</h2>
    </div>
  </div>
 </div>  
</div>
                
            )
        }else if(this.state.activeTab === 1){
            return(
                <div className="wrapper-add">
                   <form className="form-dadd">
                   <h1>ADD DONOR</h1>
                        <div className="dname">
                            <label htmlFor="dname" >Name:</label>
                            <input class ="rinput" placeholder="Enter donor name" type="text" name="dfirst" noValidate />
                        </div>
                        <div className="dnic">
                        <label htmlFor="dnic">NIC:</label>
                           <input class ="rinput" placeholder="Enter NIC" type="text" name="dnic" noValidate />    
                        </div> 
                        <div className="dsex">
                        <label htmlFor="dsex">Gender:</label>
                            <input type="radio" name="gender" value="male"/> Male
                            <input type="radio" name="gender" value="female"/> Female
                        </div>  
                        <div className="dage">
                        <label htmlFor="dage">Age:</label>
                           <input class ="rinput" placeholder="Enter age" type="text" name="dage" noValidate />    
                        </div>  
                        <div className="ddist">
                        <label htmlFor="ddist">District:</label>
                            <select id="dist" name="dist">
                                <option value="kurunegla">Kurunegala</option>
                                <option value="colombo">Colombo</option>
                                <option value="galle">Galle</option>
                                <option value="Rathnapura">Rathnapura</option>
                            </select>
                        </div>
                        <div className="bday">
                            <label htmlFor="bday">Birthday:</label>
                            <input type="date" id="bday" name="bday" />
                        </div> 
                        <div>
                        <label htmlFor="dbgrp">Blood group:</label>
                            <select id="dbgrp" name="dbgrp">
                                <option value="O-">O-</option>
                                <option value="O+">O+</option>
                                <option value="A-">A-</option>
                                <option value="A+">A+</option>
                                <option value="B-">B-</option>
                                <option value="B+">B+</option>
                                <option value="AB-">AB-</option>
                                <option value="AB+">AB+</option>
                            </select>
                        </div>
                        <div className="drday">
                            <label htmlFor="drday">Registration date:</label>
                            <input type="date" id="drday" name="drday" />
                        </div> 
                        <div className="dstaff">
                        <label htmlFor="dstaff">Staff ID:</label>
                           <input class ="rinput" placeholder="Enter staff ID" type="text" name="dstaff" noValidate />    
                        </div> 
                        <div className="donoradd">
                        <Button type="submit" raised colored>ADD</Button>
                        </div>
                   </form> 
                </div>   
            )
        }else if(this.state.activeTab === 2){
            return(
                <div className="wrapper-add">
                   <form className="form-dadd">
                   <h1>BLOOD DESTRIBUTION</h1>
                        <div className="dname">
                            <label htmlFor="dname" >Hospital Name:</label>
                            <input class ="rinput" placeholder="Enter hospital name" type="text" name="dfirst" noValidate />
                        </div> 
                        <div className="ddist">
                        <label htmlFor="ddist">District:</label>
                            <select id="dist" name="dist">
                                <option value="kurunegla">Kurunegala</option>
                                <option value="colombo">Colombo</option>
                                <option value="galle">Galle</option>
                                <option value="Rathnapura">Rathnapura</option>
                            </select>
                        </div> 
                        <div className="bday">
                            <label htmlFor="bday">Request Date:</label>
                            <input type="date" id="bday" name="bday" />
                        </div> 
                        <div>
                        <label htmlFor="dbgrp">Blood group:</label>
                            <select id="dbgrp" name="dbgrp">
                                <option value="O-">O-</option>
                                <option value="O+">O+</option>
                                <option value="A-">A-</option>
                                <option value="A+">A+</option>
                                <option value="B-">B-</option>
                                <option value="B+">B+</option>
                                <option value="AB-">AB-</option>
                                <option value="AB+">AB+</option>
                            </select>
                        </div>
                        <div className="rqua">
                        <label htmlFor="rqua">Requested Blood Bag Amount:</label>
                           <input class ="rinput" placeholder="Number of bags" type="text" name="rqua" noValidate />    
                        </div>
                        <div className="drday">
                            <label htmlFor="drday">Sending date:</label>
                            <input type="date" id="drday" name="drday" />
                        </div>
                        <div className="dstaff">
                        <label htmlFor="dstaff">Staff ID:</label>
                           <input class ="rinput" placeholder="Enter staff ID" type="text" name="dstaff" noValidate />    
                        </div> 
                        <div className="donoradd">
                        <Button type="submit" raised colored> ORDER SEND</Button>
                        </div>
                   </form> 
                </div>
            )   
        }else if(this.state.activeTab === 3){
            return(
                <div class = "row1">
                <div class="column1">
                <div className="wrapper-add">
                   <form className="form-dadd">
                   <h1>ADD To STOCK</h1>
                   <div>
                        <label htmlFor="dbgrp">Blood group:</label>
                            <select id="dbgrp" name="dbgrp">
                                <option value="O-">O-</option>
                                <option value="O+">O+</option>
                                <option value="A-">A-</option>
                                <option value="A+">A+</option>
                                <option value="B-">B-</option>
                                <option value="B+">B+</option>
                                <option value="AB-">AB-</option>
                                <option value="AB+">AB+</option>
                            </select>
                        </div>
                        <div className="rqua">
                        <label htmlFor="rqua">Blood Quantity:</label>
                           <input class ="rinput" placeholder="Blood Quantity" type="text" name="rqua" noValidate />    
                        </div> 
                        <div className="dage">
                        <label htmlFor="dage">Sample number:</label>
                           <input class ="rinput" placeholder="Enter sample no" type="text" name="dage" noValidate />    
                        </div>  
                        <div className="bday">
                            <label htmlFor="bday">Sampled date:</label>
                            <input type="date" id="bday" name="bday" />
                        </div> 
                        <div className="dname">
                            <label htmlFor="dname" >Reg. Staff ID:</label>
                            <input class ="rinput" placeholder="Enter staff ID" type="text" name="dfirst" noValidate />
                        </div>       
                        <div className="donoradd">
                        <Button type="submit" raised colored>ADD</Button>
                        </div>
                   </form> 
                </div>
                </div>
                <div class="column1">
                <div className="wrapper-add">
                   <form className="form-dadd">
                   <h1>REMOVE From STOCK</h1>
                   <div>
                        <label htmlFor="dbgrp">Blood group:</label>
                            <select id="dbgrp" name="dbgrp">
                                <option value="O-">O-</option>
                                <option value="O+">O+</option>
                                <option value="A-">A-</option>
                                <option value="A+">A+</option>
                                <option value="B-">B-</option>
                                <option value="B+">B+</option>
                                <option value="AB-">AB-</option>
                                <option value="AB+">AB+</option>
                            </select>
                        </div>
                        <div className="dage">
                        <label htmlFor="dage">Sample number:</label>
                           <input class ="rinput" placeholder="Enter sample no" type="text" name="dage" noValidate />    
                        </div>  
                        <div className="bday">
                            <label htmlFor="bday">Sampled date:</label>
                            <input type="date" id="bday" name="bday" />
                        </div> 
                        <div className="bday">
                            <label htmlFor="bday">Remove date:</label>
                            <input type="date" id="bday" name="bday" />
                        </div> 
                        <div className="dname">
                            <label htmlFor="dname" >Reg. Staff ID:</label>
                            <input class ="rinput" placeholder="Enter staff ID" type="text" name="dfirst" noValidate />
                        </div>       
                        <div className="donoradd">
                        <Button type="submit" raised colored>REMOVE</Button>
                        </div>
                   </form> 
                </div>
                </div>
            </div>
                
                
            )   
        }
    }

    render(){
        return(
            <div className="category-tabs">
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

            <Tabs class="tabline" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Dashboard</Tab>
                <Tab>Donar Management</Tab>
                <Tab>Recipients Management</Tab>
                <Tab>Stock Management</Tab>
            </Tabs> 
            <section className="projects-grid">
                <Grid className="projects-grid">
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>       
            </section>        
        </div> 
        )
    }
}
export default Landingpage;