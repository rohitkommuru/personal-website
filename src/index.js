import React from 'react';
import ReactDOM from 'react-dom';
import './MainPage.css';
import Experience from './Experience.js'
import NavBar from './NavBar.js'
import Projects from './Projects.js'
import Footer from './Footer.js'

function MainPage() {
  return (
      <div>
        <NavBar /> 
        <Experience />
        <Projects />
        <Footer />
      </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainPage />);

// Deprecated Code 
/* 
div id="container" className="clearfix">
        <div id="text-area">
          <div id="Education">
            <h2>Education</h2>
            <p>
              University of Maryland College Park 2021-2025
              <br />
              B.S Computer Science & Statistics Minor
            </p>
          </div>

          <div id="Projects">
            <h2>Projects</h2>
            <h3>Template Matching</h3>
            <p>
              Created a template matching algorithm using OpenCV and edge
              detection that is able to differentiate between images of normal
              barrels and traffic barrels.
            </p>
            <h3>Document Manager</h3>
            <p>
              Developed software in C that is able to create, store, and modify
              text files using custom Linux commands. Utilized text parsing and
              I/O to retrieve user input from the command line and generate
              files.
            </p>
            <h3>Quantum Comparison</h3>
            <p>
              Developed the traveling salesman problem in Qiskit and ran it on
              IBM’s quantum simulators to determine the efficiency of trapped
              ion and superconducting quantum computers. Presented findings at
              the annual FIRE summit at the University of Maryland.
            </p>
          </div>

          <div id="Experience">
            <h2>Experience</h2>
            <h3>FIRE: The First Year Innovation and Research Experience</h3>
            <h4>Peer Mentor Sept 2021 - Dec 2022</h4>
            <p>
              Working as a peer mentor at the University of Maryland’s selective
              FIRE program. Acts as a bridge between the professor and students,
              and mentors fellow students on material covered in class and their
              independent projects in held lab hours.
            </p>
            <p>
              Leading a group of students to design and implement an independent
              quantum machine learning project. Proposal will undergo approval
              and revision by a professor, and the completed project will be
              presented at the annual FIRE Summit and other undergraduate
              research events at the University of Maryland.
            </p>
            <p>
              Completed assignments that involved developing onboard software
              for drones to execute. Used various libraries such as OpenCV,
              NumPy, and Matplotlib in order to develop detection algorithms for
              drones to use. Created a template matching algorithm using the
              OpenCV library which differentiates between a traffic barrel and
              normal barrels, with uses on other media.
            </p>
            <h3>BioBuilder Club</h3>
            <h4>Leader Sept 2018 - June 2021</h4>
            <p>
              Part of the SplinterCell Project team, which used synthetic
              biology for the removal of splinters. Tested the expression of a
              TxTI system. Co-author of research paper published in BioTreks
              journal with medals in Biosafety & Ethics, Scientific Rigor, and
              Innovation.
            </p>
            <p>
              Lead the development of the Blood Clotting Project which uses
              synthetic biology to accelerate the coagulation of blood in
              hemophiliacs using genetically modified E.coli. Co-author of a
              design brief published in BioTreks journal which earned the
              Innovation medal.
            </p>
            <p>
              Lead the development of the Legionella Detector Project, which
              used genetically modified E.coli to detect the presence of
              Legionella .spp in water. Co-author of a design brief published in
              BioTreks journal awarded with Innovation, Scientific Rigor, and
              Problem Solving medals.
            </p>
          </div>
        </div>

        <div id="left-list-area">
          <h2>Rohit Kommuru</h2>
          <img
            id="profile-pic"
            src="https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320944.jpg"
            alt="Profile"
          />
          <p>
            Sophomore undergraduate student at the University of Maryland
            looking for a technology internship. Has previous experience leading
            and working in teams in quantum computing, computer vision, and
            synthetic biology. Completed multiple projects using C, Java, and
            Python, and currently working on developing front end programming
            skills.
          </p>
          <div id="ContactInfo">
            <h4>Contact Info</h4>
            <ul>
              <li>rohitkommuru@gmail.com</li>
              <li>978-424-8672</li>
              <li>15 Meyer Hill Drive, Acton, MA 01720</li>
            </ul>
          </div>
          <div id="RelevantCoursework">
            <h4>Relevant Coursework</h4>
            <ul>
              <li>Algorithms</li>
              <li>Organization of Programming Languages</li>
              <li>Calculus I, II, III</li>
              <li>Linear Algebra</li>
              <li>Discrete Math</li>
              <li>Data Structures</li>
              <li>Statistics</li>
              <li>Intro to Object Oriented Programming I, II</li>
            </ul>
          </div>

          <div id="ComputerSkills">
            <h4>Programming Skills</h4>
            <ul>
              <li>Linux</li>
              <li>Python</li>
              <li>C</li>
              <li>Java</li>
              <li>Assembly</li>
              <li>OpenCV</li>
              <li>MATLAB</li>
              <li>HTML, CSS, JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
*/ 