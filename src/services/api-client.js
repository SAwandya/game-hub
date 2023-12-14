import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "30620ce0ddd246809c331b398bb983cf",
  },
});
