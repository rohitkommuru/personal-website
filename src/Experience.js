import React from 'react';

function Experience() {
    return (
        <div>
            <title> Experience </title>
            <h1> Perception and Robotics Group - Undergraduate Researcher</h1>
            <h2> June 2024 - Present </h2> 
            <ul>
                <li> Modeling the visomotor embodiment of robots alongside Dr. Levi Burner </li>
                <li> Used Python and robot modeling software MuProCo or something</li>
            
            </ul>
            <h1>Harvey Mudd REU - Machine Learning Research Assistant</h1>
            <h2> May 2023 - August 2023 </h2> 
            <ul> 
                <li> Conducted research alongside Prof. Calden Wloka and three other undergrads looking into the spatial and
temporal biases of action recognition models. Participated in weekly sprints and used agile SDE practices.</li>
                <li> Researched and implemented computer vision machine learning tools such as Grad_CAM, I3D, and
SlowFast using PyTorch, OpenCV, and other Python libraries and visualized output data as 3D heatmaps.</li>
                <li> Developed a dataset generator to generate synthetic videos to train and test machine learning models, and
designed different video datasets to conduct experiments on SlowFast and I3D.</li>
            </ul>
            <h1>FIRE: The First-Year Innovation and Research Experience - Peer Mentor</h1>
            <h2> Sept 2021 - Dec 2022 </h2>
            <ul> 
                <li> Led a group of students to design and implement an independent quantum machine learning
project. Compared the efficiencies of superconducting quantum computers and trapped ion
quantum computers on the traveling salesman problem and presented findings at the University of
Maryland’s FIRE summit.</li>
                <li> Completed assignments that involved developing detection algorithms for drones to execute.</li>
                <li> Created a template matching algorithm using the OpenCV library which differentiates between a
traffic barrel and normal barrels, with uses on other media. </li>
            </ul>


        </div>

    );
   
    
};

export default Experience;