import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {url} from "./Appbar"
import Typography from "@mui/material/Typography";

function Courese() {
  let { courseId } = useParams();
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/admin/courses`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        if (Array.isArray(data.courses)) {
          const coursesWithNewKey = data.courses.map((course) => ({
            ...course,
            imageLink:
              "https://www.thinknexttraining.com/images/Full-Stack-Development-Course-in-Chandigargh-mob-min.jpg",
          }));
          setCourse(coursesWithNewKey);
        } else {
          console.error("Courses array not found in data:", data);
        }
      } catch (error) {
        console.error("Error during signup:", error);
      }
    };

    fetchData();
  }, []);

  let currentCourse = null;

  for (let i = 0; i < courses.length; i++) {
    if (courses[i]._id === courseId) {
      currentCourse = courses[i];
    }
  }

  if (!currentCourse) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <br />
      <br />
      <div style={{ display: "flex", alignItems: "center" }}>
        <CourseCard currentCourse={currentCourse} />
        <UpdateCard
          currentCourse={currentCourse}
          courses={courses}
          setCourse={setCourse}
        ></UpdateCard>
      </div>
    </>
  );
}

function CourseCard({ currentCourse }) {
  return (
    <div id="courseTable" style={{ display: "flex" }}>
      <Card style={{ margin: 10, width: 300, minHeight: 200 }}>
        <Typography textAlign={"center"} variant="h5">
          {currentCourse.title}
        </Typography>
        <Typography textAlign={"center"} variant="subtitle1">
          {currentCourse.description}
        </Typography>
        <img
          src={currentCourse.imageLink}
          style={{ width: 300 }}
          alt={currentCourse.title}
        />
      </Card>
    </div>
  );
}

function UpdateCard({ currentCourse, setCourse, courses }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div style={{ display: "flex" }}>
      <div>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <Typography variant="h6" component="h5">
            Welcome to Cursera. Update Course below
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

              fetch(
                `${url}/admin/courses/` + currentCourse._id,
                {
                  method: "PUT",
                  body: JSON.stringify({
                    title: title,
                    description: description,
                    price: price,
                  }),
                  headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              )
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  let updatedCourses = [];
                  for (let i = 0; i < courses.length; ++i) {
                    if (courses[i]._id == currentCourse._id) {
                      updatedCourses.push({
                        _id: currentCourse._id,
                        title: title,
                        description: description,
                        price: price,
                        imageLink: courses[i].imageLink,
                      });
                    } else updatedCourses.push(courses[i]);
                  }
                  setCourse(updatedCourses);
                  alert("Course Updated");
                });
            }}
          >
            Update Course
          </Button>
          {/* {JSON.stringify{currentCourse}} */}
        </Card>
      </div>
    </div>
  );
}
export default Courese;
