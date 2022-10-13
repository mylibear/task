import {nanoid} from 'nanoid';
import React from 'react';
import { useState, Fragment } from 'react';
import { ConflictSolved } from '../../components/teamConflictTable/ConflictSolved';
import { ConflictNotSolved } from '../../components/teamConflictTable/ConflictNotSolved';
import './teamConflict.css';
import NavigationBar from '../../components/navigationBar/navigationBar.jsx';
import SideBar from '../../components/sideBar/sideBar.jsx';
import PetBar from '../../components/petBar/petBar.jsx';

export let conflictList = [{
    id: 1,
    conflictName: "conflict1",
    dateRaised: "17/02/2022",
    membersInvolved: "John Smith",
    tutorFeedback: "Maybe you should try these methods....",
  },
  {
    id: 2,
    conflictName: "conflict2",
    dateRaised: "18/02/2022",
    membersInvolved: "Joe Smith",
    tutorFeedback: "Waiting for Tutor's feedback",
  }
];

export default function TeamConflict() {

    
    const popup = () => {
        var conflictForm = document.getElementsByClassName("conflictForm")[0];
          conflictForm.style.display = "block";


        var raiseButton = document.getElementsByClassName("raiseConflict")[0];
          raiseButton.style.display = "none";

    }

    const close = () => {
      var conflictForm = document.getElementsByClassName("conflictForm")[0];
          conflictForm.style.display = "none";
          var raiseButton = document.getElementsByClassName("raiseConflict")[0];
          raiseButton.style.display = "block";
    }
    

    const [conflicts, setConflicts] = useState(conflictList);

    const [addFormData, setAddFormData] = useState({
      conflictName: '',
      dateRaised: '',
      membersInvolved: '',
      tutorFeedback: '',
    })

    /*
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
    */

    const handleAddFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      const newFormData = {...addFormData};
      newFormData[fieldName] = fieldValue;

      setAddFormData(newFormData);

    }
    
    /*
    const handleEditFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = {...editFormData};
      newFormData[fieldName] = fieldValue;

      setEditFormData(newFormData);
    }
    */

    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth()+1;
    var d = date.getDate();

    const handleAddFormSubmit = (event) => {
      event.preventDefault();


      const newConflict = {
        id: nanoid(),
        conflictName: addFormData.conflictName,
        dateRaised: d +"/" + m + "/" + y,
        membersInvolved: addFormData.membersInvolved,
        tutorFeedback: "Waiting for Tutor's feedback",
      }
      
      conflictList = [...conflictList,newConflict];
      
      
      const newTeamConflicts = [...conflicts, newConflict];

      setConflicts(newTeamConflicts);
    }
    
    /*
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
    */


  return (
    <>
    <NavigationBar /> 
    <div className = 'container'>
    <SideBar />
    <div className='content'>  
    <div className='featured'>
        <div className='featuredItem'>

            <h1>Your team's summary of raised conflicts</h1>
            
            <div class="teamList">
                <div class='detail'>
                  <table>
                    <thead>
                      <tr>
                        <th>Conflict Name</th>
                        <th>Date Raised</th>
                        <th>Members Involved</th>
                        <th>Tutor feedback</th>
                      </tr>
                    </thead>
                    <tbody>
                      {conflicts.map((conflict) => (
                        <Fragment>
                          { "Waiting for Tutor's feedback" === conflict.tutorFeedback ? (
                            <ConflictNotSolved conflict={conflict}/>
                          ) : (
                            <ConflictSolved conflict={conflict}/>
                          ) }
                        </Fragment>
                      ))}
                    </tbody>

                  </table>
                  <br/>
                  <button class="raiseConflict" onClick={popup}> Raise New Conflict</button>
                  <div class="conflictForm">
                    <form onSubmit={handleAddFormSubmit}>
                      <table>
                        <thead>
                          <tr>
                            <th>Conflict Name</th>
                            <th>Date Raised</th>
                            <th>Members Involved</th>
                            <th>Tutor feedback</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="text" name="conflictName" required="required" onChange={handleAddFormChange} /></td>
                            <td><input type="text" name="dateRaised" value={d +"/" + m + "/" + y} readOnly/></td>
                            <td><input type="text" name="membersInvolved" required="required" onChange={handleAddFormChange} /></td>
                            <td><input type="text" name="tutorFeedback" value={"Only tutor can edit"} readOnly /></td>
                          </tr>
                        </tbody>
                      </table>
                      <button type="submit" class="addMember" onClick={close}>Comfirm Raise</button>
                    </form>
                    <br/>
                    <button class="raiseConflict" onClick={close}>Cancel</button>
                  </div>
                </div>
                
            </div>

            
            
        </div>
        </div>

    </div>
    <PetBar />
    </div>
    </>
  )
}
