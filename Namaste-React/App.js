import React from "react";
// import ReactDOM from "react-dom";     used earlier
import ReactDOM from "react-dom/client"
/*
*
*
*
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>     //sibling
        <h2>I'm h2 tag</h2>     //sibling
    </div>
<div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>
*
*
*
*/

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

//TO create children we can do React.createElement in the children part of props
//to create siblings we can make an array and pass multiple React Objects to it

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); //This will REPLACE all the elements that are present inside the div element of html file.
//React will only work inside the div id="root", If there is something outside of the div element it won't be replaced by render().

//React.createElement(Object) => HTML(Browsers Understands)
//While we are rendering it to DOM it converts itself to html
