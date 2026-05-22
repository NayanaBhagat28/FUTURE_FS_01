import React from 'react';
import { Helmet } from 'react-helmet-async';

import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap
} from 'react-icons/fa';

import {
  SiTensorflow,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiPandas,
  SiScikitlearn
} from 'react-icons/si';

import './Skills.css';

const Skills = () => {

  const skillCategories = [

    {
      category: 'Artificial Intelligence & Machine Learning',

      skills: [
        { name: 'Python', icon: <FaPython />, level: 90 },

        { name: 'Machine Learning', icon: <SiScikitlearn />, level: 88 },

        { name: 'Deep Learning', icon: <SiTensorflow />, level: 85 },

        { name: 'TensorFlow', icon: <SiTensorflow />, level: 82 },

        { name: 'Computer Vision', icon: <FaDatabase />, level: 80 },

        { name: 'NLP', icon: <SiPandas />, level: 84 }
      ]
    },

    {
      category: 'Full Stack Web Development',

      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },

        { name: 'CSS3', icon: <FaCss3Alt />, level: 92 },

        { name: 'Bootstrap', icon: <FaBootstrap />, level: 88 },

        { name: 'JavaScript', icon: <FaJs />, level: 90 },

        { name: 'React.js', icon: <FaReact />, level: 85 },

        { name: 'Node.js', icon: <FaNodeJs />, level: 82 },

        { name: 'Express.js', icon: <SiExpress />, level: 80 }
      ]
    },

    {
      category: 'Database & Development Tools',

      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },

        { name: 'MySQL', icon: <SiMysql />, level: 82 },

        { name: 'Git & GitHub', icon: <FaGitAlt />, level: 88 },

        { name: 'CRUD Operations', icon: <FaDatabase />, level: 86 },

        { name: 'EJS', icon: <FaReact />, level: 78 },

        { name: 'Data Analysis', icon: <SiPandas />, level: 80 }
      ]
    }

  ];

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Technical skills of Nayana Bhagath including Artificial Intelligence, Machine Learning, MERN Stack Development, Python, JavaScript, MongoDB, and modern web technologies."
        />
      </Helmet>

      <section id="skills" className="section skills">

        <div className="container">

          <h2 className="section-title" data-aos="fade-up">
            Skills & Technologies
          </h2>

          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Technical expertise in Artificial Intelligence, Machine Learning,
            Full Stack Development, and modern software technologies.
          </p>

          <div className="skills-container">

            {skillCategories.map((category, index) => (

              <div
                key={category.category}
                className="skill-category"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >

                <h3 className="category-title">
                  {category.category}
                </h3>

                <div className="skills-grid">

                  {category.skills.map((skill) => (

                    <div key={skill.name} className="skill-item">

                      <div className="skill-header">

                        <div className="skill-icon">
                          {skill.icon}
                        </div>

                        <span className="skill-name">
                          {skill.name}
                        </span>

                      </div>

                      <div className="skill-bar">

                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                          data-level={skill.level}
                        >

                          <span className="skill-percentage">
                            {skill.level}%
                          </span>

                        </div>
                      </div>
                    </div>

                  ))}

                </div>
              </div>

            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;