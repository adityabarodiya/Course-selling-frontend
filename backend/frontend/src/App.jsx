import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Signup from "./components/Signup";
import Appbar from "./components/Appbar";
import Login from "./components/Login";
import AddCourse from "./components/AddCourse";
import Courses from "./components/Courses";
import Course from "./components/Course";
import { url } from "./components/Appbar";
import { useEffect } from "react";
import { userState } from "./store/atom/user";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Appbar />

        <Routes>
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/course/:courseId" element={<Course />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

const init = async ()=>{

    const setUser = useRecoilState(userState);

    try {
      const response = await axios.get(`${url}/admin/me}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })

      if(response.data.username){
        setUser({
          isLoading: false,
          userEmail: response.data.username
        });
      }else {
        setUser({
          isLoading: false,
          userEmail: null
        });
      }

      }
    catch(e){

      setUser({
        isLoading: false,
        userEmail: null
      });

    }
}

export default App;
