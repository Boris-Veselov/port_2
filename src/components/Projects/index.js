import React from 'react';
import ProjectList from '../ProjectList'

function Projects(props) {
    const currentCategory = {
    
    };
  return (
    <section>
      <h1>{currentCategory.name}</h1>
      <p>{currentCategory.description}</p>
      <ProjectList category={currentCategory.name}/>
    </section>
  );
}
export default Projects;



// import React from 'react';
// import ProjectList from '../ProjectList';

// function Projects(props) {
//     const { currentCategory } = props; 
//     return (
//         <section>
//         <h1>{currentCategory.name}</h1>
//         <p>{currentCategory.description}</p>
//         <ProjectList category={currentCategory.name}/>
//         </section>
//     );
// }
// export default Projects;




// function Projects({ currentCategory }) {
//     const { name, description } = currentCategory;
//     return (
//       <section>
//           <h1>{name}</h1>
//           <p>{description}</p>
//           <ProjectList/>
//       </section>
//     );
//   }

//  export default Projects;
