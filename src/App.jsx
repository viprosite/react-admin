import router from '@/router'
import React from 'react';
import { RouterProvider } from 'react-router-dom';


export default function App() {
   return (
      <React.StrictMode>
         <RouterProvider router={router}></RouterProvider>
      </React.StrictMode>
   )

}