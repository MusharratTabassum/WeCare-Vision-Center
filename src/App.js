import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Service from './Pages/Home/Service/Service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/service">
            <Service></Service>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
