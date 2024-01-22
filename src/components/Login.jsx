import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {url} from "./Appbar"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div style={{ marginTop: 80, marginBottom: 10 }}>
          <Typography variant="h6" component="h5">
            Welcome to Cursera. Sign In below
          </Typography>
        </div>

        <Card variant="outlined" style={{ width: 350, padding: 20 }}>
          <TextField
            id="user"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth={true}
            label="Email"
            variant="outlined"
          />
          <br /> <br />
          <TextField
            id="paas"
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
            onClick={async () => {
              try {
                const response = await fetch(
                  `${url}/admin/login`,
                  {
                    method: "POST",

                    headers: {
                      "Content-type": "application/json",
                      username: email,
                      password: password,
                    },
                  }
                );
                const data = await response.json();
                localStorage.setItem("token", data.token);
                window.location = "/";
                alert("Succusfully login");
              } catch (error) {
                // Handle the error gracefully, e.g., display an error message to the user

                console.error("Error during Login:", error);
              }
            }}
          >
            Sign in
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Login;
