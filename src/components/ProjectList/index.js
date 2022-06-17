import React, { useState } from 'react'



const ProjectList = ({ category }) => {
    const [photos] = useState([
        {
            name: 'Web Dev Social',
            category: 'full stack',
            description: 'A social media app for past, present and future web development bootcamp students',
        },
        {
            name: 'Another Random Page',
            category: 'front-end',
            description: 'A website that suggests random facts or jokes for when you are looking for random funny information online'
        },
]);

const currentPhotos = photos.filter((photo) => photo.category === category);

return (
    
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/img/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;