
import { 
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../Header/index.js';
import About from '../About/index.js';
import Introduction from '../Introduction/index.js';
import Home from '../Home/index.js';
import Bibliography from '../Bibliography/index.js';
import NotFound from '../NotFound/index.js';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const customHistory = createBrowserHistory();
 

  return (
    <div className="App">
     
        
        <Router basename={process.env.PUBLIC_URL} history={customHistory}>
          <Header />
          
          <Switch>
            <Route exact path="/">
              <Redirect to="/text" />
            </Route>
            <Route exact path="/introduction" component={Introduction} />
            <Route exact path="/text" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/bibliography" component={Bibliography} />
            <Route component={NotFound} status={404} />
          </Switch>
        </Router>

    </div>
  );
}

export default App;
