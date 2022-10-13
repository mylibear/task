import React from 'react'

export const ConflictSolved = ({conflict: conflict}) => {
    return(
        <tr>
            <td>{conflict.conflictName}</td>
            <td>{conflict.dateRaised}</td>
            <td>{conflict.membersInvolved}</td>
            <td>{conflict.tutorFeedback}</td>
        </tr>
    )
}