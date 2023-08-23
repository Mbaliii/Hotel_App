import './App.css';
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import BookingScreen from './screens/BookingScreen';


function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path='/book/:roomid/:fromdate/:todate' element={<BookingScreen />}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
