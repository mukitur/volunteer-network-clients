import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Donation from './Pages/Donation/Donation';
import Events from './Pages/Events/Events';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path = "/home">
            <Home></Home>
          </Route>
          <Route path="/events">
              <Events></Events>
          </Route>
          <Route path ="/donation">
              <Donation></Donation>
          </Route>
          <Route path="/blogs">
              <Blogs></Blogs>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
