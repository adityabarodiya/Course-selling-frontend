import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Signup from "./components/Signup";
import Appbar from "./components/Appbar";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Appbar></Appbar>

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
