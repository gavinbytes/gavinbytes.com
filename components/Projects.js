import React from 'react';

function Projects() {
  return (
    <section id='projects'>
      <div className='center'>
        <h2>Projects</h2>
        <div className='projects-container'>
          <div className="project-box">
            <img src="img/projects/review.png" alt="Sentiment Analyzer logo" />
            <div className="project-info">
              <h3>Sentiment Analyzer</h3>
              <p>
                Flask web application that uses machine learning to analyze the sentiment of text. IBM Watson Tone Analyzer API is used to process, analyze, and compute the sentiment of the text.
              </p>
            </div>
            <div className='links'>
              <a href='https://github.com/gavinbytes/zzrjt-practice-project-emb-ai'>
                <img src="img/github-2.png" alt="Github logo" />
              </a>
            </div>
          </div>
          <div className="project-box">
            <img src="img/projects/pantry.png" alt="my pantry logo" />
            <div className="project-info">
              <h3>MyPantry</h3>
              <p>
                A React mobile-first-approach web application that allows UCSC students to locate on-campus food pantries and find out what food items are available. We used React, Node.js, Express, and MongoDB.
              </p>
            </div>
            <div className='links'>
              <a href='MyPantryPoster.pdf' target="_blank" rel="noopener noreferrer">
                <img src="img/figma.png" alt="github" />
              </a>
              <a href='https://github.com/My-PantryGit/My_Pantry_Main'>
                <img src="img/github-2.png" alt="figma" href='myPantryPic.png'/>
              </a>
            </div>
          </div>
          <div className="project-box">
            <img src="img/projects/health-check.png" alt="Medicine Tracker logo" />
            <div className="project-info">
              <h3>Medicine Tracker</h3>
              <p>
                A React web application meant for users to keep track of their medicine intake. We used React, Node.js, Express, and MongoDB.
              </p>
            </div>
            <div className='links'>
              <a href='https://youtu.be/cw38Kft5ctE' target='_blank'>
                <img src="img/youtube.png" alt="youtube logo" />
              </a>
              <a href='https://github.com/gavinbytes/Medicine-Tracker' target='_blank'>
                <img src="img/github-2.png" alt="medicine tracker logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;