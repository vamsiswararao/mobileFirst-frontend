import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/login/index';
import Signup from './pages/signup/index';
import ForgotPassword  from './pages/ForgetPassword/index';
import ResetPassword from './pages/ResetPassword/index';
import { Provider } from 'react-redux';
import store from "./store"
import Home from './pages/Home';
import ProtectedRoute from './pages/protectedRoute/index';
import {ToastContainer} from "react-toastify"
import "bootstrap/dist/css/bootstrap.css"
import Navbar from './pages/navBar';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
      <Navbar/>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/" element={<ProtectedRoute element={Home} />}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </Provider>
  );
}

export default App;
