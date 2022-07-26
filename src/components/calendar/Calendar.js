import React, { useEffect, useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import {months, builtDays } from './dateFunctions';

const Calendar = () => {
  const { usersList, currentUser } = useContext(UserContext)

  const user = usersList.find(user => user.name === currentUser)
  
  const customers = user.customers

  let daysWithEvent = [];
  customers.forEach(customer => {
    const appointment = customer.nextCleaning.date
    daysWithEvent.push(appointment)
  });
  
  const date = new Date()
  
  
  const renderCalendar = () => {
    date.setDate(1);
    
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    
    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
    
    const firstDayIndex = date.getDay();
    
    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();
    
    const nextDays = 7 - lastDayIndex - 1;

  const monthDays = document.querySelector(".days");
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = new Date().toDateString();
  
  let days = builtDays(date, firstDayIndex, prevLastDay, lastDay, daysWithEvent, nextDays)
  monthDays.innerHTML = days;
}


const handlePrev = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

const handleNext = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}

useEffect(() => {

  renderCalendar();
},[date])



  return (
    <div className="calendarContainer">
      <div className="calendar">
        <div className="month">
          <i className="fas fa-angle-left prev" onClick={handlePrev}></i>
          <div className="date">
            <h1></h1>
            <p></p>
          </div>
          <i className="fas fa-angle-right next" onClick={handleNext}></i>
        </div>
        <div className="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="days"></div>
      </div>
    </div>
  )
}

export default Calendar