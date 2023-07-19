import React from 'react';
import ProjectCard from './ProjectCard';
import Unit_Converter from './Assets/Unit_Converter.png'
import './Projects.css'

const Projects = () => {
  // Replace this with actual data
  const projects = [
    { title: 'Unit_Converter', image: Unit_Converter, description: 'This is a PyQt-based Unit Converter that can handle conversions between various units of Length, Temperature, Area, Weight, and Time. It provides an intuitive GUI, and automatically converts as the user enters values. The conversion logic is implemented in Python.' },
    { title: 'Textemon', image: 'image2.png', description: 'Description for project 2.' },
    { title: 'PyDoKu', image: 'image2.png', description: 'Description for project 2.' },
    { title: 'Canvas: Text, Particles & Animations', image: 'image2.png', description: 'Description for project 2.' },
    { title: 'Pathfinding & Sorting Visualizer', image: 'image2.png', description: 'Description for project 2.' },
    { title: 'RPP', image: 'image2.png', description: 'Description for project 2.' },
  ];

  return (
    <div className="project-page">
      {projects.map((project, index) => (
        <ProjectCard key={index} title={project.title} image={project.image} description={project.description} />
      ))}
    </div>
  );

};

export default Projects;
