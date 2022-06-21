import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from './Components/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Components/Login/Register/Register';
import Navigation from './Components/Home/Navigation/Navigation';
import Login from './Components/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import SingleFood from './Components/SingleFood/SingleFood';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App"> 
    <AuthProvider>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/food/:Id' element={<PrivateRoute><SingleFood /></PrivateRoute> } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
       
    </div>
  );
}

export default App;
