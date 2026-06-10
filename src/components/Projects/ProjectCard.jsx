import React from 'react';
import "./ProjectCard.css";
import Github from '../../assets/github.svg';
import Redirect from './Assets/redirect-website.svg';
import Download from './Assets/download.svg';

const LINK_ICONS = {
  redirect: { src: Redirect, label: 'Visit Website' },
  download: { src: Download, label: 'Download' },
};

const ProjectCard = ({ title, description, link, tags, githubLink, linkType }) => {
  const linkIcon = LINK_ICONS[linkType];

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <hr />
      <p>{description}</p>
      <div className="icon-container">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
          <img src={Github} alt="GitHub" />
        </a>
        {linkIcon && (
          <a href={link} target="_blank" rel="noopener noreferrer" aria-label={linkIcon.label}>
            <img src={linkIcon.src} alt={linkIcon.label} />
          </a>
        )}
      </div>
      <div className="project-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;