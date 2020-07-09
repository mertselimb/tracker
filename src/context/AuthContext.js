import createDataContext from "../context/createDataContext";
import trackerApi from "../api/tracker";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { token: action.payload, errorMessage: "" };

    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({
      type: "signin",
      payload: response.data.token,
    });
    navigate("TrackList");
  } catch (e) {
    dispatch({
      type: "add_error",
      payload: "Somethign went wrong with sign up." + e.response.data,
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({
      type: "signin",
      payload: response.data.token,
    });
    navigate("TrackList");
  } catch (e) {
    dispatch({
      type: "add_error",
      payload: "Somethign went wrong with sign up." + e.response.data,
    });
  }
};

const signout = (dispatch) => () => {
  dispatch({});
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
  },
  {
    token: null,
    isSignedIn: false,
    errorMessage: "",
  }
);
