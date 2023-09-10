import React from 'react';
import "./ProjectCard.css";
const ProjectCard = ({ title, image, description, onClick, tags, githubLink }) => {
  return (
    <div className="project-card" onClick={onClick}>
        <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};


export default ProjectCard;
