import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import Home from "./routes/home";
import Good from "./routes/good";
import Classic from "./routes/classic";
import Art from "./routes/art";
import Background from "./routes/bg";
import Jizhiwengao from "./routes/jizhiwengao";
import Zzwg from "./routes/zzwg";
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import './index.css'
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import EditContact, {
  action as editAction,
} from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";

const base = import.meta.env.BASE_URL
const router = createBrowserRouter([
  {
    path: base,
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: base + 'good/',
        element: <Good />,
        errorElement: <ErrorPage />,
      },
      {
        path: base + 'art/',
        element: <Art />,
        errorElement: <ErrorPage />,
      },
      {
        path: base + 'classic/',
        element: <Classic />,
        errorElement: <ErrorPage />,
      },
      {
        path: base + 'jizhiwengao/',
        element: <Jizhiwengao />,
        errorElement: <ErrorPage />,
      },
      {
        path: base + 'zzwg/',
        element: <Zzwg />,
        errorElement: <Zzwg />,
      },
      {
        path: base + 'background/',
        element: <Background />,
        errorElement: <ErrorPage />,
      },
    ]
  },
  {
    path: base + 'react/',
    element: <Root />,
    errorElement: <ErrorPage />, 
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ]
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
