import Root from './pages/Root';
import Home from './pages/Home';
import NotFound from './pages/404';
import TheTeam from './pages/TheTeam';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';


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
    component: Home,
    restricted: false
  },
  {
    name: 'TheTeam',
    path: '/the-team',
    isExact: true,
    isPrivate: true,
    component: TheTeam,
    restricted: false
  },
  {
    name: 'SignIn',
    path: '/sign-in',
    isExact: true,
    isPrivate: false,
    component: SignIn,
    restricted: true
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    isExact: true,
    isPrivate: true,
    component: Dashboard
  },
  {
    name: 'NotFound',
    path: '*',
    component: NotFound
  }
];
