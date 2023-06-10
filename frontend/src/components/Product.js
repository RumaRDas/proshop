import React from "react";
import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
function Product({ product }) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <CardImg src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="h3">{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
