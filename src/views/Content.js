import React from 'react';
import '../App.css';
import Showcase from './Showcase.js';
import Resume from './Resume.js';
import About from './About.js';
import {Locations, Location} from 'react-router-component';


function Content() {
    return (
        <div className='Content'>
            <Locations>
                <Location path = "/" handler = {Showcase} />
                <Location path = "/resume" handler = {Resume} />
                <Location path = "/about" handler = {About} />
            </Locations>
        </div>
    );
};

export default Content;
