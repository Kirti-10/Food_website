import React, { lazy,Suspense } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import Error from "./components/Error";
import Contact from "./components/Contact";
//import RestaurantMenu from "./components/RestaurantMenu";

import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";
import appStore from "./utils/appStore";
import { useState } from "react";
import { Provider } from 'react-redux';
import UserContext from "./utils/UserContext";
//import Instamart from "./components/Instamart";=>now make in terms of lazy loading bc
//import RestaurantMenu from "./components/RestaurantMenu";
const Instamart=lazy(()=>import("./components/Instamart"));
const RestaurantMenu=lazy(()=>import("./components/RestaurantMenu"));


const AppLayout=()=>{

    const [userName, setUserName] = useState();

    // Authentication
    useEffect(() => {
      // Make an API call and send username and password
      const data = {
        name: 'Kartikey Pandey',
      };
      setUserName(data.name);
    }, []);
    return(
        <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
    );
} 

const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/restaurant/:id",
                element:<Suspense fallback={<Shimmer/>}><RestaurantMenu/></Suspense>
            },
            {
                path:"/instamart",
                element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
            }
        ]
    },
    
])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
