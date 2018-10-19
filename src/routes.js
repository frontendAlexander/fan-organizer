import Home from './pages/Home';
import StartingPage from './pages/StartingPage';
import NotFound from './pages/404';


export const routes = [
  {
    name: 'Home',
    path: '/',
    isExact: true,
    isPrivate: false,
    component: Home
  },
  {
    name: 'Starting Page',
    path: '/starting-page',
    isExact: true,
    isPrivate: false,
    component: StartingPage
  },
  {
    name: 'NotFound',
    path: '*',
    component: NotFound
  }
];
