import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'

const Projects = () => {
  // Replace this with actual data
  const projects = [
    { 
      title: 'RPP', 
      description: 'Description for project 6.',
      link: '#',
      tags: ['React', 'AWS'],
      githubLink: 'https://github.com/Gorschy/RPP',
      linkType: 'redirect'
    },
    { 
      title: 'Pathfinding & Sorting Visualizer', 
      description: 'Description for project 5.',
      link: '#',
      tags: ['React', 'JavaScript', 'Algorithms'],
      githubLink: 'https://github.com/Gorschy/Pathfinding-and-Sorting-Visualizer',
      linkType: 'redirect'
    },
    { 
      title: 'Canvas: Text, Particles & Animations', 
      description: 'Description for project 4.',
      link: '#',
      tags: ['JavaScript', 'HTML', 'Canvas'],
      githubLink: 'https://github.com/Gorschy/Canvas-Particle-Animation',
      linkType: 'redirect'
    },
    { 
      title: 'Textemon', 
      description: 'A text based terminal game that was created using C++ to learn the language and have some fun. I used ASCII art as sprites and made a simple turn based battler.',
      link: '#',
      tags: ['C++'],
      githubLink: 'https://github.com/Gorschy/Textemon',
      linkType: 'download'
    },
    { 
      title: 'PyDoKu', 
      description: 'A simple sudoku application capable of generating and solving sudoku puzzles  using a backtracking algorithm. This application was built using Python and the Kivy GUI framework.',
      link: 'https://pydoku.s3.ap-southeast-2.amazonaws.com/PyDoKu.exe',
      tags: ['Python', 'Kivy', 'Algorithms'],
      githubLink: 'https://github.com/Gorschy/PyDoKu',
      linkType: 'download'
    },
    { 
      title: 'Unit Converter', 
      description: 'An extremely basic unit converter created to learn the basics of Python and application development. The PyQt framework was used to create a GUI users can interact with.',
      link: 'https://pyqt-unit-converter.s3.ap-southeast-2.amazonaws.com/unit-converter.exe',
      tags: ['Python', 'PyQt'],
      githubLink: 'https://github.com/Gorschy/Unit_Converter',
      linkType: 'download'

    },
];



  return (


    <div>
      <div className="heading-container">
        <h3 className="heading"><span className='highlight'>03. </span> Projects I've Worked On</h3>
      </div>
      <div className="project-page">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index} 
          title={project.title} 
          description={project.description} 
          onClick={() => window.open(project.link)}
          link={project.link}
          tags={project.tags}
          githubLink={project.githubLink}
          linkType={project.linkType}
        />
      ))}
    </div>
    </div>
  );

};

export default Projects;
