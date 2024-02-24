import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log(searchQuery);
    dispatch(productAction.getProducts(searchQuery));
  };
  useEffect(() => {
    getProducts();
  }, [query]); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정
  return (
    //컨테이너는 가운데로 정렬
    //menu로 넘겨줌 props
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
