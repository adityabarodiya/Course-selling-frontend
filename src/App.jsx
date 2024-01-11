import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Signup from "./components/Signup";
import Appbar from "./components/Appbar";
import Login from "./components/Login";
import AddCourse from "./components/AddCourse";
import Courses from "./components/Courses";
import { useEffect } from "react";

function App() {
  return (
    <>
      

      <Router>
        <Appbar />

        <Routes>
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
