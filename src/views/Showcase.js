import React from 'react';
import '../App.css';
//import DormeterCard from './Cards/DormeterCard';
//import ExcellenceCard from './Cards/ExcellenceCard';
import CrimeLiteCard from './Cards/CrimeLiteCard';
import KnowItAllCard from './Cards/KnowItAllCard';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function genCard(cardName, cardTitle, cardText, cardImg, buttonLink, buttonLink2) { // Generates a display card
  return (
    <div className={cardName}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cardImg} />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>
            {cardText}
          </Card.Text>
          <Button href={buttonLink} variant="primary">GitHub Link</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const TestCard = genCard("TestCard", "Test Card", "This is a test", "test", "test");
const DormeterCard = genCard("DormeterCard", "DormeterV1(old)",
  "Dormeter is a website I developed .It utilizes Node.js, Express.js, EJS and a bunch of other js libraries.",
  "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
  "https://github.com/brotibi/dormeterV1-old-");

const ExcellenceCard = genCard("ExcellenceCard", "Excellence Animator",
  "                    A simple animator developed using Java, with the GUI features developed using" +
  "Java's swing library. I developed this in collaboration with my partner Pablo Kvitca." +
  "The purpose of this assignment was to showcase what we had learned during the semester, and " +
  "how well we could follow the Model View Controller design pattern.",
  "https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png",
  "https://github.com/brotibi/CS-3500-OOD-Project");

function Showcase() {
  return (
    <div className='Showcase'>
      <h1>Showcase of my personal projects</h1>
      <ul>
        <li>{DormeterCard}</li>
        <li>{ExcellenceCard}</li>
        <li><CrimeLiteCard /></li>
        <li><KnowItAllCard /></li>
        <li>{TestCard} </li>
      </ul>
    </div>
  );
};

export default Showcase;
