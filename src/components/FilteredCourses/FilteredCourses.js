import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Course from "../Course/Course";
import "./FilteredCourse.css";

const FilteredCourses = () => {
  const [filteredCourses, setFilteredCourses] = useState([]);
  // Load some courses to display on the homepage
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setFilteredCourses(data.slice(0, 6)));
  }, []);
  return (
    <div className="filtered-course">
      <h2 className="courses-heading">Courses</h2>
      <Row className="course-container">
        {filteredCourses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </Row>
    </div>
  );
};

export default FilteredCourses;
