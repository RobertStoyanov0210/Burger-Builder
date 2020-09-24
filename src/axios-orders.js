import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-f13e9.firebaseio.com/",
});

export default instance;
