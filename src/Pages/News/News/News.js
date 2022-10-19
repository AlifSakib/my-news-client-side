import React from "react";
import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const News = () => {
  const newsDetails = useLoaderData();
  const { author, title, total_views, _id, details, image_url } = newsDetails;
  return (
    <div>
      <Card className="mb-5">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>{details}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default News;
