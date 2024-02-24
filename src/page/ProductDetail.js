import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productDetail);
  let { id } = useParams();

  const getProductDetail = async () => {
    dispatch(productAction.getDetailProducts(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <img src={product?.img} />
        </Col>
        <Col xs={12} md={6}>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice}</div>

          <Dropdown>
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button variant="dark" size="lg" className="mt-3 w-100">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
