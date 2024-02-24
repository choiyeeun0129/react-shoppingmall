let initailState = {
  id: "",
  password: "",
  authenticate: false,
};

function authenciateReducer(state = initailState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      console.log("login reducer");
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    case "LOGOUT":
      return {
        ...state,
        authenticate: false,
      };
    default:
      return { ...state };
  }
}

export default authenciateReducer;
