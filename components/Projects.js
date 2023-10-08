import React from 'react';

function Projects() {
  return (
    <section id='projects'>
      <div className='center'>
        <h2>Projects</h2>
        <div className='projects-container'>
          <div className="project-box">
            <img src="img/projects/health-check.png" alt="medicine tracker logo" />
            <div className="project-info">
              <h3>Medicine Tracker</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab atque ad cum ipsum ullam corrupti odit recusandae voluptatem debitis quos tempore laborum quis excepturi quam, sapiente ducimus, aperiam laboriosam ratione.
              </p>
            </div>
            <div className='links'>
              <a>
                <img src="youtube.png" alt="medicine tracker logo" />
              </a>
              <a href='https://github.com/gavinbytes/Medicine-Tracker'>
                <img src="github-2.png" alt="medicine tracker logo" />
              </a>
            </div>
          </div>
          <div className="project-box">
            <img src="img/projects/review.png" alt="medicine tracker logo" />
            <div className="project-info">
              <h3>Sentiment Analyzer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iusto! Molestias, quasi nemo eligendi adipisci corrupti, distinctio natus enim rem sit asperiores soluta tempora nisi nam at beatae voluptate repudiandae!
              </p>
            </div>
            <div className='links'>
              <a href='https://github.com/gavinbytes/zzrjt-practice-project-emb-ai'>
                <img src="github-2.png" alt="medicine tracker logo" />
              </a>
            </div>
          </div>
          <div className="project-box">
            <img src="img/projects/pantry.png" alt="my pantry logo" />
            <div className="project-info">
              <h3>MyPantry</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab atque ad cum ipsum ullam corrupti odit recusandae voluptatem debitis quos tempore laborum quis excepturi quam, sapiente ducimus, aperiam laboriosam ratione.
              </p>
            </div>
            <div className='links'>
              <a href='myPantryPoster.pdf' target="_blank" rel="noopener noreferrer">
                <img src="figma.png" alt="github" />
              </a>
              <a href='https://github.com/My-PantryGit/My_Pantry_Main'>
                <img src="github-2.png" alt="figma" href='myPantryPic.png'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;