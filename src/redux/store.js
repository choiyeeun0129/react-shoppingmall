import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productReducer";
import authenciateReducer from "./reducer/authenciateReducer";

let store = configureStore({
  reducer: {
    //index.js다 필요없어짐
    auth: authenciateReducer,
    product: productReducer,
  },
});
//combinereducer를 써줬어야햇고
//thunk
//applyMiddleware
//composeWithDevTools까지 써줘야했었는데
//이제는 configureStore를 써준다 !

export default store;
