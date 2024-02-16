import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log(searchQuery);
    let url = `https://my-json-server.typicode.com/choiyeeun0129/react-shoppingmall/products?q=${searchQuery}`; // API 엔드포인트 URL 생성
    let res = await fetch(url); // API에 GET 요청을 보내고 응답을 받음
    let data = await res.json(); // 응답 데이터를 JSON 형식으로 변환하여 가져옴
    setProductList(data);
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
