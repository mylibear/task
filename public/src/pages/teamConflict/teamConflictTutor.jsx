import {nanoid} from 'nanoid';
import React from 'react';
import { useState, Fragment } from 'react';
import './teamConflict.css';
import { conflictList } from './teamConflict';
import { ConflictTutorEditable } from '../../components/teamConflictTable/ConflictTutorEditable';
import { ConflictTutor } from '../../components/teamConflictTable/ConflictTutor';
import { ConflictTutorNotSolved } from '../../components/teamConflictTable/ConflictTutorNotSolved';

export default function teamConflictTutor() {

    /*
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
    */
    

    const [conflicts, setConflicts] = useState(conflictList);
    
    /*
    const [addFormData, setAddFormData] = useState({
      conflictName: '',
      dateRaised: '',
      membersInvolved: '',
      tutorFeedback: '',
    })
    */

    
    const [editConflictId, setEditConflictId] = useState(null);

    const handleEditClick = (event, conflict) => {
      event.preventDefault();
      setEditConflictId(conflict.id);

      const formValues = {
        conflictName: conflict.conflictName,
        dateRaised: conflict.dateRaised,
        membersInvolved: conflict.membersInvolved,
        tutorFeedback: conflict.tutorFeedback,
      }

      setEditFormData(formValues);
    }

    const [editFormData, setEditFormData] = useState({
      conflictName: '',
      dateRaised: '',
      membersInvolved: '',
      tutorFeedback: ''
    }) 
    
    /*
    const handleAddFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;

      const newFormData = {...addFormData};
      newFormData[fieldName] = fieldValue;

      setAddFormData(newFormData);

    }
    */
    
    
    const handleEditFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = {...editFormData};
      newFormData[fieldName] = fieldValue;

      setEditFormData(newFormData);
    }
    
    /*
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
    */
    
    const handleEditFormSubmit = (event) => {
      event.preventDefault();

      const editedConflict = {
        id: editConflictId,
        conflictName: editFormData.conflictName,
        dateRaised: editFormData.dateRaised,
        membersInvolved: editFormData.membersInvolved,
        tutorFeedback: editFormData.tutorFeedback
      }

      const newConflicts = [...conflicts];

      const index = conflicts.findIndex((conflict) => conflict.id === editConflictId);

      newConflicts[index] = editedConflict;

      conflictList[index] = editedConflict;

      console.log(conflictList);

      setConflicts(newConflicts);
      setEditConflictId(null);
    }
    
    /*
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
    <div className='featured'>
        <div className='featuredItem'>

            <h1>This team's summary of raised conflicts</h1>
            
            <div class="teamList">
                <div class='detail'>
                <form onSubmit={handleEditFormSubmit} class='memberTable'>
                  <table>
                    <thead>
                      <tr>
                        <th>Conflict Name</th>
                        <th>Date Raised</th>
                        <th>Members Involved</th>
                        <th>Tutor feedback</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {conflicts.map((conflict) => (
                        <Fragment>
                          { editConflictId === conflict.id ? (
                            <ConflictTutorEditable conflict={conflict} editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>
                          ) : (
                            "Waiting for Tutor's feedback" === conflict.tutorFeedback ? (<ConflictTutorNotSolved conflict={conflict} handleEditClick={handleEditClick}/>) :
                            (<ConflictTutor conflict={conflict} handleEditClick={handleEditClick}/>)
                          )}
                        </Fragment>
                      ))}
                    </tbody>

                  </table>
                </form>
                </div>
                
            </div>

            
            
        </div>

    </div>
  )
}
