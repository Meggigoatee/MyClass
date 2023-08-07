
import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
const TeacherSchedule = ()=>{

return(
    <div className='p-5'>
        <FullCalendar 
          defaultView="dayGridMonth" 
          plugins={[ dayGridPlugin ]}
          locale="ko"
          height={650}
          
        />
    </div>
    // <FullCalendar>
        
    // </FullCalendar>
)

    // document.addEventListener('DOMContentLoaded', function() {
    //     var calendarEl = document.getElementById('calendar');
    //     var calendar = new FullCalendar.Calendar(calendarEl, {
    //       initialView: 'dayGridMonth'
    //     });
    //     calendar.render();
    //   });

    // return(
    //     <div id="calendar">
    //     </div>
    // )
}

export default TeacherSchedule;