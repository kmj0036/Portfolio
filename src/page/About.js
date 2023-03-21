import React from 'react';
import './About.css';
import { FaHtml5,FaCss3Alt,FaReact,FaAws,FaGitAlt,FaGithubSquare } from "react-icons/fa";
import {DiJavascript} from "react-icons/di"
import {SiRedux,SiTypescript,SiHeroku} from "react-icons/si"
const About = () => {
    return (
        <div id='all'>
            <h2>My SKILLS</h2>
            <div id='inner'>
                <div id='leftside'>
                    <h3>Front End</h3>
                    <p>HTML<FaHtml5/></p>
                    <p>CSS<FaCss3Alt/></p>
                    <p>JS<DiJavascript/></p>
                    <p>React<FaReact/></p>
                    <p>Redux<SiRedux/></p>
                    <p>Typescript<SiTypescript/></p>
                </div>
                <div id='rightside'>
                    <div id='dep'>
                        <h3>Deployment</h3>
                        <FaAws/>   
                        <SiHeroku/>
                    </div>
                    <div id='vercon'>
                        <h3>Version Control</h3>
                        <FaGitAlt/>
                        <FaGithubSquare/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;