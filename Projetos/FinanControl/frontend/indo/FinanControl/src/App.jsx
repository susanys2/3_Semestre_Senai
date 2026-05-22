import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/principal' element={<Principal />}></Route>
      </Routes>
    </BrowserRouter>
  );
}