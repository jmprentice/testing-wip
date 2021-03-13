import { useState } from 'react';
import { 
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navigation from '../Navigation/index.js';
import About from '../About/index.js';
import Introduction from '../Introduction/index.js';
import Home from '../Home/index.js';
import Bibliography from '../Bibliography/index.js';
import NotFound from '../NotFound/index.js';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  // https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=455A64&secondary.color=BDBDBD&secondary.text.color=000000
  palette: {
    primary: {
      light: "#718792",
      main: "#455a64",
      dark: "#1c313a",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#efefef",
      main: "#bdbdbd",
      dark: "#8d8d8d",
      contrastText: "#000000"
    },
  }
});


function App() {
  const customHistory = createBrowserHistory();

  return (
    <div className="App">
     
     <ThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL} history={customHistory}>
        
          <Navigation
            
          />
          
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
        </ThemeProvider>
    </div>
  );
}

export default App;
