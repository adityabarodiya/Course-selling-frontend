import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Appbar() {
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
                window.location = "/signup";
              }}
            >
              Sign Up
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => {
                window.location = "/login";
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
