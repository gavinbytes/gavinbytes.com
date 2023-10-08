import {useState, useEffect} from 'react';

function Intro() {
  const [classes, setClasses] = useState('');

  useEffect(() => {
    setClasses('visible');
  }, []);

  return (
    <section id='intro' className={classes}>
      <div>
        <p>I&apos;m <span>Gavin Aguinaga</span><br />Full-stack developer, software engineer, and problem solver.</p>
        <a href='#contact'>Contact me</a>
      </div>
      <div>
        <img className='me' src='img/glasses_noback.png' alt='me' />
      </div>
    </section>
  )
}

export default Intro;