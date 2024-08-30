import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //This is how we create a State inside Class components
      // count: 0,
      // count2 : 2,

      userInfo: {
        name: "Dummy",
        login: "Default",
      },
    };
    // console.log(this.props.name + "Child Construcotr");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Mohit-7777");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }


  componentDidUpdate(){
    console.log("Component did update");
    
  }

  componentWillUnmount(){
    console.log("Component will unmount");
    
  }

  render() {
    const { name, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>{console.log("Child Render")}</h2>
        {/* <h1>Count = {this.state.count}</h1>{" "} */}
        {/* This is how we use the state variable  */}
        {/* <h1>Count2 = {this.state.count}</h1> */}
        <img src={avatar_url} alt="Haha" />
        <h3>Name : {name}</h3>
        <h4>login Id : {login}</h4>
        <h5>Contact : @Random</h5>
      </div>
    );
  }
}

export default UserClass;
