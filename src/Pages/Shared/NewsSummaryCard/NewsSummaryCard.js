import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  const { author, title, total_views, _id, details, image_url } = news;
  return (
    <div>
      <Card className="mb-5">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250) + ". . ."}{" "}
                <Link to={`/news/${_id}`}>Read More</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
