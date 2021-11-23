import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Services from './Pages/Home/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
