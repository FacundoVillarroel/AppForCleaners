import React, {useState, useContext, useEffect } from 'react'
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, toast, localeDe } from '@mobiscroll/react';
import { UserContext } from '../../context/UserContext';

import endTime from '../../utils/endTime';


const CalendarContainer = () => {

  const { usersList, currentUser } = useContext(UserContext)

  const [myEvents, setEvents] = useState([]);

  const user = usersList.find(user => user.name === currentUser)

  const customers = user.customers

  let events = []

    customers.forEach(customer => {
      let { date, time } = customer.nextCleaning;
      let event = {
        start: `${date}T${time}:00.000Z`,
        end: `${date}T${endTime(time, parseFloat(customer.hours))}:00.000Z`,
        title: customer.name,
        color: "#00adb5",
      }

      if (customer.frequency === "weekly"){
        event.recurring = {
          repeat: "weekly"
        }
      }
      if (customer.frequency === "biWeekly"){
        event.recurring = "FREQ=WEEKLY;INTERVAL=2"
      }
        
      events.push(event)
    });

  
  useEffect(() => {
      setEvents(events)
  }, [currentUser, usersList]);
  
  const onEventClick = React.useCallback((event) => {
      toast({
          message: event.event.title
      });
  }, []);
  
  const view = React.useMemo(() => {
      return {
          calendar: { type: 'month' },
          agenda: { type: 'month' }
      };
  }, []);
  
  return (
    <div className='calendarContainerMobiScroll'>
      <h2 className='text-center pt-5 mb-5 title'>CALENDAR</h2>
      <Eventcalendar
        theme="ios" 
        themeVariant="dark"
        clickToCreate={false}
        dragToCreate={false}
        dragToMove={false}
        dragToResize={false}
        eventDelete={false}
        locale={localeDe}
        data={myEvents}
        view={view}
        onEventClick={onEventClick}
      />
    </div>
  ); 
}

export default CalendarContainer

