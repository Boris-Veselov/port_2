import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();
console.log(category)
  const [photos] = useState([
    {
      name: 'Web Dev Social',
      category: 'Portfolio',
      description: 'A social media app for past, present and future web development bootcamp students'
    },
    {
      name: 'Randomizer',
      category: 'Portfolio',
      description: 'A website that suggests random facts or jokes for when you are looking for random funny information online'
    },
    {
    name: 'My most recent resume',
      category: 'Resume',
    },
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/pics/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
