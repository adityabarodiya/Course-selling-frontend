import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { url } from "./Appbar";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        {email}
        <div style={{ marginTop: 80, marginBottom: 10 }}>
          <Typography variant="h6" component="h5">
            Welcome to Cursera. Sign Up below
          </Typography>
        </div>

        <Card variant="outlined" style={{ width: 350, padding: 20 }}>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth={true}
            label="Email"
            variant="outlined"
          />
          <br /> <br />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth={true}
            label="Password"
            variant="outlined"
            type="password"
          />
          <br />
          <br />
          <Button
            variant="contained"
            //   onClick={() => {
            //     // let username = document.getElementById("user").value;
            //     // let password = document.getElementById("paas").value;

            //     fetch("http://localhost:3000/admin/signup", {
            //       method: "POST",
            //       body: JSON.stringify({
            //         username: email,
            //         password: password,
            //       }),
            //       headers: {
            //         "Content-type": "application/json",
            //       },
            //     })
            //       .then((res) => {
            //         res.json();
            //       })
            //       .then((data) => {
            //         localStorage.setItem("token", data.token);
            //       });
            //   }
            // }

            onClick={async () => {
              try {
                const response = await fetch(`${url}/admin/signup`, {
                  method: "POST",
                  body: JSON.stringify({
                    username: email,
                    password: password,
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                });
                const data = await response.json();
                localStorage.setItem("token", data.token);
                window.location = "/";
              } catch (error) {
                console.error("Error during signup:", error);
                // Handle the error gracefully, e.g., display an error message to the user
              }
            }}
          >
            Sign Up
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
