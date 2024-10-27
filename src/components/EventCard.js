import React, { useState, useEffect, useCallback } from 'react';
import EventModal from './EventModal';

const EventCard = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsModalOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <div 
        className="event-card" 
        onClick={() => setIsModalOpen(true)} 
        role="button" 
        tabIndex={0} 
        onKeyPress={(e) => e.key === 'Enter' && setIsModalOpen(true)} 
      >
        <img src={event.image} alt={event.name} />
        <div className="event-details">
          <h3 className="event-name">{event.name}</h3>
          <p className="event-date">{event.date}</p>
          <p className="event-location">{event.location}</p>
          <p className="event-description">{event.description.substring(0, 100)}...</p>
        </div>
      </div>
      {isModalOpen && (
        <EventModal event={event} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default EventCard;
