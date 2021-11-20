import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
          <Route>
            <Services></Services>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
