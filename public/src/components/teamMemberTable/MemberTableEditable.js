import React from 'react'

export const MemberTableEditable = ({editFormData, handleEditFormChange}) => {
  return (
    <tr>
        <td>
            <input type="text" name="memberName" required="required" placeholder='Member Name' value={editFormData.memberName} onChange={handleEditFormChange}></input>
        </td>
        <td>
            <input type="email" name="email" required="required" placeholder='Email' value={editFormData.email} onChange={handleEditFormChange}></input>
        </td>
        <td>
            <input type="text" name="dateAdded" value={editFormData.dateAdded} readOnly></input>
        </td>
        <td>
            <input type="text" name="taskAssigned" placeholder='task Assigned' value={editFormData.taskAssigned} readOnly></input>
        </td>
        <td>
            <input type="text" name="isLeader" placeholder='Is Leader' value={editFormData.isLeader} onChange={handleEditFormChange}></input>
        </td>
        <td>
            <button type="submit">Save</button>
        </td>
    </tr>
  )
}
