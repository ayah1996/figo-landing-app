import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import "./Browse.scss";

const MenuItem = ({ img, title, newPrice, oldPrice }) => {
  return (
    <Card className="menu-card text-center">
      <div className="img-wrap">
        <Card.Img variant="top" className="card-img" src={img}></Card.Img>
        <div className="img-overlay d-flex justify-content-center align-items-center">
          <div className="card-icon me-3">
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
          <div className="card-icon">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>

      <Card.Body>
        <Card.Title className="title">{title}</Card.Title>
        <div className="d-flex justify-content-center my-2">
          <FontAwesomeIcon
            className="mx-1"
            icon={faStar}
            color="#FFB243"
            fontSize={13}
          />
          <FontAwesomeIcon
            className="mx-1"
            icon={faStar}
            color="#FFB243"
            fontSize={13}
          />
          <FontAwesomeIcon
            className="mx-1"
            icon={faStar}
            color="#FFB243"
            fontSize={13}
          />
          <FontAwesomeIcon
            className="mx-1"
            icon={faStar}
            color="#FFB243"
            fontSize={13}
          />
          <FontAwesomeIcon
            className="mx-1"
            icon={faStar}
            color="#FFB243"
            fontSize={13}
          />
        </div>
        <Card.Text className="d-flex justify-content-center text-center">
          <span className="new-price">{newPrice}$</span>
          <span className="old-price ms-2 align-self-center">{oldPrice}$</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MenuItem;
