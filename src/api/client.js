import axios from "axios";

const client = axios.create({ baseURL: "https://backend.getlinked.ai/" });

export default client;
