import React from 'react';
import Skills from './Skills';
import avatar from '../images/avatar.jpg';

import '../index.css';
import './About.css';

const About = () => {
    const calculateExperienceYears = () => {
        return new Date().getFullYear() - 2016
    }

    const calculateLinesOfCodeWritten = () => {
        return calculateExperienceYears() * 356 * 57;
    }

    const calculateRefactorsMade = () => {
        return calculateExperienceYears() * 12 * 3;
    }

    const calculateProjectsStarts = () => {
        return calculateExperienceYears() * 17;
    }
    return (
        <React.Fragment>
            <div className="w3-content w3-container w3-padding-64" id="about">
                <h3 className="w3-center">ABOUT ME</h3>
                <p className="w3-center"><em>I love programming</em></p>
                <h5>
                    Hey! My name is Alexander Kolpakov!
                </h5>
                <p>
                    I have experience in frontend and backend development. I can create and maintain a project
                    architecture from scratch.
                    Works a lot in team building, team leading and human recruitment in IT.
                </p>
                <p>
                    I was educated at the State University of Management with a degree in automotive business
                    management.
                </p>
                <p>
                    Outside of work, I spend time with my family. Two sons, a wife and a cat))
                    I play Russian billiards, snowboard, brew beer, whiskey and cheese. I love to travel and go camping
                    with a tent.
                </p>

                <div className="w3-row w3-padding-16">
                    <div className="w3-col m6 w3-center w3-padding-large">
                        <p><b><i className="fa fa-user w3-margin-right"/>Kolpakov Alexander</b></p><br/>
                        <img src={avatar} className="w3-round w3-image"
                             alt="Photo of Me" width="500" height="333"/>
                    </div>

                    {/*!--Hide this text on small devices --*/}
                    <div className="w3-col m6 w3-hide-small w3-padding-large">
                        <p>Here will be some not so interesting text, that hides on small devices. I'll write it soon...
                            Really ))</p>
                    </div>
                </div>
                <Skills />
            </div>

            <div className="w3-row w3-center w3-dark-grey w3-padding-16">
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">{`${calculateExperienceYears()}+`}</span><br/>
                    Experience years
                </div>
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">{`${calculateLinesOfCodeWritten()}+`}</span><br/>
                    Lines of code written
                </div>
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">{`${calculateRefactorsMade()}+`}</span><br/>
                    Refactors made
                </div>
                <div className="w3-quarter w3-section">
                    <span className="w3-xlarge">{`${calculateProjectsStarts()}+`}</span><br/>
                    Projects starts
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
