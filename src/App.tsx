import React, {useEffect, useRef, useState} from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Component1 from "./Components/component1/Component1";
import Component1Mobile from "./Components/component1/Mobile/Component1Mobile";
import Component2 from "./Components/component2/Component2";
import Component3 from "./Components/component3/Component3";
import Component4 from "./Components/component4/Component4";
import Component5 from "./Components/component5/Component5";
import Component6 from "./Components/component6/Component6";
import Component7 from "./Components/component7/Component7";
import "./styles/global.scss"


function App() {
  const [state, setState] = useState('');

  const Layout = () => {

      const MOBILE_WIDTH = 574;
      const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDTH)
      const prevWidth = useRef(window.innerWidth)

      useEffect(() => {
          const handleResize = () => {
              const currWidth = window.innerWidth
              if (currWidth <= MOBILE_WIDTH && prevWidth.current > MOBILE_WIDTH){
                  setIsMobile(true)
              } else if (currWidth > MOBILE_WIDTH && prevWidth.current <= MOBILE_WIDTH) {
                  setIsMobile(false)
              }
              prevWidth.current = currWidth
          }
          window.addEventListener("resize", handleResize)
          return () => window.removeEventListener("resize", handleResize)
      }, [])


      if(!isMobile){
          return(
              <div className="main">
                  <Component1/>
                  <Component2/>
                  <Component3/>
                  <Component4/>
                  <Component5/>
                  {/*<Component6/>*/}
                  {/*<Component7/>*/}
              </div>
          )
      }
    else{
          return(
              <div className="main">
                  <Component1Mobile/>
                  <Component2/>
                  <Component3/>
                  <Component4/>
                  <Component5/>
                  {/*<Component6/>*/}
                  {/*<Component7/>*/}
              </div>
          )
      }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <div>Все работает</div>,
        },
      ]
    }
  ]);


  return (
      <RouterProvider router={router}/>
  );
}

export default App;
