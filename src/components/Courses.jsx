import { useEffect, useState } from "react";


function Courses(){

    const [course, setCourse] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetch(`http://localhost:3000/admin/courses`, {
                method: "GET",
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              });
              const data = await response.json();
              if (data) {
                console.log(data)
              }
            } catch (error) {
              console.error("Error during signup:", error);
            }
          };

          fetchData();
    })
    
    return (
        <>
        
        course
        
        
        
        
        
        
        
        
        
        </>
    )
}


export default Courses;
