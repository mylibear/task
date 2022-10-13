//import { NavigateNextOutlined } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import readTaskRequest from '../../api/readTaskRequest';
import addTaskRequest from '../../api/addTaskRequest';
// import "./taskManager.css";
import NavigationBar from '../../components/navigationBar/navigationBar.jsx';
import SideBar from '../../components/sideBar/sideBar.jsx';
import PetBar from '../../components/petBar/petBar.jsx';
import '../../App.css'

// let taskList = [
//   {
//     id: 1,
//     Task: "task_test1",
//     TeamMember:"John Smith",
//     Deadline:"02/10/2022",
//     Difficulty:"2"
//   },
//   {
//     id: 2,
//     Task: "task_test2",
//     TeamMember:"Joe Smith",
//     Deadline:"01/10/2022",
//     Difficulty:"3"
//   }
// ];

export default function TaskManager ()  {

// const [tasks, setTasks] = useState(taskList);
const [tasks, setTasks] = useState([]);



useEffect(() => {
    readTaskRequest().then(setTasks)
  }, [])

const currentUser = JSON.parse(localStorage.getItem("app-current-user"));


const [addFormData, setAddFormData] = useState({
  Task:'',
  TeamMember:'',
  StartDate:'',
  Deadline:'',
  Difficulty:'',
});

const handleAddFormChange = (event) => {
  event.preventDefault();
  const fieldName = event.target.getAttribute('name')
  const fieldValue = event.target.value;

  const newFormData = {...addFormData};
  newFormData[fieldName] = fieldValue;

  setAddFormData(newFormData);
};

const handleAddFormSubmit = (event) => {
  event.preventDefault();
  
  const newTask = {
    id: nanoid(),
    Task: addFormData.Task,
    TeamMember: addFormData.TeamMember,
    StartDate: addFormData.StartDate,
    Deadline: addFormData.Deadline,
    Difficulty: addFormData.Difficulty
      };
      
      const newTasks = [...tasks, newTask];

      // taskList = [...taskList,newTask];

      addTaskRequest(newTask);
      // setTasks(newTasks);
};

const handleDeleteClick = (taskID) => {
  const newTasks = [...tasks];

  const index = tasks.findIndex((task)=> task.id === taskID);

  newTasks.splice(index, 1);

  /*deleteTaskRequest(taskID)*/

  setTasks(newTasks);
}

return(
  <>
  <NavigationBar /> 
  <div className = 'container'>
  <SideBar />
  <div className='content'>
  <table className='taskManager'>
    <thead>
      <tr>
      <th>Task</th>
      <th>Team Member</th>
      <th>Starting Date</th>
      <th>Deadline</th>
      <th>Difficulty</th>
      <th>Delete</th>
      </tr>
    </thead>
    {/* <tbody>
        {
          tasks.map((task)=> (
            task.member === currentUser.username ? 
            <tr>
              <td>{task.item}</td>
              <td>{task.member}</td>
              <td>{task.deadline}</td>
              <td>{task.difficulty}</td>
            </tr>
            : undefined
          ))
        }     JSON.stringify(weekStartDate._d).substring(6, 8)
    </tbody> */}
    <tbody>
      {tasks.map((task)=> (
      <tr>
        <td>{task.item}</td>
        <td>{task.member}</td>
        <td>{JSON.stringify(task.startDate).substring(1, 11)}</td>
        <td>{JSON.stringify(task.deadline).substring(1, 11)}</td>
        <td>{task.difficulty}</td>
        <td><button type="button" onClick={() => handleDeleteClick(task.id)}>Delete</button></td>
      </tr>
      ))}
    </tbody>
  </table>

  <h2>Add Task</h2>
  <form onSubmit={handleAddFormSubmit}>
    <input type= "text" name="Task" required="required" onChange={handleAddFormChange}/>
    <input type= "text" name="TeamMember" required="required" onChange={handleAddFormChange}/>
    <input type= "date"  name="StartDate" required="required" onChange={handleAddFormChange}/>
    <input type= "date"  name="Deadline" required="required" onChange={handleAddFormChange}/>
    <input type= "number" min="1" max="5" name="Difficulty" required="required" onChange={handleAddFormChange}/>
    <button type="submit">Add Task</button>
  </form>
  </div>
  <PetBar />
    </div>
  </>
);

};

/**
 * export const taskInfo
   {
    Title:
    Member name:
    Date added:
    Deadline:
    Difficulty:
   }

   function creatTaskinfo() {
    assign values into the list taskInfo
   }

   function askForInput(){
    <input type = 'text' placeholder = 'Add Title'>
    <input type = 'text' placeholder = 'MemberName'>
    <input type = 'Date' placeholder = 'Deadline'>
    creatTaskinfo()
   }

   <button>Add task (onclick => askForInput())</button>
   */

// /*
// export default function taskManager() {
//   return (
//     <div>taskManager</div>
//   )
// }
// */
