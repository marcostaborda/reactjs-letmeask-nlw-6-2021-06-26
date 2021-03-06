import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';
import { AdminRoom } from './pages/AdminRoom';

import { Home } from './pages/Home';
import { NewRow } from './pages/NewRow';
import { Room } from './pages/Room';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRow} />
          <Route path="/rooms/:roomId" component={Room} />

          <Route path="/admin/rooms/:roomId" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>

  );
}

export default App;
