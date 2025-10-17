import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Item.css"; // 👈 agrega esto

const Item = ({ prod }) => {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={prod.img} alt={prod.name}/>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>${prod.price},00</Card.Text>
        <Link className="btn btn-dark" to={`/item/${prod.id}`}>
          Ver Más
        </Link>
      </Card.Body>
    </Card>
  );
};
export default Item;
