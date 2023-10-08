import React from 'react';

function Contact() {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className='box-container'>
        <div className='box'>
          <img src='img/mail.png' alt='email' />
          <a href='mailto:gavinbytes@gmail.com'>gavinbytes@gmail.com</a>
        </div>
        <div className='box'>
          <img src='img/telephone.png' alt='telephone' />
          <a href='tel:018189003942'>+1 818 900 3942</a>
        </div>
        <br />
        <div className='box'>
          <img src='img/location.png' alt='location' />
          <a href='https://www.google.com/maps/@34.2323021,-118.4483528,11.88z/data=!5m1!1e1?hl=en&entry=ttu' target='_blank' rel='noopener noreferrer'>Los Angeles, CA</a>
        </div>
      </div>
      
    </section>
  )
}

export default Contact;