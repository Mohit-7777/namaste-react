import React, {lazy, Suspense, useEffect, useState} from "react";
// import ReactDOM from "react-dom";     used earlier
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";
import userContext from "./utils/userContext";
import { Provider } from "react-redux"
import appStore from "./utils/appStore";
import Cart from "./components/Cart";




const Grocery = lazy(() => import("./components/Grocery"));  //Comes from react Library       import function is used
//the Grocery page will not render because it will take some time to fetch the page of groceries from the code (since it has not been in 
// bundled with the js file which contain the code for all the components). And due that time react will suspend the render


const About = lazy(() => import("./components/About"));




/**
 *  Header
 *  - Logo
 *  - Nav Items
 *  Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delivery time
 *  Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
*/

const AppLayout = () => {

const [userName , setUserName] = useState("")

  useEffect(()=>{
    const data = {
      name : "Mohit Bisht"
    }
    setUserName(data.name)
  },[])

  return (
    <Provider store={appStore}>
    <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="">
        <Header />
        <Outlet />
      </div>
    </userContext.Provider>
    </Provider>
  );

};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            {/* Used to render the data even after Lazy Loading*/}
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
