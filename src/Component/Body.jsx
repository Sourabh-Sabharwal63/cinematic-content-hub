import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './Signup'
import Header from './Header'



const Body = () => {
 
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Browse/>
    },
    {
      path:"/signup",
      element:<Signup/>
    }
    ,
   /* {
      path:"/browse",
      element:<Login/>
    }*/
  ])
  return (
    <div>
        <Header />
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body