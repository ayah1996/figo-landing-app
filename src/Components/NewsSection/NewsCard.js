import React from "react";
import { Card } from "react-bootstrap";
import "./News.scss";

const NewsCard = ({ img, title, description }) => {
  return (
    <Card className="news-card">
      <Card.Img variant="top" src={img} />
      <Card.Body className="px-0">
        <Card.Title className="card-title my-4">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Link href="#" className="card-link">
          Read More
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
