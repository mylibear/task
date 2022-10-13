import './calendar.css'
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import NavigationBar from '../../components/navigationBar/navigationBar.jsx';
import SideBar from '../../components/sideBar/sideBar.jsx';
import PetBar from '../../components/petBar/petBar.jsx';
import '../../App.css'

const locales = {
  "en-AU": require("date-fns/locale/en-AU")
}
const localizer = dateFnsLocalizer({
  format, parse, startOfWeek, getDay, locales
})



export const events = [
  {
    title: 'Big Meeting',
    allDay: true,
    start: new Date(2022,9,1),
    end: new Date(2022,9,7)
  },

  {
    title: 'Vacation',
    start: new Date(2022,8,12),
    end: new Date(2022,8,15)
  },
  {
    title: 'Conference',
    start: new Date(2022,9,22),
    end: new Date(2022,9,23)
  },
]


function CreateCalendar() {
    const [newEvent, setNewEvent] = useState({title:'',start:'',end:''})
    const [allEvents, setAllEvents] = useState(events)

    // const [title, ] = useState({title:''});
    // const [start, ] = useState({start:''});
    // const [end, ] = useState({end:''});
    
    function handleAddEvent(e) {
      e.preventDefault();
      //setAllEvents([...allEvents, newEvent])
      fetch(`http://localhost:4000/Calendar`, {
        //mode : 'no-cors',
        method: 'POST',
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // newEvent: {
          // title,
          // tstart,
          // end,
          // }
        }),
      });

    };

  

  return(
    <>
    <NavigationBar /> 
    <div className = 'container'>
    <SideBar />
    <div className='content'>
    <div className='calendar'>
      <h1>Calendar</h1>
      <h2>Add Event</h2>
      <div>
        <form onSubmit={handleAddEvent}>
          <input type = 'text' placeholder = 'Add Title'
          style = {{width:'20%', marginRight:'10px'}} 
          value = {newEvent.title} 
          onChange={(e) => setNewEvent({...newEvent, title:e.target.value})}/>
          
          <DatePicker 
          placeholderText='Start Date' 
          style = {{marginRight:'10px'}}
          selected ={newEvent.start} 
          onChange={(start) => 
            setNewEvent({...newEvent, start})} 
            />

          <DatePicker 
          placeholderText='End Date' 
          style = {{marginRight:'10px'}}
          selected ={newEvent.end} 
          onChange={(end) => 
            setNewEvent({...newEvent, end})} 
            />
          <button type="submit" style={{marginTop:'10px'}}>
          Add Event</button>
        </form>
      </div>
      <Calendar 
      localizer={localizer} events={allEvents}
      startAccessor='start' endAccessor='end' 
      style={{height:500, margin:'50px'}} />
    </div>
    </div>
    <PetBar />
    </div>
    </>
  );
}

export default CreateCalendar;

