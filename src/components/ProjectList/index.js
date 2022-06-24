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
      description: 'A social media app for past, present and future web development bootcamp students',
      liveWebsite: "https://guarded-atoll-65920.herokuapp.com/" 
    },
    {
      name: 'Randomizer',
      category: 'Portfolio',
      description: 'A website that suggests random facts or jokes for when you are looking for random funny information online',
      liveWebsite: "https://boris-veselov.github.io/Randomizer/"
    },
    {
      name: 'Run Buddy',
      category: 'Portfolio',
      description: 'A website where you can connect with a trainer to get a proper plan for what you are trying to accomplich: get fit, lose weight or just feel good',
      liveWebsite: "https://boris-veselov.github.io/run-buddy-website/"
    },
    {
      name: 'My most recent resume',
      category: 'Resume',
      liveWebsite: "https://docs.google.com/document/d/1xv85wxRFuERSOAlGfU6Rc0VbME_7sbuADbOYJtL4yWs/edit?usp=sharing"
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
