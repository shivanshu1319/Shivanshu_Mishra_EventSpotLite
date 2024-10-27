import React from 'react';

const EventCard = ({ event, isOpen, toggleModal }) => {
  return (
    <div 
      className="event-card" 
      onClick={() => toggleModal(event.id)} 
      role="button" 
      tabIndex={0} 
      onKeyPress={(e) => e.key === 'Enter' && toggleModal(event.id)} 
    >
      <img src={event.image} alt={event.name} />
      <div className="event-details">
        <h3 className="event-name">{event.name}</h3>
        <p className="event-date">{event.date}</p>
        <p className="event-location">{event.location}</p>
        <p className="event-description">{event.description.substring(0, 100)}...</p>
      </div>
    </div>
  );
};

export default EventCard;
