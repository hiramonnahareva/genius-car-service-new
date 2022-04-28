import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import AddService from './AddService/AddService';
import ManageServices from './ManageServices/ManageServices';

function App() {
  return (
    <div className="App">
       <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/addservice' element={<AddService></AddService>}></Route>
        <Route path='/manageservices' element={<ManageServices></ManageServices>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
