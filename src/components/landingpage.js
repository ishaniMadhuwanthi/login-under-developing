import React, { Component } from "react";
import { Grid,Cell } from "react-mdl";

class Landingpage extends Component{
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
                          <p>Donate your blood. Save others life</p> 
                       </div> 
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landingpage;