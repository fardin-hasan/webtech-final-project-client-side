import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Register from './pages/Register/Register';
import Purchase from './pages/Purchase/Purchase';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Navigation from './Shared/Navigation/Navigation';
import AllProducts from './pages/AllProducts/AllProducts';
import Footer from './Shared/Footer/Footer';
import Review from './pages/Home/Review/Review';
import CustomerReview from './pages/CustomerReview/CustomerReview';
import Dashboard from './pages/Dashboard/Dashboard';
import Pay from './pages/Pay/Pay';
import MyOrders from './pages/MyOrders/MyOrders';
import ManageBookingEdit from './pages/ManageBookingEdit/ManageBookingEdit';



function App() {
  return (

    <AuthProvider>

      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/allProducts'>
            <AllProducts></AllProducts>
          </Route>
          <PrivateRoute path='/purchase/:id'>
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path='/manageBookingEdit/:id'>
            <ManageBookingEdit></ManageBookingEdit>
          </PrivateRoute>
          <PrivateRoute path='/review'>
            <CustomerReview></CustomerReview>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path='/pay'>
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute path='/myOrders'>
            <MyOrders></MyOrders>
          </PrivateRoute>
        </Switch>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
