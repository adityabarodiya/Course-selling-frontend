import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function Signup() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <div>
        <div style={{ marginTop: 80, marginBottom: 10 }}>
          <Typography variant="h6" component="h5">
            Welcome to Cursera. Sign Up below
          </Typography>
        </div>

        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            id="outlined-basic"
            fullWidth={true}
            label="Email"
            variant="outlined"
          />
          <br /> <br />
          <TextField
            id="outlined-basic"
            fullWidth={true}
            label="Password"
            variant="outlined"
            type="password"
          />
          <br />
          <br />
          <Button variant="contained">Sign Up</Button>
        </Card>

      </div>
    </div>
  );
}

export default Signup;
