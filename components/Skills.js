import {useState} from 'react';

function Skills() {
  const [extraClasses, setExtraClasses] = useState('');

  return (
    <section id='skills'>
      <div className='center'>
        <h2>Skills</h2>
        <div className={extraClasses + 'skills-container'}>
          <div className="skill-box"><img src="img/skills/js.png" alt="javascript" /><span>Javascript</span></div>
          <div className="skill-box"><img src="img/skills/html.png" alt="HTML" /><span>HTML</span></div>
          <div className="skill-box"><img src="img/skills/css.png" alt="CSS" /><span>CSS</span></div>
          <div className="skill-box"><img src="img/skills/react.png" alt="react" /><span>React</span></div>
          <div className="skill-box"><img src="img/skills/c.png" alt="c" /><span>C</span></div>
          <div className="skill-box"><img src="img/skills/cpp.png" alt="c plus plus" /><span>C++</span></div>
          <div className="skill-box"><img src="img/skills/python.png" alt="python" /><span>Python</span></div>
          <div className="skill-box"><img src="img/skills/git.png" alt="git" /><span>Git</span></div>
        </div>
      </div>
    </section>
  )
}

export default Skills;