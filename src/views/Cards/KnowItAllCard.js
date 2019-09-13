import React from 'react';
import '../../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function KnowItAllCard() {
    return (
        <div className='KnowItAllCard'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png" />
                <Card.Body>
                    <Card.Title>Know It All Sports DB</Card.Title>
                    <Card.Text>
                        For my CS3200 Database Design Final Project me and my team decided to develop a site thatt allowed one to look up stats
                        for the sport Baseball.
                    </Card.Text>
                    <Button href="https://github.com/robSanders818/sports-database" variant="primary">GitHub Link</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default KnowItAllCard;