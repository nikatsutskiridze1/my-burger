import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-f50c0.firebaseio.com/"
});

export default instance;
