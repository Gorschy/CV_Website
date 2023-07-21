import React from 'react';
import "./ProjectCard.css";
const ProjectCard = ({ title, image, description, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
