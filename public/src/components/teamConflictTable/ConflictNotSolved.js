import React from 'react'

export const ConflictNotSolved = ({conflict: conflict}) => {
    return(
        <tr>
            <td>{conflict.conflictName}</td>
            <td>{conflict.dateRaised}</td>
            <td>{conflict.membersInvolved}</td>
            <td class="notSolved">{conflict.tutorFeedback}</td>
        </tr>
    )
}