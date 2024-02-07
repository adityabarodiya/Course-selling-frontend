import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React, { useEffect } from "react";
import "./Appbar.css"; // Import the CSS file

import { navigateToAddCourse, logout, navigateToHome, navigateToSignUp, navigateToLogin, fetchData, navigateToMyCourses } from "./helpers/onClickFunctions";

let url = "http://localhost:3000";
url = "https://coursra.cyclic.app";

function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {

    fetchData(setUserEmail); 

  }, []); // Empty dependency array means this effect runs once after the initial render


  if (userEmail) {
    return (
      <>
        <div className="container">
          <div className="title">
            <Typography variant="h6" onClick= {()=> navigateToHome(navigate)}>Coursra</Typography>
          </div>

          <div className="title">
            <Typography variant="h6">Admin id: {userEmail}</Typography>
          </div>

          <div className="buttonContainer">
            <div className="button">
              <Button variant="contained" onClick={() => navigateToAddCourse(navigate)}>
                Add Course
              </Button>
            </div>
            <div className="button">
              <Button variant="contained" onClick={() => navigateToMyCourses(navigate)}>
                My Courses
              </Button>
            </div>
            <div className="button">
              <Button variant="contained" onClick={logout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="title">
          <Typography variant="h6">Cursera</Typography>
        </div>

        <div className="buttonContainer">
          <div className="button">
            <Button variant="contained" onClick={() => navigateToSignUp(navigate)}>
              Sign Up
            </Button>
          </div>
          <div className="button">
            <Button variant="contained" onClick={() => navigateToLogin(navigate)}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export { url };
export default Appbar;