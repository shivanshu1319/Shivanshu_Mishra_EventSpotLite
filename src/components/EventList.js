import React, { useState } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal'; 
import eventsData from '../data/events.json';

const EventList = ({ searchName, searchLocation }) => {
  const [openEventId, setOpenEventId] = useState(null);

  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchName.toLowerCase()) &&
    event.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  const toggleModal = (id) => {
    setOpenEventId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="event-list">
      {filteredEvents.length > 0 ? (
        filteredEvents.map(event => (
          <EventCard 
            key={event.id} 
            event={event} 
            isOpen={openEventId === event.id} 
            toggleModal={toggleModal} 
          />
        ))
      ) : (
        <p>No events found matching your search.</p>
      )}
      {openEventId && (
        <EventModal 
          event={filteredEvents.find(event => event.id === openEventId)} 
          onClose={() => toggleModal(null)} 
        />
      )}
    </div>
  );
};

export default EventList;
