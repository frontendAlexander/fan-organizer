import Root from './pages/Root';
import Home from './pages/Home';
import NotFound from './pages/404';
import TheTeam from './pages/TheTeam';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import AdminMatches from './components/admin/adminMatches'
import addEditMatch from './components/admin/adminMatches/addEditMatch';
import TheMatches from './pages/TheMatches';
import AdminPlayers from './components/admin/adminPlayers';
import addEditPlayers from './components/admin/adminPlayers/addEditPlayers'

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
    name: 'TheMatches',
    path: '/the-matches',
    isExact: true,
    isPrivate: false,
    component: TheMatches
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
    name: 'AdminMatches',
    path: '/admin-matches',
    isExact: true,
    isPrivate: true,
    component: AdminMatches
  },
  {
    name: 'addEditMatch',
    path: '/admin-matches/edit-match',
    isExact: true,
    isPrivate: true,
    component: addEditMatch
  },
  {
    name: 'addEditMatchID',
    path: '/admin-matches/edit-match/:id',
    isExact: true,
    isPrivate: true,
    component: addEditMatch
  },
  {
    name: 'AdminPlayers',
    path: '/admin-players',
    isExact: true,
    isPrivate: true,
    component: AdminPlayers
  },
  {
    name: 'addEditPlayers',
    path: '/admin-players/add-players',
    isExact: true,
    isPrivate: true,
    component: addEditPlayers
  },
  {
    name: 'addEditPlayersID',
    path: '/admin-players/add-players/:id',
    isExact: true,
    isPrivate: true,
    component: addEditPlayers
  },
  {
    name: 'NotFound',
    path: '*',
    component: NotFound
  }
];
