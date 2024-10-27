import React from 'react';
import EventCard from './EventCard';
import eventsData from '../data/events.json';

const EventList = ({ searchName, searchLocation }) => {
  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchName.toLowerCase()) &&
    event.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (
    <div className="event-list">
      {filteredEvents.length > 0 ? (
        filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))
      ) : (
        <p>No events found matching your search.</p>
      )}
    </div>
  );
};

export default EventList;
