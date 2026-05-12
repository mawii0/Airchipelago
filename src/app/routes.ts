import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Book } from './pages/Book';
import { Destinations } from './pages/Destinations';
import { Fleet } from './pages/Fleet';
import { IslandMiles } from './pages/IslandMiles';
import { CheckIn } from './pages/CheckIn';
import { TravelRequirements } from './pages/TravelRequirements';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'book', Component: Book },
      { path: 'destinations', Component: Destinations },
      { path: 'fleet', Component: Fleet },
      { path: 'island-miles', Component: IslandMiles },
      { path: 'check-in', Component: CheckIn },
      { path: 'travel-requirements', Component: TravelRequirements },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
