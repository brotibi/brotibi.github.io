import React from 'react';
import '../App.css';
//import DormeterCard from './Cards/DormeterCard';
//import ExcellenceCard from './Cards/ExcellenceCard';
//import CrimeLiteCard from './Cards/CrimeLiteCard';
//import KnowItAllCard from './Cards/KnowItAllCard';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const styling = {
  color: 'black',
  textDecoration: 'none',
}

function genCard(borderColor,cardTags,cardName, cardTitle, cardText, cardImg, buttonLink, buttonLink2) { // Generates a display card
  return (
    <div className={cardName} >
      <a href={buttonLink} style={styling}>
      <Card border={borderColor} style={{ width: '18rem' }} >
        <Card.Img variant="top" src={cardImg} />
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <hr/>
          {cardTags}
          <hr/>
          <Card.Text>
            {cardText}
          </Card.Text>
        </Card.Body>
      </Card>
      </a>
    </div>
  );
};

// Badges
const javaBadge = <Badge variant="info">Java</Badge>;
const htmlBadge = <Badge variant="info">HTML</Badge>;
const jsBadge = <Badge variant="info">JavaScript</Badge>;
const cssBadge = <Badge variant="info">CSS</Badge>;
const nodeBadge = <Badge variant="warning">NodeJS</Badge>;
const reactBadge = <Badge variant="warning">React</Badge>;
const mongoDBBadge = <Badge variant="success">MongoDB</Badge>;
const mySQLBadge = <Badge variant="success">MySQL</Badge>;
const cs3500Badge = <Badge variant="dark">CS3500</Badge>;
const cs3200Badge = <Badge variant="dark">CS3200</Badge>;

//const TestCard = genCard("TestCard", "Test Card", "This is a test", "test", "test");
const DormeterCard = genCard("primary",[nodeBadge, jsBadge, cssBadge, htmlBadge, mongoDBBadge],"DormeterCard", "DormeterV1(old)",
  "Dormeter is a website I developed. It utilizes Node.js, Express.js, EJS and a bunch of other js libraries.",
  "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
  "https://github.com/brotibi/dormeterV1-old-");

const ExcellenceCard = genCard("secondary",[javaBadge, cs3500Badge],"ExcellenceCard", "Excellence Animator",
  "                    A simple animator developed using Java, with the GUI features developed using " +
  "Java's swing library. I developed this in collaboration with my partner Pablo Kvitca." +
  "The purpose of this assignment was to showcase what we had learned during the semester, and " +
  "how well we could follow the Model View Controller design pattern.",
  "https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png",
  "https://github.com/brotibi/CS-3500-OOD-Project");

  const CrimeLiteCard = genCard("success",[htmlBadge, cssBadge, jsBadge],"CrimeLiteCard", <a href = "http://www.crime-lite.com">crime-lite.com</a>, 
  "At Boston Hacks 2018, my team and I developed a website that visualizes the number of traffic lights relative" +
  "to the crime rate of areas around Boston. We utilized the Google Maps API along with Javascript, Python, HTML and CSS " +
  "to develop this website.",
  "https://1netwiki.com/ueditor/php/upload/image/20180906/1536196743962658.jpg",
  "https://github.com/brotibi/crime-lite.com-mirror-/tree/master/5Racketeers-master/5Racketeers-master",
  "http://www.crime-lite.com/");

  const KnowItAllCard = genCard("warning",[nodeBadge, jsBadge, cssBadge, htmlBadge, cs3200Badge, mySQLBadge],"KnowItAllCard", "KnowItAll: Sports", 
  "For my CS3200 Database Design Final Project me and my team decided to develop a site" + 
  "that allowed one to look up statistics for the sport Baseball.",
  "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png",
  "https://github.com/robSanders818/sports-database");

  const ThisWebsiteCard = genCard("warning",[nodeBadge, jsBadge, cssBadge, htmlBadge, reactBadge],"ThisWebsite", "This Website", 
  "Well I used React to develop my Personal Website(The one you are currently viewing), nuff said",
  "https://hackernoon.com/hn-images/1*y6C4nSvy2Woe0m7bWEn4BA.png",
  "https://github.com/brotibi/BolajiRotibiPersonalSite");

  const cards = [<li>{DormeterCard}</li>, 
                 <li>{ExcellenceCard}</li>, 
                 <li>{CrimeLiteCard}</li>, 
                 <li>{KnowItAllCard}</li>,
                 <li>{ThisWebsiteCard}</li>];
/* To be added soon 
  function renderCards(cards) {
      let cardies;
      return (
        <div className='cardos'>
      {cards.forEach(element => {<li>{element}</li>
        
      });
      //</div>
      
  }*/

  const aboutMe = <div><p>Hello I'm Mobolaji "Bolaji" Rotibi a Computer Science student at Northeastern University. 
                     I'm currently in search of a coop(6 month internship) for the spring semester.
                     Feel free to check out my resume and portfolio down below, or contact me via my email: rotibi.m@husky.neu.edu.</p>
                     
                     <p>This is random but here are some fun facts about me:</p>
                     <ul>
                       <li>I was born in Nigeria, spent most of my early life in the United Kingdom, and attended High School(and now University) in the United States</li>
                       <li>When it comes to Computer Science I find most aspects of it interesting, but currently I'm interested in Networks and Systems, AR and VR, and 
                           Web and Software(wow this sounds so general) Development</li>
                       <li></li>
                     </ul>
                     </div>;
  const portfolioDesc = <p>Check out my personal projects!</p>;
  const divStyle = {
    background: '#c2d2ed',
  };
  const resumeDesc = 
    <div className='Resume'>
      {console.log(__dirname)}
      <Document file = "MobolajiRotibiResume2019.pdf"
        onLoadError={console.error}>
                  <Page pageNumber={1} width = '485' />
      </Document>
    </div>
  const aboutMeCard = 
  <Card style={{ width: '40rem' }} bg="secondary" text="white">
    <Card.Header>
      <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
        <h1>About Me</h1>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>{aboutMe}</Card.Body>
    </Accordion.Collapse>
  </Card>;
const resumeCard = 
<Card style={{ width: '40rem' }} bg="dark" text="white">
  <Card.Header>
    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
      <h1>Resume</h1>
    </Accordion.Toggle>
  </Card.Header>
  <Accordion.Collapse eventKey="0">
    <a href = "https://github.com/brotibi/BolajiRotibiPersonalSite/blob/master/public/MobolajiRotibiResume2019.pdf">
    <Card.Body>{resumeDesc}</Card.Body>
    </a>
  </Accordion.Collapse>
</Card>;
  const portfolioCard =
  <Card style={{ width: '60rem' }}>
  <Card.Header>
    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
      <h1>Portfolio</h1>
    </Accordion.Toggle>
  </Card.Header>
  <Accordion.Collapse eventKey="0">
    <Card.Body><br/>
      {portfolioDesc}
      <br/>
      <ul>
        {cards}
      </ul></Card.Body>
  </Accordion.Collapse>
</Card>;
function Showcase() {
  return (
    <div className='Showcase'>
      {/*<div style = {divStyle}>*/}
      <Nav>
        <Nav.Item>
        <Accordion defaultActiveKey = "0">
          {aboutMeCard}
        </Accordion>
        <Accordion defaultActiveKey = "0">
        {resumeCard}
        </Accordion>
        </Nav.Item>
        <Nav.Item>
        <Accordion defaultActiveKey = "0">
        {portfolioCard}
        </Accordion>
        </Nav.Item>
        </Nav>
      {/*</div>*/}
      <br/>
    </div>
  );
};
export default Showcase;