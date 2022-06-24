import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, category, description, index, liveWebsite } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/pics/${category}/${index}.jpg`)}
          alt="current category"
        />
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close it
        </button>
        <button type="button" className='m-2' onClick={onClose}>
        <a href= {liveWebsite} target="_blank" rel="noreferrer">Source</a>
        </button>
      </div>
    </div>
  );
};



export default Modal;
