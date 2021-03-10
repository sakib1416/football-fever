
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Leagues from './components/Leagues/Leagues';
import NotFound from './components/NotFound/NotFound';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';


function App() {
  return (
    <Router>
      <Switch>
        
        
        <Route exact path = '/'>
          <Leagues/>
        </Route>
        <Route path = '/leagues/:idLeague'>
          <LeagueDetails></LeagueDetails>
        </Route>
        <Route path = '/leagues'>
          <Leagues/>
        </Route>
        <Route path = '*'>
          <NotFound/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
