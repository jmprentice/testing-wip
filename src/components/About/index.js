import React from "react";
import Page from '../Page/index.js';

const About = () => {
    return (
        <div className="About">
            <Page>
                <h1>About</h1>
                <h2>Editorial Team</h2>
                <ul>
                    <li>Emily Budhram, student, Boston University</li>
                    <li>Victoria Calandrino, student, Boston University</li>
                    <li>Esteban Dominguez-Lash, student, Boston University</li>
                    <li>Magdalene Farren, student, Boston University</li>
                    <li>Christopher Norman, student, Boston University</li>
                    <li>Jason Prentice, Senior Lecturer, Boston University Writing Program and Core Curriculum</li>
                    <li>Venette Simon, student, Boston University</li>
                    <li>Cassandra White, student, Boston University</li>
                    <li>Katelyn Willim, student, Boston University</li>
                    <li>Tommy Zhao, student, Boston University</li>
                </ul>
                <h2>Contact</h2>

                <h2>Special Thanks</h2>
                <p>This project benefited from the generous support of the following organizations and individuals:</p>
                <ul>
                    <li>The 2018 National Endowment for the Humanities Institute Digital Editions, Digital Corpora, and New Possibilities for the Humanities in the Academy and Beyond provided the instructor with a foundation in skills and knowledge necessary to teach the class.</li>
                    <li>Boston University’s CAS Undergraduate Program Office purchased licenses for oXygen XML Editor, the software used by the students for their XML encoding of Genesis.</li>
                    <li>Northeastern University’s Sarah Connell and Syd Bauman provided in-depth guidance on transforming the students’ XML into TEI-conforming XML.</li>
                    <li>Jennifer Prentice used CeTEIcean to transform the TEI into this website.</li>
                    <li>Vika Zafrin co-developed and co-taught the initial Spring 2019 version of the course, grounding it in a range of digital humanities skills, topics, and methods. Her contributions carried over to the Fall 2020 iteration, which produced this edition. Without her extensive collaboration, this project and this edition would likely never have happened.</li>
                </ul>
            </Page>
        </div>
    );
}

export default About;