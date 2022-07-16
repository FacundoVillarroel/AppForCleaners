import React from 'react'
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast, localeDe } from '@mobiscroll/react';

const CalendarContainer = () => {
  const [myEvents, setEvents] = React.useState([]);
  
  React.useEffect(() => {
      getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
          setEvents(events);
      }, 'jsonp');
  }, []);
  
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
    <div className='calendarContainer'>
      <h2 className='text-center pt-5 mb-5 title'>CALENDAR</h2>
      <Eventcalendar
        theme="ios" 
        themeVariant="light"
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

