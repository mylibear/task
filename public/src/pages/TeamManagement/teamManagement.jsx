import { NavigateNextOutlined } from '@mui/icons-material';
import {nanoid} from 'nanoid';
import React from 'react';
import { useState, Fragment } from 'react';
import { MemberTable } from '../../components/teamMemberTable/MemberTable';
import { MemberTableEditable } from '../../components/teamMemberTable/MemberTableEditable';
import './teamManagement.css';
import NavigationBar from '../../components/navigationBar/navigationBar.jsx';
import SideBar from '../../components/sideBar/sideBar.jsx';
import PetBar from '../../components/petBar/petBar.jsx';
import '../../App.css'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { teamRoute } from "../../utils/APIRoutes";

let memberList = [{
  id: 1,
  memberName: "John Smith",
  email: "johnsmith@mail.com",
  dateAdded: "17/02/2022",
  taskAssigned: "task_test1",
  isLeader: "No"
  },
  {
    id: 2,
    memberName: "Joe Smith",
    email: "joesmith@mail.com",
    dateAdded: "18/02/2022",
    taskAssigned: "task_test2",
    isLeader: "No"
  }
];

export default function TeamManagement() {

    const popup = () => {
         var addMemberPage = document.getElementsByClassName("popup")[0];
      if (addMemberPage.style.display === "none") {
        addMemberPage.style.display = "block";
      } else {
        addMemberPage.style.display = "none";
      }
    }

    const [teamMemberTable, setTeamMemberTable] = useState(memberList);

    const [addFormData, setAddFormData] = useState({
      memberName: '',
      email: '',
      dateAdded: '',
      taskAssigned: '',
      isLeader: ''
    })

    const [values, setValues] = useState({ memberName: "", email: "" });

    const [editMemberId, setEditMemberId] = useState(null);

    const handleEditClick = (event, teamMember) => {
      event.preventDefault();
      setEditMemberId(teamMember.id);

      const formValues = {
        memberName: teamMember.memberName,
        email: teamMember.email,
        dateAdded: teamMember.dateAdded,
        taskAssigned: teamMember.taskAssigned,
        isLeader: teamMember.isLeader
      }

      setEditFormData(formValues);
    }

    const [editFormData, setEditFormData] = useState({
      memberName: '',
      email: '',
      dateAdded: '',
      taskAssigned: '',
      isLeader: ''
    })

    const handleAddFormChange = (event) => {
      event.preventDefault();
      setValues({ ...values, [event.target.name]: event.target.value });

      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      const newFormData = {...addFormData};
      newFormData[fieldName] = fieldValue;

      setAddFormData(newFormData);

    }

    const handleEditFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = {...editFormData};
      newFormData[fieldName] = fieldValue;

      setEditFormData(newFormData);
    }

    const handleAddFormSubmit = async(event) => {
      event.preventDefault();

    
      // console.log("in validation",teamRoute)
     
      // const {memberName,email} =values;
      // const{data}= await axios.post(teamRoute, {
      //   memberName,
      //   email,

      // });

      // if (data.status === true) {
      //   localStorage.setItem(
      //     process.env.REACT_APP_LOCALHOST_KEY,
      //     JSON.stringify(data.user)
      //   );
       
      // }


          var date = new Date();
          var y = date.getFullYear();
          var m = date.getMonth()+1;
          var d = date.getDate();

      const newTeamMember = {
        id: nanoid(),
        memberName: addFormData.memberName,
        email: addFormData.email,
        dateAdded: d +"/" + m + "/" + y,
        taskAssigned: "None",
        isLeader: "No"
      }
      
      memberList = [...memberList,newTeamMember];

      const newTeamMemberTable = [...teamMemberTable, newTeamMember];
      setTeamMemberTable(newTeamMemberTable);
    }

    const handleEditFormSubmit = (event) => {
      event.preventDefault();

      const editedTeamMember = {
        id: editMemberId,
        memberName: editFormData.memberName,
        email: editFormData.email,
        dateAdded: editFormData.dateAdded,
        taskAssigned: editFormData.taskAssigned,
        isLeader: editFormData.isLeader
      }

      const newTeamMemberTable = [...teamMemberTable];

      const index = teamMemberTable.findIndex((teamMember) => teamMember.id === editMemberId);

      newTeamMemberTable[index] = editedTeamMember;

      memberList[index] = editedTeamMember;

      console.log(memberList);

      setTeamMemberTable(newTeamMemberTable);
      setEditMemberId(null);
    }

    const handleDeleteClick = (teamMemberID) => {
      const newTeamMemberTable = [...teamMemberTable];

      const index = teamMemberTable.findIndex((teamMember)=> teamMember.id === teamMemberID);

      newTeamMemberTable.splice(index, 1);

      memberList.splice(index, 1);

      console.log(memberList);

      setTeamMemberTable(newTeamMemberTable);
    }


  return (
    <>
    <NavigationBar /> 
    <div className = 'container'>
    <SideBar />
    <div className='content'>
    <div className='featured'>
        <div className='featuredItem'>

            <h1>Team Management</h1>
            
            <div className="teamList">
                <div className='detail'>
                  <form onSubmit={handleEditFormSubmit} className='memberTable'>
                  <table>
                    <thead>
                      <tr>
                        <th>Team Member</th>
                        <th>Email</th>
                        <th>Date Added</th>
                        <th>Task Assigned</th>
                        <th>Leader</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamMemberTable.map((teamMember) => (
                        <Fragment>
                          {editMemberId === teamMember.id ? (
                            <MemberTableEditable editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>
                          ) : (
                            <MemberTable teamMember={teamMember} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>)}

                        </Fragment>
                      ))}
                    </tbody>
                    
                  </table>
                  <button onClick={popup} class="addMember"> + add member</button>
                  </form>
               
                </div>
                
            </div>

            <form class='popup' onSubmit={(event) => handleAddFormSubmit(event)}>
              <button id="closeButton" onClick={popup}>x</button>
              <input class='memberInput' type='text' name="memberName" required="required" placeholder='Member Name' onChange={(e) =>handleAddFormChange(e)}/>
              <br></br><br></br>
              <input class='memberInput' type='email' name="email" required="required"  placeholder='Email' onChange={(e) =>handleAddFormChange(e)}/>
              <br></br><br></br>
              <button type="submit">Add</button>
            </form>
            
        </div>

    </div>
    </div>
<PetBar />
</div>
</>
  )
}
