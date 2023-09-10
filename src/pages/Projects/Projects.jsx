import React from 'react';
import ProjectCard from './ProjectCard';
import Unit_Converter from './Assets/unit_converter.png'
import PyDoKu from './Assets/PyDoKu.png'
import './Projects.css'

const Projects = () => {
  // Replace this with actual data
  const projects = [
    { 
      title: 'RPP', 
      image: 'image2.png', 
      description: 'Description for project 6.',
      link: '#',
      tags: ['React', 'AWS'],
      githubLink: 'https://github.com/your-repo-link-for-rpp'
    },
    { 
      title: 'Pathfinding & Sorting Visualizer', 
      image: 'image2.png', 
      description: 'Description for project 5.',
      link: '#',
      tags: ['React', 'JavaScript', 'Algorithms'],
      githubLink: 'https://github.com/your-repo-link-for-visualizer'
    },
    { 
      title: 'Canvas: Text, Particles & Animations', 
      image: 'image2.png', 
      description: 'Description for project 4.',
      link: '#',
      tags: ['JavaScript', 'HTML', 'Canvas'],
      githubLink: 'https://github.com/your-repo-link-for-canvas-animations'
    },
    { 
      title: 'Textemon', 
      image: 'image2.png', 
      description: 'A textbased terminal RPG using C++ and ASCII art',
      link: '#',
      tags: ['C++'],
      githubLink: 'https://github.com/your-repo-link-for-textemon'
    },
    { 
      title: 'PyDoKu', 
      image: PyDoKu, 
      description: 'A simple sudoku game built using python and kivy to practice complete software development life cycle.',
      link: 'https://pydoku.s3.ap-southeast-2.amazonaws.com/PyDoKu.exe',
      tags: ['Python', 'Kivy', 'Algorithms'],
      githubLink: 'https://github.com/your-repo-link-for-pydoku'
    },
    { 
      title: 'Unit Converter', 
      image: Unit_Converter, 
      description: 'A unit converter built using python and PyQt to learn some fundamentals',
      link: 'https://pyqt-unit-converter.s3.ap-southeast-2.amazonaws.com/unit-converter.exe',
      tags: ['Python', 'PyQt'],
      githubLink: 'https://github.com/your-repo-link-for-unit-converter'
    },
];



  return (
    <div className="project-page">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index} 
          title={project.title} 
          image={project.image} 
          description={project.description} 
          onClick={() => window.open(project.link)}
          tags={project.tags}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );

};

export default Projects;
