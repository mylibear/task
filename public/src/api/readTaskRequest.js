// import { API_URL } from "./config"
const API_URL = `http://localhost:8081`

export default () => {
    return fetch(`${API_URL}/taskmanager`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        }
    })
     .then(response => response.json())
}