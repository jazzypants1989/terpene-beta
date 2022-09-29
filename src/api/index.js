import axios from "axios";

const url = "http://localhost:2121";

export const fetchTerps = () => axios.get(url);
