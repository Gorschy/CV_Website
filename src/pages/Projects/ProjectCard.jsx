import React from 'react';
import "./ProjectCard.css";
import GitHubIcon from './Assets/githugb.svg';
import Redirect from './Assets/redirect-website.svg';
import Download from './Assets/download.svg';

const ProjectCard = ({ title, description, link, tags, githubLink, linkType}) => {
  return (
    <div className="project-card">
        <h3>{title}</h3>
        <hr />
        <p>{description}</p>
        <div className="icon-container">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <img src={GitHubIcon} alt="GitHub" />
          </a>
          {linkType === "redirect" && (
            <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Redirect Link">
              <img src={Redirect} alt="Redirect" />
            </a>
          )}
          {linkType === "download" && (
            <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Download Link">
              <img src={Download} alt="Download" />
            </a>
          )}
        </div>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
    </div>
  );
};

export default ProjectCard;
