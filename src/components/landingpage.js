import React, { Component } from "react";
import { Header,Tabs, Tab,Grid,Cell, IconButton,Menu,MenuItem } from "react-mdl";

class Landingpage extends Component{

    constructor(props) {
        super(props);
        this.state = {activeTab:0};
        this.goToHome = this.goToHome.bind(this);
    }
  
    goToHome = (e) =>{ 
        e.preventDefault();
        console.log(this.state);
        this.props.history.replace( '/home');
      }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return(
                <div><h1>home</h1></div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div><h1>dashboard</h1></div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div><h1>donor mgt</h1></div>
            )   
        }else if(this.state.activeTab === 3){
            return(
                <div><h1>blood mgt</h1></div>
            )   
        }else if(this.state.activeTab === 4){
            return(
                <div><h1>stock mgt</h1></div>
            )   
        }else if(this.state.activeTab === 5){
            return(
                <div><h1>logout</h1></div>
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
                            <MenuItem>Home</MenuItem>
                            <MenuItem>About us</MenuItem>
                            <MenuItem>Logout</MenuItem>
                            <MenuItem>Settings</MenuItem>
                         </Menu>
                 </div>
                      <h2>Blood Bank Management System</h2>
                </Header>

            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Dashboard</Tab>
                <Tab onClick={this.goToHome}>Home</Tab>
                <Tab>Donar Management</Tab>
                <Tab>Blood Management</Tab>
                <Tab>Stock Management</Tab>
                <Tab>Logout</Tab>
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