import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const routesPath = {
  home: '/',
  register: '/register',
  login: '/login',
  contacts: '/contacts',
};

const routes = [
  {
    path: routesPath.home,
    label: 'Home',
    exact: true,
    component: () => <Redirect to={routesPath.login} />,
    restricted: false,
    private: false,
  },
  {
    path: routesPath.register,
    label: 'Register',
    exact: true,
    component: lazy(() => import('./pages/RegisterPage')),
    restricted: true,
    private: false,
  },
  {
    path: routesPath.login,
    label: 'Login',
    exact: true,
    component: lazy(() => import('./pages/LoginPage')),
    restricted: true,
    private: false,
  },
  {
    path: routesPath.contacts,
    label: 'Contacts',
    exact: true,
    component: lazy(() => import('./pages/ContactsPage')),
    restricted: false,
    private: true,
  },
];

export { routes, routesPath };
