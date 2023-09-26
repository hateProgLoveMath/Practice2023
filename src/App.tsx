import Home from './pages/Home/Home'
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

// import { Routes, Route } from 'react-router-dom'
import './assets/styles/App.sass'
import ProductPage from './pages/ProductPage/ProductPage';

const App = () => {
  const routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/product/:id", element: <ProductPage /> }
  ];

  const appRoutes = useRoutes(routes);

  return (
    <div className="App">
      {appRoutes}
    </div>
  );
}

export default App;
