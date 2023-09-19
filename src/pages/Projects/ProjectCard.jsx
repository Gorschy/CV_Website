import React from 'react';
import "./ProjectCard.css";
import GitHubIcon from './Assets/githugb.svg';
import Redirect from './Assets/redirect-website.svg';
import Download from './Assets/download.svg';

const ProjectCard = ({ title, description, onClick, tags, githubLink }) => {
  return (
    <div className="project-card">
        <h3>{title}</h3>
        <hr />
        <p>{description}</p>


        <hr />
        <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
            <img src={GitHubIcon} alt="GitHub" />
        </a>

        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
  );
};


export default ProjectCard;
