import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { url } from "./Appbar";
import "./Courese.css";

function Courses() {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);

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

  const handleEditClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <>
      <div className="card-grid-container">
        {course.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.imageLink} alt={course.title} className="course-image" />
            <div className="course-details">
              <Typography>{course.title}</Typography>
              <Typography>{course.description}</Typography>
              <Typography>Price: ${course.price}</Typography>

              <div className="edit-btn">
                 {/* Add an "Edit" button that calls handleEditClick on click */}

              <Button id="edit-btn" variant="outlined" onClick={()=> handleEditClick(course._id)}>Edit</Button>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Courses;
