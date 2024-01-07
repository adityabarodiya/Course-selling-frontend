import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Signup from "./components/Signup";
 import Appbar from "./components/Appbar"
 import Login from "./components/Login"

function App() {
  return (
    <>
      <div>
        <Appbar></Appbar>
      </div>
      <div>
        <Signup></Signup>
      </div>








      {/* <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<CreateCourse />} />
          <Route path="/courses" element={<ShowCourses />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
