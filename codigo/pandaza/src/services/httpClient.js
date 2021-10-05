import axios from "axios";

const httpClient = axios.create({
    timeout: 3000,
    headers: {
        "Content-type": "application/json"
    }
});

export default httpClient;