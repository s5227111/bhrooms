import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Search from './Pages/Search';
import NotFound from './Pages/NotFound';
import ContactUs from './Pages/ContactUs';
import Moving from './Pages/Moving';
import Room from './Pages/Room';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/search" exact component={Search} />
        <Route path="/moving" exact component={Moving} />
        <Route path="/room/:room_id" exact component={Room} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
