import React from 'react';
import '../../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function DormeterCard() {
    return (
        <div className='DormeterCard'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" />
                <Card.Body>
                    <Card.Title>DormeterV1(old)</Card.Title>
                    <Card.Text>
                        Dormeter is a website I developed .It utilizes Node.js, Express.js, EJS and a bunch of other js libraries.
                    </Card.Text>
                    <Button href = "https://github.com/brotibi/dormeterV1-old-" variant="primary">GitHub Link</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DormeterCard;
