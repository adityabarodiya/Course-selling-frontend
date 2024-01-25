// clickHandlers.js
import { url } from "../Appbar";

const navigateToAddCourse = (navigate) => {
    navigate("/addcourse");
  };
  
  const logout = () => {
    localStorage.setItem("token", null);
    window.location = "/";
  };
  
  const navigateToSignUp = (navigate) => {
    navigate("/signup");
  };
  
  const navigateToLogin = (navigate) => {
    navigate("/login");
  };

  const navigateToMyCourses = (navigate) => {
    navigate("/courses");
  };

  const fetchData = async (setUserEmail) => {
    try {
      const response = await fetch(`${url}/admin/me`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      if (data) {
        console.log(data);
        setUserEmail(data.username);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      // Handle the error gracefully, e.g., display an error message to the user
    }
  };
  
  export { navigateToAddCourse, logout, navigateToSignUp, navigateToLogin, fetchData, navigateToMyCourses};
  