import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <div style={{ marginTop: 80, marginBottom: 10 }}>
          <Typography variant="h6" component="h5">
            Welcome to Cursera. Add Course below
          </Typography>
        </div>

        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            fullWidth={true}
            label="Title"
            variant="outlined"
          />
          <br /> <br />
          <TextField
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            fullWidth={true}
            label="Description"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            fullWidth={true}
            label="Price"
            variant="outlined"
          />
          <br />
          <br />
          <Button
            variant="contained"
            onClick={() => {
              // let username = document.getElementById("user").value;
              // let password = document.getElementById("paas").value;

              fetch("http://localhost:3000/admin/courses", {
                method: "POST",
                body: JSON.stringify({
                  title: title,
                  description: description,
                  price: price,
                }),
                headers: {
                  "Content-type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  localStorage.setItem("token", data.token);
                });
            }}
          >
            Add Course
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default AddCourse;
