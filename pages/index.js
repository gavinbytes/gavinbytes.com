import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Text } from '@nextui-org/react';
import { Switch } from '@nextui-org/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ArticleIcon from '@mui/icons-material/Article';

function HomePage() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <>
      <nav className="top-nav">
        <Link href="/about">
          <Text h1 size={20} weight="bold" className="nav-names" color="red">
            About Me
          </Text>
        </Link>
        <Link href="/projects">
          <Text h1 size={20} weight="bold" className="nav-names" color="blue">
            Projects
          </Text>
        </Link>
        <Switch
          checked={isDarkTheme}
          onChange={(e) => setIsDarkTheme(e.target.checked)}
          iconOn={<Brightness3Icon />}
          iconOff={<Brightness4Icon />}
          color="warning"
          size='xl'
        />
      </nav>

      <div className="box">
        <Text h1 size={60} weight="bold" className="text-name">
          Gavin Leonel Aguiñaga Hernandez
        </Text>
        <Text h3 size={40} className="subtext-name">
          The Software Engineer
        </Text>
      </div>

      <nav className="bottom-nav">
        <a
          href="mailto:gavin.aguinaga@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text h1 size={20} weight="bold" className="nav-names" color="pink">
            Contact
            <AlternateEmailIcon />
          </Text>
        </a>
        <a
          href="/gavin_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text h1 size={20} weight="bold" className="nav-names" color="red">
            Resume
            <ArticleIcon />
          </Text>
        </a>
        <Link
          href="https://linkedin.com/in/gavinleonel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text h1 size={20} weight="bold" className="nav-names" color="blue">
            LinkedIn
            <LinkedInIcon />
          </Text>
        </Link>
        <Link
          href="https://github.com/gavinbytes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text h1 size={20} weight="bold" className="nav-names" color="green">
            Github
            <GitHubIcon color='#6cc644'/>
          </Text>
        </Link>
      </nav>
    </>
  );
}

export default HomePage;
