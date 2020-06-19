import React, { Component } from "react";
import { Grid,Cell,Button } from "react-mdl";

class Home extends Component{

    constructor(props){
        super(props);
        this.goToReg = this.goToReg.bind(this);
        this.goToRegother = this.goToRegother.bind(this);
    }

    goToReg = (e) =>{ 
        e.preventDefault();
        console.log(this.state);
        this.props.history.replace( '/register');
    }

    goToRegother = (e) =>{ 
        e.preventDefault();
        console.log(this.state);
        this.props.history.replace( '/otherreg');
    }
      
    render(){    
          return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className= "landing-grid">
                    <Cell col={12}>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9TXgH2A5wFJJJu7f9nmqPjuQSySHMPBTepU4StSWkEdrv0BUY&usqp=CAU"
                          alt="avatar"
                          className="avatar-img"
                        />

                       <div className="banner-text">
                           <h1>Blood Bank Management System</h1>
                           <hr/>
                          <p>Donate your blood. Save others life.</p> 
                       </div> 
                       <div class="rowh">
                           <div class="columnh">
                       <div><Button onClick={this.goToReg} raised colored> Admin</Button></div>
                       </div>
                       <div class="columnh">
                       <div><Button onClick={this.goToRegother} raised colored>Other</Button></div>
                       </div>
                       </div>
                    </Cell>
                </Grid>    
            </div>
        )
    }
}
export default Home;