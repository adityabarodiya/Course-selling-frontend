import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React, { useEffect } from "react";

function Appbar() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/admin/me", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        if (data) {
          console.log(data);
          setUserEmail(data.username);
        }
      } catch (error) {
        console.error("Error during signup:", error);
        // Handle the error gracefully, e.g., display an error message to the user
      }
    };

    fetchData(); // Call the async function immediately
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (userEmail) {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography variant="h6">Cursera</Typography>
          </div>

          <div>
            {" "}
            <Typography variant="h6">Admin id: {userEmail}</Typography>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ marginRight: 10 }}>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/addcourse");
                }}
              >
                Add Course
              </Button>
            </div>
            <div style={{ marginRight: 10 }}>
              <Button
                variant="contained"
                onClick={() => {
                  localStorage.setItem("token", null);
                  window.location = "/";
                }}
              >
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography variant="h6">Cursera</Typography>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appbar;
