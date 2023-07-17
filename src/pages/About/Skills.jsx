import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import Modal from "react-modal";
import './modal.css';
import './Skills.css'
Modal.setAppElement('#root'); // This line is needed for accessibility reasons

const Skills = () => {

  let svgWidthInPixels = window.innerWidth * 0.85;
  let svgHeightInPixels = window.innerHeight * 0.85;
  const padding = 100; // You can adjust the padding as you like
  window.addEventListener('resize', () => {
    svgWidthInPixels = window.innerWidth * 0.85;
    svgHeightInPixels = window.innerHeight * 0.85;
    // Update the node target positions here...
});


  const ref = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({title: "", description: ""});

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const center = { x: width / 2, y: height / 2, label: "Skills", size: 75, color: "Black" };

    var nodeSize = Math.min(width, height) * 0.05;
    var nodeDistance = width * 0.10;
    

    const descriptions = {
      'HTML | CSS | JavaScript': 'Diligent Web Developer with comprehensive knowledge and hands-on experience in HTML, CSS, JavaScript, and React. Demonstrated ability to build, optimize, and deploy aesthetically pleasing and functionally robust web applications. 1) Constructed a canvas application utilizing advanced JavaScript to create interactive particle and text animations, displaying proficiency in DOM manipulation, and rendering techniques. 2) Designed and implemented a personal CV website using React, showcasing my personal brand and information effectively while demonstrating the ability to create reactive, interactive layouts. 3) Built a Sorting and Pathfinding Visualizer with React, highlighting my understanding of complex algorithms and ability to translate them into a user-friendly, visual interface. These projects not only illustrate my skillset in using the core web development technologies but also my knack for creating dynamic, interactive user experiences and my understanding of critical web performance considerations.',
      'Python': 'Experienced Python Developer with a proven ability to design, develop, and deploy intricate applications. Successfully built three substantial applications, each demonstrating a different facet of Python programming. 1) Developed a Sudoku application that algorithmically generates puzzles and validates solutions, showcasing a thorough understanding of algorithms and data structures. 2) Created a comprehensive Unit Converter application, converting between diverse units of measurements including length, weight, and temperature. This project demonstrates my competence in managing complex logic and mathematical computations. 3) Designed and implemented a Web Scraper capable of extracting, parsing, and organizing data from web sources, demonstrating my proficiency in web technologies and data manipulation, as well as a strong understanding of HTML and HTTP protocols. My experience in Python programming, coupled with these specialized applications, exhibits my versatility and problem-solving capabilities.',
      'C++': 'Proficient C++ Developer with an emphasis on object-oriented programming and efficient memory management. Successfully designed and implemented a text-based Terminal RPG project, demonstrating my comprehensive understanding of game logic, user input handling, and console output formatting. In the development of the RPG, I effectively used advanced C++ features to create a user-driven experience, including classes for character and enemy design, user-defined functions for game progression, and various control structures for game events. This project displays my skill in crafting complex programs, problem-solving abilities, and creativity in software design.',
      'Cloud Services': 'Experienced in leveraging Amazon Web Services (AWS) for the deployment and management of web applications. Proficient in a range of AWS microservices, effectively using them to optimize and secure application performance. 1) Successfully utilized AWS Amplify to automate the deployment process, demonstrating a strong understanding of CI/CD principles. 2) Employed S3 Buckets for robust and scalable storage solutions, exhibiting my knowledge of AWS object storage service. 3) Implemented user authentication and access control with AWS Cognito, showcasing competency in managing user identities and data security. 4) Utilized DynamoDB for its NoSQL database service to efficiently store and retrieve user data, demonstrating an understanding of database management and data-driven application design. 5) Used GraphQL with AWS to manage APIs, showcasing a mastery of both traditional RESTful and modern API management methods. My experience in AWS not only displays my technical skills in cloud services but also showcases my ability to construct secure, scalable, and efficient web applications.',
      'Algorithms and Data Structures': 'Proficient in Algorithms and Data Structures, acquired through rigorous computer science studies at the university level, and subsequently applied to real-world projects. Strong understanding of diverse algorithms and data structures, their time and space complexities, and appropriate application scenarios. 1) Built a Sudoku application that efficiently generates and validates puzzles, effectively leveraging backtracking algorithm for puzzle generation and grid traversal. 2) Developed a Sorting and Pathfinding Visualizer, employing an array of algorithms such as Quick Sort, Merge Sort, Dijkstras, and A* search algorithm. This project exemplifies my understanding of sorting and pathfinding algorithms and my ability to visually translate complex processes. These projects not only evidence my comprehensive understanding of algorithms and data structures, but they also demonstrate my ability to apply theoretical knowledge in practical problem-solving contexts.',

      'Communication': 'Strong communicator, with expertise in both written and verbal communication developed across diverse professional roles. 1) As a Customer Care Consultant at Satori Assured, I employed empathetic and clear communication to address customer inquiries and concerns through an in-house ticketing system and email. This experience honed my ability to deliver precise, timely responses that effectively resolved customer issues. 2) During my tenure as a co-project lead at Lord of the Trees, I emphasized open and transparent communication within a team of developers. Facilitating daily stand-up meetings and sharing Scrum Master responsibilities, I demonstrated my ability to relay complex information effectively, coordinate team activities, and articulate problem-solving strategies. These experiences underscore my ability to adapt my communication style to different contexts, from customer service to team coordination, effectively meeting the needs of diverse audiences.',
      'Problem-Solving': 'Skilled problem-solver with a demonstrated ability to address complex challenges in a range of professional contexts. 1) In my role at Sage Cleaning, I successfully managed multiple responsibilities in a highly independent work environment, requiring the ability to solve logistical and operational challenges on a daily basis, demonstrating my capacity for quick thinking and resourcefulness. 2) As a co-project lead at Lord of the Trees, I frequently encountered and overcame development obstacles. Implementing daily stand-up meetings and participating in problem-solving strategies, I showcased my ability to identify issues, analyze possible solutions, and collaboratively execute effective strategies. These experiences demonstrate my proficiency in problem-solving, indicating my ability to quickly analyze problems, generate solutions, and apply effective strategies in real-time.',
      'Teamwork': 'Strong team player with a proven track record of effective collaboration in diverse professional settings. 1) At Satori Assured, I was a part of a mid-sized team focused on customer service, where I had to collaborate with others to effectively handle customer inquiries and provide prompt and professional responses. 2) In my role at Lord of the Trees, I was a co-project lead, collaborating with a team of developers to design and develop a web-based application. I contributed to daily stand-up meetings, shared Scrum Master responsibilities, and worked cooperatively with the team to overcome development challenges. These experiences have enabled me to develop a strong understanding of team dynamics, enhance my collaborative abilities, and effectively contribute to team goals.',
      'Organization': 'Highly organized individual with a demonstrated ability to manage tasks, time, and resources effectively. 1) In my contract role at Sage Cleaning, I consistently managed multiple responsibilities in a highly independent work environment. This involved organizing and prioritizing tasks, adapting to client needs, and maintaining clear communication with Sage Operations to ensure smooth operations. 2) As a co-project lead at Lord of the Trees, I effectively managed development tasks and deadlines while coordinating with a team of developers. We utilized Jira as a project management tool to track progress and assign responsibilities, demonstrating my capacity to organize resources, prioritize work, and deliver results on schedule. These experiences underscore my strong organizational abilities, highlighting my proficiency in task management, prioritization, and effective use of resources to achieve set goals.',
      'Quick-Learner': 'Eager and quick learner, with the demonstrated ability to rapidly acquire new skills and adapt to new environments. 1) During my time at Satori Assured, I quickly adapted to an in-house ticketing system and professional email communication, evidencing my ability to learn and utilize new tools for effective customer service. 2) In my project lead role at Lord of the Trees, I worked with a diverse suite of AWS microservices, indicating my ability to rapidly understand and employ complex software tools for the efficient development and deployment of a web-based application. These experiences highlight my capability to quickly assimilate new knowledge and techniques, adapt to new environments, and effectively apply learned skills in real-world contexts.',
    };

    const nodes = [
      center,
      { label: 'HTML | CSS | JavaScript', size: nodeSize, color: 'black', radius: nodeDistance, speed: 0 },
      { label: 'Python', size: nodeSize, color: 'black', radius: nodeDistance, speed: 0.03 },
      { label: 'C++', size: nodeSize, color: 'black', radius: nodeDistance, speed: 0.04 },
      { label: 'Cloud Services', size: nodeSize, color: 'black', radius: nodeDistance, speed: 0.04 },
      { label: 'Algorithms and Data Structures', size: nodeSize, color: 'black', radius: nodeDistance, speed: 0.04 },

      { label: 'Communication', size: nodeSize, color: 'black', radius: nodeDistance, speed: 0.04 },
      { label: 'Problem-Solving', size: nodeSize, color: 'black', radius: nodeDistance, speed: 0.04 },
      { label: 'Teamwork', size: nodeSize, color: 'black', radius: nodeDistance, speed: 0.04 },
      { label: 'Organization', size: nodeSize, color: 'black', radius: nodeDistance, speed: 0.04 },
      { label: 'Quick-Learner', size: nodeSize, color: 'black', radius: nodeDistance, speed: 0.04 },
      // The rest of your nodes go here...
    ];

    console.log(nodes);

    // Assign each node a random target position
    nodes.forEach((node, i) => {
      if (i !== 0) {
        node.x = center.x; // Initialize nodes at center
        node.y = center.y; // Initialize nodes at center
        node.targetX = padding + Math.random() * (svgWidthInPixels - 2 * padding);
        node.targetY = padding + Math.random() * (svgHeightInPixels - 2 * padding);
        node.dx = (node.targetX - center.x) * 0.01; // Adjust these factors to control speed
        node.dy = (node.targetY - center.y) * 0.01; // Adjust these factors to control speed
      }
    });

    function render() {
      nodes.forEach((node, i) => {
        if (i !== 0) {
          // Check if node has reached its target position
          if (Math.abs(node.x - node.targetX) > Math.abs(node.dx) ||
              Math.abs(node.y - node.targetY) > Math.abs(node.dy)) {
            // If not, keep updating the node's position
            node.x += node.dx;
            node.y += node.dy;
          } else {
            // If yes, set the node's position to its target position
            node.x = node.targetX;
            node.y = node.targetY;
          }
        }
      });
    
      // Draw lines
      const lines = d3
        .select(ref.current)
        .selectAll('line')
        .data(nodes);
    
      lines.join('line')
        .attr('x1', nodes[0].x) // x position of first end of the line, center node's x position
        .attr('y1', nodes[0].y) // y position of first end of the line, center node's y position
        .attr('x2', (d) => d.x) // x position of second end of the line, the other node's x position
        .attr('y2', (d) => d.y) // y position of second end of the line, the other node's y position
        .attr('stroke', 'black') // color of the line
        .attr('stroke-width', 0.5); // thickness of the line

      const u = d3
        .select(ref.current)
        .selectAll("rect")
        .data(nodes);

      u.join("rect")
      .attr("x", (d) => d.x - d.size)
      .attr("y", (d) => d.y - d.size / 2)
      .attr("width", (d) => d.size * 2)
      .attr("height", (d) => d.size)
      .attr("rx", (d) => d.size / 2)
      .attr("ry", (d) => d.size / 2)
      .attr("fill", (d) => d.color)
      // then, when opening the modal:
      .on("click", (event, i) => {
        const d = event.target.__data__;
        console.log("Clicked on:", d, i);
        if (i !== 0) {
          openModal({title: d.label, description: descriptions[d.label]});
        }
      });

      d3.select(ref.current)
      .selectAll("text")
      .data(nodes)
      .join("text")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("dy", "0.35em") 
      .text((d) => d.label)
      .attr("font-size", "10px")
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .on("click", (event, i) => {
        const d = event.target.__data__;
        console.log("Clicked on:", d, i);
        if (i !== 0) {
          openModal({title: d.label, description: descriptions[d.label]});
        }
      });
      

      requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(render);
    };
  }, []);

  return (
    <div>
      <div className="svg-container">
        <svg ref={ref} width="85vw" height="85vh" />
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Node Detail Modal"
        className="my-modal"
      >
        <h2>{modalContent.title}</h2>
        <p>{modalContent.description}</p>
        <button className="close-button" onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Skills;