import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useState } from "react";
import { Context } from '../../context/context';
import { useContext} from "react";

function MyCalendar() {
  const {events,setEvents,topNavName } = useContext(Context);

  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter event name");
    if (eventNamePrompt) {
      const randomColor = generateRandomColor();
      const newEvent = {
        id: generateUniqueId(),
        start,
        end,
        title: eventNamePrompt,
        color: randomColor,
      };

      if (!localStorage.getItem(`${topNavName}Events`)) {
        localStorage.setItem(`${topNavName}Events`, JSON.stringify([newEvent]));
      } else {
        const storedEvents = JSON.parse(localStorage.getItem(`${topNavName}Events`));
        storedEvents.push(newEvent);
        localStorage.setItem(`${topNavName}Events`, JSON.stringify(storedEvents));
      }

      setEvents([...events, newEvent]);
    }
  };

  const handleEventClick = (info) => {
    const confirmDelete = window.confirm("Are you sure you want to remove this event?");
    if (confirmDelete) {
      const storedEvents = JSON.parse(localStorage.getItem(`${topNavName}Events`));
      const updatedEvents = storedEvents.filter((event) => event.title !== info.event.title);
      localStorage.setItem(`${topNavName}Events`, JSON.stringify(updatedEvents));
      setEvents(updatedEvents);
    }
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const eventContent = (arg) => {
    return (
      <div className="event-content">
        <div className="event-title">{arg.event.title}</div>
      </div>
    );
  };

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem(`${topNavName}Events`));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  return (
    <div className="calendar-container">
      <style>
        {`
          .event-content {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }

          .event-title {
            text-align: center;
          }
        `}
      </style>
      <FullCalendar
        editable
        selectable
        events={events}
        select={handleSelect}
        eventClick={handleEventClick}
        headerToolbar={{
          start: "prevYear prev today next nextYear",
          center: "title",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        plugins={[dayGridPlugin, interactionPlugin]}
        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
        displayEventTime={false} // Hide event time
        eventContent={eventContent} // Custom event content
      />
    </div>
  );
}

export default MyCalendar;
