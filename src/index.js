import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import "./style/style.scss"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from './components/welcome';
import MainClass from './app/main-class';
import Student from './app/student';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Welcome />
      },
      {
        path: "main-class",
        element: <MainClass />
      },
      {
        path: "main-class/:idStudent",
        element: <Student />
      }
    ]
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

