import React from 'react'
import './grade.css'
import NavigationBar from '../../components/navigationBar/navigationBar.jsx';
import SideBar from '../../components/sideBar/sideBar.jsx';
import PetBar from '../../components/petBar/petBar.jsx';
import '../../App.css'

export default function grade() {
  return (
    <>
    <NavigationBar /> 
    <div className = 'container'>
    <SideBar />
    <div className='content'>
    <div className="grades">
      <table>
        <tr>
          <th>Assignment</th>
          <th>Submission Date</th>
          <th>Grade</th>
          <th>Team Health Effect</th>
        </tr>
        <tr>
          <td>Presentation</td>
          <td>23/09/2023</td>
          <td>High Distinction</td>
          <td>+3 Pet Points</td>
        </tr>
        <tr>
        <td>Design Proposol</td>
          <td>27/09/2023</td>
          <td>Pass</td>
          <td>-10% Pet Health</td>
        </tr>
      </table>
    </div>
    </div>
    <PetBar />
    </div>
    </>
  )
}
