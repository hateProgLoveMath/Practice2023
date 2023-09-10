import React from 'react';
import Home from './pages/Home/Home'
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

// import { Routes, Route } from 'react-router-dom'
import './assets/styles/App.sass'


function App() {
  const routes: RouteObject[] = [
    { path: "/", element: <Navigate to="Home" /> },
    // { path: "*", element: <NotFoundComponent /> }
  ];

  const appRoutes = useRoutes(routes);

  return (
    <div className="App">
      <Home />

      {appRoutes}
    </div>
  );
}

export default App;
