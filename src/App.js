import { BrowserRouter,Switch,Route } from 'react-router-dom';
import ScriptTag from 'react-script-tag';
import './App.css';
import AddTours from './Components/AddTours/AddTours';
import AuthProvider from './Components/Context/AuthProvider';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DestinationDetails from './Pages/Destinations/DestinationDetails';
import Destinations from './Pages/Destinations/Destinations';
import Booking from './Pages/Home/Booking/Booking';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ManageBooking from './Pages/ManageBooking/ManageBooking';
import ManageMyBooking from './Pages/ManageMyBooking/ManageMyBooking';
import UpdateBooking from './Pages/UpdateBooking/UpdateBooking';
function App() {
  return (
    <div className="App " >
      <AuthProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/manage">
            <ManageBooking></ManageBooking>
          </PrivateRoute>
          <PrivateRoute path="/addtours">
            <AddTours></AddTours>
          </PrivateRoute>
          <Route path="/destinations">
            <Destinations></Destinations>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/destination/:id">
            <DestinationDetails></DestinationDetails>
          </Route>
          <PrivateRoute path="/bookings/update/:id">
            <UpdateBooking></UpdateBooking>
          </PrivateRoute>
          <PrivateRoute path="/managemybooking">
            <ManageMyBooking></ManageMyBooking>
          </PrivateRoute>
          <Route exact path="*">
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
