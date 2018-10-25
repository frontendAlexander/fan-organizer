import Root from './pages/Root';
import Home from './pages/Home';
import NotFound from './pages/404';
import TheTeam from './pages/TheTeam';


export const routes = [
  {
    name: 'Root',
    path: '/',
    isExact: true,
    isPrivate: false,
    component: Root
  },
  {
    name: 'Home',
    path: '/home',
    isExact: true,
    isPrivate: false,
    component: Home
  },
  {
    name: 'TheTeam',
    path: '/the-team',
    isExact: true,
    isPrivate: false,
    component: TheTeam
  },
  {
    name: 'NotFound',
    path: '*',
    component: NotFound
  }
];
