import React from 'react';
import ProjectCard from './ProjectCard';
import Unit_Converter from './Assets/unit_converter.png'
import './Projects.css'

const Projects = () => {
  // Replace this with actual data
  const projects = [
    { 
      title: 'Unit_Converter', 
      image: Unit_Converter, 
      description: 'This is a PyQt-based Unit Converter that can handle conversions between various units of Length, Temperature, Area, Weight, and Time. It provides an intuitive GUI, and automatically converts as the user enters values. The conversion logic is implemented in Python.',
      link: 'https://pyqt-unit-converter.s3.ap-southeast-2.amazonaws.com/unit-converter.exe' 
    },
    { 
      title: 'Textemon', 
      image: 'image2.png', 
      description: 'Description for project 2.',
      link: '#', // Placeholder for actual link
    },
    { 
      title: 'PyDoKu', 
      image: 'image2.png', 
      description: 'Description for project 3.',
      link: '#', // Placeholder for actual link
    },
    { 
      title: 'Canvas: Text, Particles & Animations', 
      image: 'image2.png', 
      description: 'Description for project 4.',
      link: '#', // Placeholder for actual link
    },
    { 
      title: 'Pathfinding & Sorting Visualizer', 
      image: 'image2.png', 
      description: 'Description for project 5.',
      link: '#', // Placeholder for actual link
    },
    { 
      title: 'RPP', 
      image: 'image2.png', 
      description: 'Description for project 6.',
      link: '#', // Placeholder for actual link
    },
];


  return (
    <div className="project-page">
      {projects.map((project, index) => (
        <ProjectCard key={index} title={project.title} image={project.image} description={project.description} onClick={() => window.open(project.link)} />
      ))}

    </div>
  );

};

export default Projects;
