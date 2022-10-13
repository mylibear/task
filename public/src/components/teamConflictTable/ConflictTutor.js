import React from 'react'

export const ConflictTutor = ({conflict: conflict, handleEditClick}) => {
    return(
        <tr>
            <td>{conflict.conflictName}</td>
            <td>{conflict.dateRaised}</td>
            <td>{conflict.membersInvolved}</td>
            <td>{conflict.tutorFeedback}</td>
            <td><button type="button" onClick={(event) => handleEditClick(event, conflict)}>Give Feedback</button></td>
        </tr>
    )
}