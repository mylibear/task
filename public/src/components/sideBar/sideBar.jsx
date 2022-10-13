import React from 'react'
import './sideBar.css'
import {LineStyle,Task,GroupWork,CalendarMonth,QuestionAnswer,Store,Grading,Diversity3} from '@mui/icons-material'
import {Notifications, Settings} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import "../../App.css"
import Logout from "../../pages/Auth/Logout";

export default function SideBar() {
  const navigate = useNavigate();
  
    const Home = () => {
      navigate("/");
    };
    const TaskManager = () => {
      navigate("/taskManager");
    };
    const TeamManagement = () => {
      navigate("/teamManagement");
    };
    const Calendar = () => {
      navigate("/calendar");
    };
    const PetStore = () => {
      navigate("/petStore");
    };
    const Grades = () => {
      navigate("/grade");
    };
    const Chat = () => {
      navigate("/chat");
    };
    const Diversity = () => {
      navigate("/diversity");
    };
    const Feedback = () => {
      navigate("/feedback");
    };
  return (
    <div className = 'sidebar'>
      <div className = 'sideWrapper'>
       <div className = 'sideMenu'>
        <h3 className = 'sideTitle'>Dashboard</h3>
        <ul className = 'sideList'>
          <li className = 'sideListItem' onClick={Home}>
            <LineStyle className = 'sidebarIcon'/>Home
          </li>
          <li className = 'sideListItem' onClick={TaskManager}>
            <Task className = 'sidebarIcon'/>Task Manager
          </li>
          <li className = 'sideListItem' onClick={TeamManagement}>
            <GroupWork className = 'sidebarIcon'/>Team Management
          </li>
          <li className = 'sideListItem' onClick={Calendar}>
            <CalendarMonth className = 'sidebarIcon'/>Calendar
          </li>
          <li className = 'sideListItem' onClick={Grades}>
            <Grading className = 'sidebarIcon'/>Grade
          </li>
          <li className = 'sideListItem' onClick={Diversity}>
            <Diversity3 className = 'sidebarIcon'/>Team Conflicts
          </li>
          <li className = 'sideListItem' onClick={Feedback}>
            <QuestionAnswer className = 'sidebarIcon'/>Feedback
          </li>
          <li className = 'sideListItem' onClick={Chat}>
            <QuestionAnswer className = 'sidebarIcon'/>Group Chat
          </li>
          <li className = 'sideListItem' onClick={PetStore}>
            <Store className = 'sidebarIcon'/>Pet Store
          </li>
        </ul>
        <div className='ICON'>
        <div className="iconContainer">
          <Logout/>
            <span className="topIcon"></span>
        </div>
          <div className="iconContainer">
            <Settings/>
          </div>
          </div>
       </div>
      </div>
    </div>
  )
}
