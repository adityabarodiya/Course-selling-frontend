import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function Login() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div style={{ marginTop: 80, marginBottom: 10 }}>
          <Typography variant="h6" component="h5">
            Welcome to Cursera. Sign In below
          </Typography>
        </div>

        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            id="user"
            fullWidth={true}
            label="Email"
            variant="outlined"
          />
          <br /> <br />
          <TextField
            id="paas"
            fullWidth={true}
            label="Password"
            variant="outlined"
            type="password"
          />
          <br />
          <br />
          <Button
            variant="contained"
            onClick={() => {
              fetch("http://localhost:3000/admin/login", {
                method: "POST",
                body: JSON.stringify({
                  username,
                  password,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              });
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
