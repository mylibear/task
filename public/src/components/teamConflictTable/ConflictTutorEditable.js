import React from 'react'

export const ConflictTutorEditable = ({conflict:conflict, editFormData, handleEditFormChange}) => {
    return(
        <tr>
            <td>{conflict.conflictName}</td>
            <td>{conflict.dateRaised}</td>
            <td>{conflict.membersInvolved}</td>
            <td><input type="text" name="tutorFeedback" value={editFormData.tutorFeedback} onChange={handleEditFormChange} /></td>
            <td><button type="submit">Save</button></td>
        </tr>
    )
}