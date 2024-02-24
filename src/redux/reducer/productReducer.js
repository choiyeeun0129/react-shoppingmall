import { createSlice } from "@reduxjs/toolkit"; //툴킷 사용해서 최신으로 만들어보기

let initialState = {
  productList: [],
  productDetail: [],
};

// function productReducer(state = initailState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     case "GET_PRODUCT_DETAIL_SUCCESS":
//       return { ...state, productDetail: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;

const productSlice = createSlice({
  //reducer를 만들어주기위함
  name: "product",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload.data;
    },
    getSingleProduct(state, action) {
      state.productDetail = action.payload.data;
    },
  },
});

console.log("pppp", productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;
