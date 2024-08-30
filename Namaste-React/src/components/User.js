import { useEffect, useState } from "react";

const User = ({name}) =>{
  const [count] = useState(0);
  const [count2] = useState(2);


  useEffect(()=>{
    //Api Calls
  },[])
    return (
      <div className="user-card">
        <h1>Count = {count}</h1>  {/*BTS react is create a big object to store all the variables */}
        <h1>Count2 = {count2}</h1>
        <h3>Name :{name}</h3>
        <h4>Location : Dehradun</h4>
        <h5>Contact : @mohit</h5>
      </div>
    );
}

export default User;