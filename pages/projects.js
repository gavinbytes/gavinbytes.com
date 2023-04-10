import React from 'react';
import Layout from '../components/Layout';
import { Card, Grid, Row, Text } from "@nextui-org/react";
import Link from 'next/link';

function Projects() {
  const list = [
    {
      title: "Medicine Tracker",
      img: "/medicineTracker.png",
      github: "code",
      link: 'https://youtu.be/cw38Kft5ctE',
      gitlink: 'https://github.com/gavinbytes/Medicine-Tracker',
    },
    {
      title: "MyPantry",
      img: "/myPantryPic.png",
      github: "code",
      link: '/MyPantryPoster.pdf',
      gitlink: 'https://github.com/My-PantryGit/My_Pantry_Main',
    },
    {
      title: "Clock of Clocks",
      img: "./clocks.png",
      github: "code",
      link: '/clockwall',
      gitlink: 'https://github.com/gavinbytes/gavinbytes.com/blob/main/pages/clockwall.js',
    },
  ];

  return (
    <Layout>
      <Grid.Container gap={2} justify="flex-start">
        {list.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Card isPressable>
                <Card.Body css={{ p: 0 }}>
                  <Link href={item.link} passHref>
                    <Card.Image
                      src={item.img}
                      objectFit="cover"
                      width="100%"
                      height={140}
                      alt={item.title}
                    />
                  </Link>
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Row wrap="wrap" justify="space-between" align="center">
                    <Text b>{item.title}</Text>
                    <Link href={item.gitlink} passHref>
                      <Text isHoverable css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                        {item.github}
                      </Text>
                    </Link>
                  </Row>
                </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
}

export default Projects;