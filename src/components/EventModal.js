import React, { useEffect, useCallback } from 'react';

const EventModal = ({ event, onClose }) => {
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        aria-labelledby="modal-title" 
        aria-describedby="modal-description"
      >
        <button onClick={onClose} className="close-btn" aria-label="Close modal">X</button>
        <h2 id="modal-title">{event.name}</h2>
        <p id="modal-description">{event.description}</p>
        <img 
          src={event.image || 'https://via.placeholder.com/200x300'} 
          alt={event.name} 
          onError={(e) => { e.target.src = 'https://via.placeholder.com/200x300'; }} 
        />
      </div>
    </div>
  );
};

export default EventModal;
