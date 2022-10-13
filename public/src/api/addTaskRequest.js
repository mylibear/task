// import { API_URL, token } from "./config"
const API_URL = `http://localhost:8081`

export default (task) => {
    return fetch(`${API_URL}/taskmanager`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            item: task.Task,
            member: task.TeamMember,
            startDate: task.StartDate,
            deadline: task.Deadline,
            difficulty: task.Difficulty,
        })
    })
     .then(response => response.json())
}