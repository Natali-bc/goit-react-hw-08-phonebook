import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import AppBar from './AppBar';
import Loader from './components/Loader/Loader';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map(route => {
              return route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute
                  key={route.label}
                  {...route}
                  restricted={route.restricted}
                />
              );
            })}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
