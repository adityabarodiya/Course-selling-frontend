import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { url } from "./Appbar";

function Course() {
  const { courseId } = useParams();
  const [courses, setCourses] = useState([]);
  const [currentCourse, setCurrentCourse] = useState(null);


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
            imageLink: "https://www.thinknexttraining.com/images/Full-Stack-Development-Course-in-Chandigargh-mob-min.jpg",
          }));
          setCourses(coursesWithNewKey);

          const selectedCourse = coursesWithNewKey.find((course) => course._id === courseId);
          setCurrentCourse(selectedCourse);
        } else {
          console.error("Courses array not found in data:", data);
        }
      } catch (error) {
        console.error("Error during signup:", error);
      }
    };

    fetchData();
  }, [courseId]);

  if (!currentCourse) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <br />
      <br />
      <div style={{ display: "flex", alignItems: "center" }}>
        <CourseCard currentCourse={currentCourse} />
        <UpdateCard currentCourse={currentCourse} setCourses={setCourses} courses={courses} />
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
        <img src={currentCourse.imageLink} style={{ width: 300 }} alt={currentCourse.title} />
      </Card>
    </div>
  );
}

function UpdateCard({ currentCourse, setCourses }) {
  const [title, setTitle] = useState(currentCourse.title);
  const [description, setDescription] = useState(currentCourse.description);
  const [price, setPrice] = useState(currentCourse.price);

  const handleUpdateCourse = async () => {
    try {
      const response = await fetch(`${url}/admin/courses/${currentCourse._id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description, price }),
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (response.ok) {
        const updatedCourses = courses.map((course) =>
          course._id === currentCourse._id ? { ...course, title, description, price } : course
        );
        setCourses(updatedCourses);
        alert("Course Updated");
      } else {
        console.error("Failed to update course:", response.statusText);
      }
    } catch (error) {
      console.error("Error during course update:", error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <Typography variant="h6" component="h5">
            Welcome to Cursera. Update Course below
          </Typography>
        </div>

        <Card variant="outlined" style={{ width: 350, padding: 20 }}>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth={true}
            label="Title"
            variant="outlined"
          />
          <br /> <br />
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth={true}
            label="Description"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth={true}
            label="Price"
            variant="outlined"
          />
          <br />
          <br />
          <Button variant="contained" onClick={handleUpdateCourse}>
            Update Course
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Course;
