
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from './Jobs';
import './App.css';
import Categories from './Categories';
import UserHome from './UserHome';
import Navbar from './Navbar';




function App() {
  return (
    <BrowserRouter>
    <Navbar />
   <Routes>
     <Route path="/" element={<UserHome/>} />
     <Route path="/jobs" element={<Jobs />} />
     <Route path="/categories" element={<Categories />} />

   </Routes>
 </BrowserRouter>
  );
}

export default App;
