import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import AppBar from './AppBar';
import Loader from './components/Loader/Loader';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            {routes.map(route => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
