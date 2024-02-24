function login(id, password) {
  return async (dispatch, getState) => {
    // eslint-disable-next-line no-undef
    console.log("sdfsdgdfgdfgdfg");
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

export const authenciateAction = { login };
