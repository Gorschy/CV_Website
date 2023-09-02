import React from 'react';
import './Biography.css'; //Make sure to import your CSS file
import Bachelors from './Bachelors.png';

const Biography = () => {
  return (
    <div className="biography">
      <div className="div1">
        <p>
        Hello, I'm Nathan, a versatile professional with a deep passion for AI, game development, and website interconnectivity. I'm an AI enthusiast with a unique skillset honed through a love for gaming and years of academic and real-world experience. I excel at rapidly acquiring new knowledge, staying ahead in the fast-paced world of technology, and bringing a problem-solving mindset to every project I undertake.
        </p>

        <p>
        With a Bachelor's degree in Computer Science (Software Engineering) from the University of Wollongong, I've acquired a solid foundation in programming languages including Java, C++, Python, and front-end web technologies such as HTML, CSS, and JavaScript.
        </p>

        <p>
        I've had the privilege to apply these skills to a range of professional experiences, from co-leading a software development project for an environmentally conscious web application at Lord of the Trees to managing responsibilities in a highly independent work environment at Sage Natural Cleaning.
        </p>

        <p>
        My unique experiences have also allowed me to acquire proficiency in AWS Microservices and GitHub, developing effective strategies for version control, software collaboration, implementing and maintaining a suite of AWS Microservices.
        </p>

        <p>
        Aside from my technical skills, I bring strong communication skills, a high level of adaptability, and a dedication to organization and task prioritization to every role. Whether it's managing a project using Jira, Agile, and Waterfall methodologies, or excelling in customer service roles, I am well equipped to make significant contributions in a range of professional environments.
        </p>

        <p>
        Take a look around my portfolio to learn more about my projects, experiences, and the skills I bring to the table. If you'd like to discuss how my skills can benefit your team, please don't hesitate to get in touch.
        </p>

        <p>
        Welcome, and thank you for visiting!
        </p>

        <p>
        <strong>Nathan Gorsch</strong>
        </p>
      </div>
      <div className="div2">
        <img src={Bachelors}></img>
      </div>
    </div>
  );
};

export default Biography;
