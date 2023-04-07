import React, { useEffect, useRef } from 'react';
import styles from '../styles/About.module.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import { Card, Grid, Row, Text } from "@nextui-org/react";

function About() {
  const indexRef = useRef(0);
  const paragraphRef = useRef(0);
  const timeoutIdRef = useRef(null);
  const typingSpeed = 10;

  const textToType = [
    'Hello World! 🌍',
    'My name is |Gavin Aguiñaga|.',
    'I am a |Computer Science| graduate from the |University of California, Santa Cruz|. GO BANANA SLUGS! My passion for technology, programming, and problem-solving started during my time at UCSC, where I immersed myself in the world of computer science and thrived in the collaborative and creative environment that the campus offered.',
    'I am currently |open for work| in |Software Engineering|, |Project Management|, or |Sales|. My versatile skill set and adaptability make me the perfect candidate for a variety of roles in the tech industry. With a strong foundation in programming languages such as |Javascript|, |C|, |C++|, and |Python|, I have the technical knowledge to develop and maintain high-quality software solutions. My experience working on group projects and Lab research at UCSC has helped me develop excellent teamwork, leadership, and project management skills.',
    'As a computer science graduate, I understand the importance of staying updated with the latest industry trends and technologies. I am constantly learning and expanding my knowledge, whether it\'s through online courses, attending conferences, or participating in coding competitions. My curiosity and love for learning drive me to push the boundaries and discover innovative solutions to complex problems.',
    'In addition to my technical skills, I am also an effective communicator, which is crucial for any role in sales or project management. I have honed my ability to present complex ideas in a clear and concise manner through grroup projects, internships, and extracurricular activities. My experience working with diverse teams has taught me the value of empathy and understanding, allowing me to establish strong connections with clients and colleagues alike.',
    'When I\'m not coding or learning about the latest industry trends, I enjoy running 🏃‍♂️, playing soccer ⚽, and surfing 🏄‍♂️ in Santa Cruz. My diverse interests and hobbies have shaped me into a well-rounded individual, ready to contribute to any team and project I join.',
    'If you\'re looking for someone who is passionate about technology, driven to learn and grow, and eager to make a positive impact on your organization, I would love to connect with you. Feel free to reach out to me through |gavin.aguinaga@yahoo.com|, and let\'s discuss how my skills and experience can be an asset to your team.',
  ];

  const images = [
    {src: 'selfie.png', alt: 'Selfie'},
    {src: 'me2.png', alt: 'me2'},
    {src: 'menlucy.png', alt: 'menlucy'},
    {src: 'lasagrada.png', alt: 'lasagrada'},
    {src: 'menmeat.png', alt: 'menmeat'},
    {src: 'teamo.png', alt: 'teamo'},
    {src: 'glasses.png', alt: 'glasses'},
    {src: 'beach.png', alt: 'beach'},
    {src: 'film.png', alt: 'film'},
    {src: 'me3.png', alt: 'me3'},
    {src: 'stadium.png', alt: 'staduim'},
    {src: 'outsidebern.png', alt: 'bernebau'},
    {src: 'seattle.png', alt: 'seattle'},
    {src: 'deli.png', alt: 'deli'},
  ];

  // Create an array of refs for each paragraph
  const typewriterText = textToType.map(() => useRef(null));

  useEffect(() => {
    let isHighlight = false;
    function type() {
      if (indexRef.current < textToType[paragraphRef.current].length) {
        const char = textToType[paragraphRef.current].charAt(indexRef.current);
        
        if (char === '|') {
          isHighlight = !isHighlight;
        } else {
          const span = document.createElement('span');
          span.textContent = char;
          if (isHighlight) {
            span.classList.add(styles.highlight);
          }
          if (typewriterText[paragraphRef.current] && typewriterText[paragraphRef.current].current) {
            typewriterText[paragraphRef.current].current.appendChild(span);
          }
        }

        indexRef.current++;
        timeoutIdRef.current = setTimeout(type, typingSpeed);
      } else if (paragraphRef.current < textToType.length - 1) {
        indexRef.current = 0;
        paragraphRef.current++;
        timeoutIdRef.current = setTimeout(type, typingSpeed);
      }
    }


    type();

    return () => {
      clearTimeout(timeoutIdRef.current);
    };
  }, [typingSpeed, textToType, typewriterText]);

  return (
    <>
      <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Urbanist:wght@900&display=swap"
        rel="stylesheet"
      />
      </Head>
      <Layout>
        <div className={styles.aboutMe}>
          <div className={styles.aboutMeText}>
            {typewriterText.map((_, i) => (
              <div key={i} ref={typewriterText[i]} className={styles.typewriter}></div>
            ))}
            <span className={styles.typewriterCursor}></span>
          </div>
          <div className={styles.aboutMePics}>
            <div className={styles.gallery}>
              {images.map((image, index) => (
                <Card key={index} className={styles.imageCard}>
                  <img src={image.src} alt={image.alt} className={styles.image} />
                </Card>
              ))}
            </div>
          </div>
        </div>
        
      </Layout>
    </>
  );
}

export default About;
