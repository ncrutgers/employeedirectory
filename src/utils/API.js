import axios from "axios";

export default {
  sortByCategory: function(category) {
    return axios.get("/api/employees/" + category);
  }
};