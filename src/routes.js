import Home from './pages/Home';
import StartingPage from './pages/StartingPage';
import NotFound from './pages/404';
import TheTeam from './pages/TheTeam';


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
    name: 'The Team',
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
