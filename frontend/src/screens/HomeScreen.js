import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../product";
function HomeScreen() {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          //   console.log(product);
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              <h3>{product.name}</h3>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default HomeScreen;
