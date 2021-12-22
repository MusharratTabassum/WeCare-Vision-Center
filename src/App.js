import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import AllServices from './Pages/AllServices/AllServices';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import Doctors from './Pages/Doctors/Doctors/Doctors';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import DoctorDetail from './Pages/Doctors/DoctorDetail/DoctorDetail';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/services">
              <AllServices></AllServices>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <PrivateRoute path="/servicedetail/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/doctordetail/:doctorId">
              <DoctorDetail></DoctorDetail>
            </Route>
            <Route path="*">
              <NotFound></NotFound>

            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
