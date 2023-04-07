import React, { useState } from 'react';
import styles from '../styles/Layout.module.css';
import { Card } from '@nextui-org/react';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Layout({ children }) {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const router = useRouter();

  const toggleCardVisibility = () => {
    setIsCardVisible((prevState) => !prevState);
  };

  const availableRoutes = ['/about', '/projects', '/'];
  
  const goToRandomPage = () => {
    const randomIndex = Math.floor(Math.random() * availableRoutes.length);
    const randomRoute = availableRoutes[randomIndex];
    router.push(randomRoute);
  };

  return (
    <div className={styles.box}>
      {children}
      {isCardVisible && (
        <Card
          className={styles.card}
          css={{ mw: '400px' }}
          variant='bordered'
          isHoverable
        >
          <Card.Body className={styles.groupButtons}>
            <div className={styles.button}>
              <Link href='/'>
                <HomeIcon className={styles.icon} />
              </Link>
            </div>
            <div className={styles.button}>
              <Link href='/gavin_resume.pdf'>
                <PictureAsPdfIcon className={styles.icon} />
              </Link>
            </div>
            <div className={styles.button} onClick={goToRandomPage}>
              <SkipNextIcon />
            </div>
          </Card.Body>
        </Card>
      )}
      <div
        className={`${styles.button} ${styles.cardButton}`}
        onClick={toggleCardVisibility}
      >
        {isCardVisible ? <CloseIcon /> : <CropSquareIcon />}
      </div>
    </div>
  );
}

export default Layout;
