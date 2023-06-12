import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
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
} from "react-bootstrap";

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
  // console.log(cartItems);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return <div>Cart</div>;
}

export default CartScreen;
