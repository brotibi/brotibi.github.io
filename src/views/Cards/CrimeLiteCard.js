import React from 'react';
import '../../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function CrimeLiteCard() {
    return (
        <div className='CrimeLiteCard'>
            <Card style={{ width: '18rem' }} bg = "white" text = "black">
                <Card.Img variant="top" src="https://1netwiki.com/ueditor/php/upload/image/20180906/1536196743962658.jpg" />
                
                <Card.Body>
                    <Card.Title>crime-lite.com</Card.Title>
                    <Card.Text>
                    At Boston Hacks 2018, my team and I developed a website that visualizes the number of traffic lights relative
                    to the crime rate of areas around Boston. We utilized the Google Maps API along with Javascript, Python, HTML and CSS 
                    to develop this website.
                    </Card.Text>
                    <Button href = "https://github.com/brotibi/crime-lite.com-mirror-/tree/master/5Racketeers-master/5Racketeers-master" 
                    variant="primary">GitHub Link</Button>
                    <Button href = "http://www.crime-lite.com/" variant="secondary"> Visit www.crime-lite.com</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CrimeLiteCard;
