import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './component/home';
import VerifyOTP from './component/verifyOtp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/verifyOtp" element={<VerifyOTP/>} />

      </Routes>
    </div>
  );
}

export default App;
