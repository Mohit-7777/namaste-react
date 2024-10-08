import React, { Component } from 'react'
import User from './User'
import UserClass from './UserClass'
import userContext from '../utils/userContext'

class About extends Component{
    constructor(props){
      super(props)
      // console.log("Parent Constructor");
      
    }    

    componentDidMount(){
      // console.log("Parent Component Did Mount"); 
    }

    render(){
        return (
          <div>
            <h1>About</h1>
            {/* {console.log("Parent Render") */}
            
            <h2>THis is about component</h2>

            <div>LoggedIn user  
              <userContext.Consumer >
              {({loggedInUser})=><h1 className="text-xl font-bold ">{loggedInUser}</h1>
              }
              </userContext.Consumer>
            </div>

            {/* <User name={"Mohit Bisht (Functional)"} Location={"Dehradun"} /> */}
            <UserClass name={"Mohit Bisht (class)"} Location={"Dehradun"} />
            {/* <UserClass name={"Joe Goldberg (class)"} Location={"New York"} /> */}
          </div>
        );

    }

}

export default About