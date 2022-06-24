import React from 'react';
import coverImage from '../../assets/cover/me.jpg';

function About() {
  return (
      <section className='my-5'>
          <h1 id="about">Welcome to my portfolio page!
          <br></br>
          <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
          <br></br>
          User story: 
          <br></br>
          AS A candidate with experience building full stack applications
          <br></br>
          I WANT to show you my work samples
          <br></br>
          SO THAT you can assess that I am indeed a good cadidate for the position you are lookign to fill </h1>
      </section>
  );
}

export default About;
