import React from 'react';
import JS from '../images/icons/icons8-javascript-96.svg';
import TS from '../images/icons/icons8-typescript-96.svg';
import ReactIcon from '../images/icons/icons8-react-native.svg';
import Vue from '../images/icons/icons8-vue-js-96.svg';
import MaterialUI from '../images/icons/icons8-material-ui-96.svg';
import Node from '../images/icons/icons8-nodejs-96.svg';
import Express from '../images/icons/expressjs-ar21.svg';
import Python from '../images/icons/icons8-python-96.svg';
import Django from '../images/icons/icons8-django-96.svg';
import Firebase from '../images/icons/icons8-firebase-96.svg';

const Skills = () => {
    return (
        <React.Fragment>
            <p className="w3-large w3-center">Im really good at:</p>
            <p className="w3-wide"><i className="fa fa-code"/>Frontend Skills</p>
            <div className="w3-light-grey">
                <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: '90%'}}>90%
                </div>
            </div>
            <p className="w3-wide"><i className="fa fa-laptop"/>Backend Skills</p>
            <div className="w3-light-grey">
                <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: '70%'}}>70%
                </div>
            </div>
            <p className="w3-wide"><i className="fa fa-terminal"/>Hard Skills</p>
            <div className="w3-light-grey">
                <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: '85%'}}>85%
                </div>
            </div>
            <p className="w3-wide"><i className="fa fa-users"/>Soft Skills</p>
            <div className="w3-light-grey">
                <div className="w3-container w3-padding-small w3-dark-grey w3-center" style={{width: '95%'}}>95%
                </div>
            </div>

            <div className="w3-row w3-center w3-padding-top-32">
                <h5 className="w3-center">
                    My technology stack
                </h5>
                <div className="skills_container">
                    <img src={JS} alt="javascript" className={"skill_item_container"}/>
                    <img src={TS} alt="typescript" className={"skill_item_container"}/>
                    <img src={ReactIcon} alt="ReactJS" className={"skill_item_container"}/>
                    <img src={Vue} alt="VueJS" className={"skill_item_container"}/>
                    <img src={MaterialUI} alt="MaterialUI" className={"skill_item_container"}/>
                </div>
                <div className="skills_container">
                    <img src={Node} alt="nodejs" className={"skill_item_container"}/>
                    <img src={Express} alt="Express" className={"skill_item_container"}/>
                    <img src={Python} alt="Python" className={"skill_item_container"}/>
                    <img src={Django} alt="Django" className={"skill_item_container"}/>
                    <img src={Firebase} alt="Firebase" className={"skill_item_container"}/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Skills;
