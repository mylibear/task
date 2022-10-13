import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState, useEffect } from 'react'
import Chart from 'react-google-charts'
import readTaskRequest from '../../api/readTaskRequest';

// const [tasks, setTasks] = useState([]);



// useEffect(() => {
//     readTaskRequest().then(setTasks)
//   }, [])

const ganttChartData = [
  [
    { type: 'string', label: 'Task' },
    { type: 'string', label: 'Task Name' },
    { type: 'date', label: 'Start Date' },
    { type: 'date', label: 'End Date' },
    { type: 'number', label: 'Duration' },
    { type: 'number', label: 'Percent Complete' },
    { type: 'string', label: 'Dependencies' },
  ],
  [
    'Research',
    'Find sources',
    new Date(2022, 9, 1),
    new Date(2022, 9, 5),
    null,
    100,
    null,
  ],
  [
    'Write',
    'Write paper',
    new Date(2022, 10, 1),
    new Date(2022, 10, 9),
    null,
    100,
    null,
  ],
  [
    'Cite',
    'Create bibliography',
    new Date(2022, 9, 1),
    new Date(2022, 10, 7),
    null,
    100,
    null,
  ],
  [
    'Outline',
    'Outline paper',
    new Date(2022, 10, 1),
    new Date(2022, 10, 30),
    null,
    100,
    null,
  ],
]
class GanttChart extends Component {
  render() {
    return (
      <div className="container mt-5">

        <Chart
          width={'800px'}
          height={'250px'}
          chartType="Gantt"
          loader={<div>Loading Chart</div>}
          data={ganttChartData}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    )
  }
}
export default GanttChart