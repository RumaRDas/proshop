import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  FormControl,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

function CartScreen({ match }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id: productId } = useParams();
  //getting the quentity from params
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  // console.log(productId);

  const cart = useSelector((sate) => sate.cart);
  const { cartItems } = cart;
  // console.log(cartItems.length);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Yor cart is empty <Link to="/">Go back </Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((p) => {
              return (
                <ListGroup.Item key={p.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={p.image} alt={p.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${p.product}`}>{p.name}</Link>
                    </Col>
                    <Col md={2}>${p.price}</Col>
                    <Col md={2}>
                      <FormControl
                        as="select"
                        value={p.qty}
                        onChange={(e) =>
                          dispatch(addToCart(p.product, Number(e.target.value)))
                        }
                      >
                        {[...Array(p.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </FormControl>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(p.product)}
                      >
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal({cartItems.reduce((acc, d) => acc + d.qty, 0)}) items
              </h2>
              $
              {cartItems
                .reduce((acc, d) => acc + d.qty * d.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default CartScreen;
