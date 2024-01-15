import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

import "./Courese.css";

function Courses() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/admin/courses`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        if (Array.isArray(data.courses)) {

          const coursesWithNewKey = data.courses.map((course) => ({
            ...course,
            imageLink: "https://www.thinknexttraining.com/images/Full-Stack-Development-Course-in-Chandigargh-mob-min.jpg", // Replace "someValue" with the actual value you want to add
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
  },[]);

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
           
            {/* Add any additional details you want to display */}
          </div>
        </div>
      ))}
    </div>


    </>
  );
}

export default Courses;
