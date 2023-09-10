import React from 'react';
import './Biography.css'; //Make sure to import your CSS file
import Bachelors from './Bachelors.png';

const Biography = () => {
  return (
    <div className="biography">
      <div className="div1">
        <p>
        Hello, I'm Nathan, a versatile professional with a deep interest for AI and game development, as well as a serious commitment to website interconnectivity.  With a Bachelor's degree in Computer Science (Software Engineering) from the University of Wollongong, I've acquired a solid foundation in programming languages including Java, C++, Python, and front-end web technologies such as HTML, CSS, and JavaScript.
        </p>

        <p>
        I've had the privilege to apply these skills to a more professional experience compared to my academic projects, which involved co-leading a software development project for an environmentally conscious web application at Lord of the Trees.
        </p>

        <p>
        These experiences have allowed me to acquire proficiency in AWS Microservices and GitHub, developing effective strategies for version control including implementing a CI/CD pipeline, software collaboration in a larger team.
        </p>

        <p>
        Aside from my technical skills, I bring strong communication skills, a high level of adaptability, and a dedication to organization and task prioritization to every role. Whether it's managing a project using Jira, Agile, and Waterfall methodologies, I am well equipped to make significant contributions in a range of professional environments.
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
