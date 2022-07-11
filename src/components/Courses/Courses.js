import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <Container>
      <Row className="courses">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
