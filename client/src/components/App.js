
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from './Jobs';
import './App.css';
import Categories from './Categories';
import UserHome from './UserHome';
import Navbar from './Navbar';
import Login from "./Login";
import Signup from "./Signup";




function App() {
  return (
    <BrowserRouter>
    <Navbar />
   <Routes>
     <Route exact path="/" element={<UserHome/>} />
     <Route path="/jobs" element={<Jobs />} />
     <Route path="/categories" element={<Categories />} />
     <Route path="/login" element={<Login/>} />
     <Route path="/signup" element={<Signup/>} />

   </Routes>
 </BrowserRouter>
  );
}

export default App;
