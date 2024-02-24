import { productActions } from "../reducer/productReducer";

function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/choiyeeun0129/react-shoppingmall/products?q=${searchQuery}`; // API 엔드포인트 URL 생성
    let res = await fetch(url); // API에 GET 요청을 보내고 응답을 받음
    let data = await res.json(); // 응답 데이터를 JSON 형식으로 변환하여 가져옴
    console.log(data);
    // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    dispatch(productActions.getAllProducts({ data })); //toolkit사용하면 이리만들수있다 ~
  };
}

function getDetailProducts(id) {
  return async (dispatch) => {
    let url = `https://my-json-server.typicode.com/choiyeeun0129/react-shoppingmall/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log("data", data);
    // dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: { data } });
    dispatch(productActions.getSingleProduct({ data }));
  };
}
export const productAction = { getProducts, getDetailProducts };
