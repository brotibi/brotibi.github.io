import React from 'react';
import '../../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ExcellenceCard() {
    return (
        <div className='ExcellenceCard'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png" />
                <Card.Body>
                    <Card.Title>Excellence Animator</Card.Title>
                    <Card.Text>
                    A simple animator developed using Java, with the GUI features developed using
                        Java's swing library. I developed this in collaboration with my partner Pablo Kvitca.
                        The purpose of this assignment was to showcase what we had learned during the semester, and 
                        how well we could follow the Model View Controller design pattern.
                    </Card.Text>
                    <Button href = "https://github.com/brotibi/CS-3500-OOD-Project" variant="primary">GitHub Link</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ExcellenceCard;
