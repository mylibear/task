import React, { useState, useEffect } from 'react'
import './featureInfo.css'
import './projectForm.css'
import moment from 'moment'
import {events} from '../../pages/Calendar/calendar.js'
import BarChart from '../charts/chart.js'
import GanntChart from '../charts/ganntChart.js'
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import readTaskRequest from '../../api/readTaskRequest';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUsersRoute, host } from "../../utils/APIRoutes";

const weekStartDate = moment().startOf('week');
const weekEndDate = moment().endOf('week');
const eventlist = events;
const tasklist = [];
const assignedMember = [];
const deadline = [];

let projectDetail = {
  ProjectName: '',
  Description: '',
  StartDate: '',
  EndDate: '',
  ProjectProgress:''
 };
var today = new Date();

let entries = [];


function getWeeklyTask(){
  for (let element of eventlist) {
   if (element.start >= weekStartDate && element.end <= weekEndDate){
    tasklist.push(<li>{(element.title)}</li>)
    assignedMember.push(<li>{("Clovis")}</li>)
    deadline.push(<li>{(element.end.getDate())}</li>)
   }
 };
}

function getWorkload(tasks){
    for (let element of tasks) {
        const newEntry = {
              userName: element.member,
              difficulty: element.difficulty
        };
    entries = [...entries,newEntry];
}
   


}

function checkDatAndUser(task, user){
  // format => 2022-10-08T00:00:00.000Z  and "2022-10-08T00:00:00.000Z"
  if (task.member === user) {
    if (
    parseInt(task.startDate.substring(5, 7)) >= parseInt(JSON.stringify(weekStartDate._d).substring(6, 8)) && 
    parseInt(task.startDate.substring(8, 10)) >= parseInt(JSON.stringify(weekStartDate._d).substring(9, 11)) && 
    parseInt(task.deadline.substring(5, 7)) <= parseInt(JSON.stringify(weekEndDate._d).substring(6, 8)) && 
    parseInt(task.deadline.substring(8, 10)) <= parseInt(JSON.stringify(weekEndDate._d).substring(9, 11))) {
      return true
    }
  }
   return false
}

function checklogin(user){
  if (!user) {
    return false
  } else {
    return true
  }
}


export default function FeatureInfo() {

  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);

  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);

  }, []);

  const [userName, setUserName] = useState("");
  const [currentPetImage, setCurrentPetImage] = useState(undefined);

  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username      
    );

  }, []);

  const navigate = useNavigate();


  const [currentUser1, setCurrentUser1] = useState(undefined);
  useEffect(async () => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/login");
    } else {
      setCurrentUser1(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )
      );
    }
  }, []);

  useEffect(async () => {
    if (currentUser1) {
      if (currentUser1.isAvatarImageSet) {
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
       
      } else {
        navigate("/setAvatar");
      }
    }
  }, [currentUser1]);

  const currentUser = JSON.parse(localStorage.getItem("app-current-user"));


  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      readTaskRequest().then(setTasks)
    }, [])

getWeeklyTask();
getWorkload(tasks);

const [isOpen, setIsOpen] = useState(false);
const togglePopup = () => {
  setIsOpen(!isOpen);
}

const [projectName, setProjectName] = useState('')
const [description, setDescription] = useState('')
const [startingDate, setStartDate] = useState('')
const [endDate, setEndDate] = useState('')

const handleAddFormSubmit = (event) => {
  event.preventDefault();
  projectDetail = {
    ProjectName: projectName,
    Description: description,
    StartDate: startingDate,
    EndDate: endDate,
    ProjectProgress: ( moment(today).diff(moment(startingDate), 'days') *100
    /moment(endDate).diff(moment(startingDate), 'days') )
  }
  setIsOpen(!isOpen);
  console.log(moment(today).diff(moment(startingDate), 'days') *100
  /moment(startingDate).diff(moment(endDate), 'days'))
};

  return (
    <div className='featured'>
        <div className='featuredItem'>
        <span className="featuredTitle">Welcome {currentUserName}</span>
            <div className='projectContainer'>
                <span className="projectFeature">Project Name: {projectDetail.ProjectName}</span>
                <button className='editProject' onClick={togglePopup}> Edit Project Detail </button>
                {isOpen && 
                <div className="popup-box">
                  <div className="box">
                    <form onSubmit={handleAddFormSubmit}>
                      <button className="closebutton"  onClick={togglePopup}>x</button>
                      <input type='text' name="Project Name" required="required" placeholder='Project Name' 
                      onChange={event => setProjectName(event.target.value)} value = {projectName}/>
                       <input type='textarea' name="Description" required="required"  placeholder='Description' 
                       onChange={event => setDescription(event.target.value)} value = {description}/>
                       <input type= "date"  name="StartDate" required="required" placeholder='Project Start Date' 
                       onChange={event => setStartDate(event.target.value)} value = {startingDate}/>
                       <input type= "date"  name="Deadline" required="required" placeholder='Project Deadline' 
                       onChange={event => setEndDate(event.target.value)} value = {endDate}/>
                       <button type="submit">Edit</button>
                       </form>
                       </div>
                       </div>
                       }

            </div>
            <span className= "mileStone">Project Progress
            <ProgressBar now={projectDetail.ProjectProgress} label={`${projectDetail.ProjectProgress}%`} />
            </span>
        </div>

        <div className='projectOverview'>
        <span className="overview">Overview</span>
        <div>
        <span className=" projectDescrition">Details: {projectDetail.Description}</span>
        </div>
        </div>

        <div className='weeklyTask'>
            <span className="weeklyTitle">Weekly Task{' '}
            {weekStartDate.format('MM/DD/YYYY')} to{' '}  
            {weekEndDate.format('MM/DD/YYYY')}</span>
            <div className='taskDetails'>
               <div className='taskListDetail'>
                <span className="taskListTitle">Task Name</span>
                <ul className='taskList'>
                 {/* first condition check if anyone logged in, otherwise get wrong with reading currentUser which is null value
                 second condition compare username and task in database */}
                {
                  checklogin(currentUser) ?
                    tasks.map((task)=> (
                      checkDatAndUser(task, currentUser.username) ? 
                      <li>{task.item}</li> : undefined
                    )) : undefined
                }    
               </ul>
               </div>
               <div className='assignedMemberDetail'>
                <span className="assignedMemberTitle">Assigned to</span>
                <ul className='assignedMember'>
                {
                  checklogin(currentUser) ?
                    tasks.map((task)=> (
                      checkDatAndUser(task, currentUser.username) ? 
                      <li>{task.member}</li> : undefined
                    )) : undefined
                }    
                </ul>
               </div>
               <div className='startDateDetail'>
                <span className="startDateTitle">Start Date</span>
                <ul className='startDate'>
                {
                  checklogin(currentUser) ?
                    tasks.map((task)=> (
                      checkDatAndUser(task, currentUser.username) ? 
                      <li>{JSON.stringify(task.startDate).substring(1, 11)}</li> : undefined
                    )) : undefined
                } 
                </ul>
               </div>
               <div className='deadlineDetail'>
                <span className="deadlineTitle">Deadline</span>
                <ul className='deadline'>
                {
                  checklogin(currentUser) ?
                    tasks.map((task)=> (
                        checkDatAndUser(task, currentUser.username) ? 
                        <li>{JSON.stringify(task.deadline).substring(1, 11)}</li> : undefined
                      )) : undefined
                } 
                </ul>
               </div>
            </div>
        </div>

        <div>
          Task list: 
          {
            tasks.map((task)=> (
              <ul>
                <li>{task.item}, {task.member}, {JSON.stringify(task.startDate).substring(1, 11)}, {JSON.stringify(task.deadline).substring(1, 11)}, {task.difficulty}
                </li>
              </ul>
          ))        
          }              
        </div>


        <div className='milestone'>MileStone
          <span className='ganntChart'>
            <GanntChart/>
          </span>
          </div>

          <div>
          {
            entries.map((entry)=> (
              <ul>
                <li>
                  {entry.userName}, {entry.difficulty}
                </li>
              </ul>
          ))        
          }  
          </div>

          <div className='workload'>Workload
          <span className='barChart'>
            <BarChart/>
          </span>
          </div>

    </div>
  )
}
