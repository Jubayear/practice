import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Course.css";

const Course = (props) => {
  const { name, price, author, thumbnail, link } = props.course;
  const url = `/course/${link}`;
  return (
    <Card style={{ width: "22rem" }} className="course">
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: {price}&#2547;</Card.Text>
        <Link to={url}>
          <Button variant="primary">Enroll</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Course;
