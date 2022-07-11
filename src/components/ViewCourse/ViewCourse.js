import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewCourse = () => {
  const { courseId } = useParams();
  const url = `https://www.youtube.com/embed/${courseId}`;
  // load course
  return (
    <div>
      <iframe
        width="100%"
        height="569vh"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ViewCourse;
