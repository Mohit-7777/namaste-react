const heading = React.createElement("h1", { id:"heading" }, "Namaste React"); //This is how we create a HTML element

console.log(heading);   //Heading is just a react element. React elements are  JS Objects

const root = ReactDOM.createRoot(document.getElementById("root"));//cuz we're dealing with browsers, we have ReactDOM(Browser displaying)

root.render(heading); //Putting the heading inside the root.
//Its job is to take the JS Object, create h1 tag and put that up inside the root

//One of the most costliest thing in a Website is when we are displaying something and hiding some other thing
//DOM made this happen and to manipulate DOM is one of the costliest Operation in React
//And whenever there is such task react does it using JavaScript



//React.createElement("h1", { id:"heading" }, "Namaste React");             it basically create a JS Object not an h1 tag
                //Tag Name,     Attribute,    children(innerHTML)   

//props : - The children or attribute that we pass inside the createElement are props



const heading1 = React.createElement("h1", { id: "heading" }, "Namaste React"); //Earlier we used to create Element like this

const jsxheading = <h1 id="heading">Namaste React using JSX</h1> //and now with the help of JSX, it became easier for us
                                                                //to create React element 