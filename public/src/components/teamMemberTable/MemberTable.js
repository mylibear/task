import React from 'react'

export const MemberTable = ({ teamMember: teamMember, handleEditClick,handleDeleteClick }) => {
    return (
        <tr>
            <td>{teamMember.memberName}</td>
            <td>{teamMember.email}</td>
            <td>{teamMember.dateAdded}</td>
            <td>{teamMember.taskAssigned}</td>
            <td>{teamMember.isLeader}</td>
            <td>
                <button type="button" onClick={(event) => handleEditClick(event, teamMember)}>Edit</button>
                <button type="button" onClick={() => handleDeleteClick(teamMember.id)}>Delete</button>
            </td>
        </tr>
    )
}
