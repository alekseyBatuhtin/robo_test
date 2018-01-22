import Shell from '../components/shell';

const authRoutes = [];

const routes = [
  {
    path: '/',
    component: Shell,
    childRoutes: authRoutes
  }
];

export default routes;
