import React from 'react';
// import PhotoList from '../PhotoList';

function Projects(props) {
    const { currentCategory } = props; 
    return (
        <section>
        <h1>{currentCategory.name}</h1>
        <p>{currentCategory.description}</p>
        {/* <PhotoList category={currentCategory.name}/> */}
        </section>
    );
}
export default Projects;