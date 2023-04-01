
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from './Jobs';
import './App.css';
import Categories from './Categories';
import UserHome from './UserHome';
import Navbar from './Navbar';
import Login from "./Login";
import PostJob from "./PostJob";
import MyJobs from "./MyJobs";
import Register from "./Register";
import ResetPassword from "./ResetPaswword";




function App() {
  return (
    <BrowserRouter>
    <Navbar />
   <Routes>
     <Route exact path="/" element={<UserHome/>} />
     <Route path="/jobs" element={<Jobs />} />
     <Route path="/categories" element={<Categories />} />
     <Route path="/login" element={<Login/>} />
     <Route path="/register" element={<Register/>} />
     <Route path="/postjob" element={<PostJob/>} />
     <Route path="/myjobs" element={<MyJobs/>} />
     <Route path="/resetpassword" element={<ResetPassword/>} />
   </Routes>
 </BrowserRouter>
  );
}

export default App;
