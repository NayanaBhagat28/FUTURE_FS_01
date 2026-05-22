import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGraduationCap, FaCode, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Learn more about Nayana Bhagath - Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, Full Stack Development, and innovative technologies."
        />
      </Helmet>

      <section id="about" className="section about">
        <div className="container">

          <h2 className="section-title" data-aos="fade-up">
            About Me
          </h2>

          <p className="section-subtitle">
            Computer Science Engineering Student | AI & ML Enthusiast | Full Stack Development Learner
          </p>

          <div className="about-content">

            <div className="about-text" data-aos="fade-right">

              <p className="about-intro">
                Hi, I'm <strong>Nayana V</strong>, a passionate Computer
                Science Engineering student with a strong interest in Artificial
                Intelligence, Machine Learning, and Full Stack Web Development.
                I am enthusiastic about building responsive, user-centric, and
                innovative digital solutions while continuously enhancing my
                technical expertise and creative problem-solving abilities.
              </p>

              <p className="about-description">
                My areas of interest include Machine Learning, Deep Learning,
                Natural Language Processing, Cybersecurity, Computer Vision,
                and modern web technologies. I have worked on projects such as
                Plant Disease Detection System, Email Spam & Phishing Detection
                System, and CTI-NLP Enhanced Threat Analyzer, which strengthened
                my practical understanding of intelligent systems and AI-driven
                applications.
              </p>

              <p className="about-description">
                Along with academics, I actively participate in innovation-driven
                programs and technology learning initiatives. I am a
                <strong> SamShoDhana 2025 Fellow</strong> under
                <strong> VTU-VRIF</strong> and a participant in
                <strong> Pragati Path to Future (Cohort-8)</strong> at
                <strong> Infosys Springboard</strong>. I am passionate about
                continuous learning, innovation, and leveraging technology to
                create meaningful impact through modern digital solutions.
              </p>

            </div>

            <div className="about-cards">

              <div
                className="about-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="card-icon">
                  <FaGraduationCap />
                </div>

                <h3>Education</h3>

                <p>Computer Science Engineering</p>

                <p className="card-subtitle">
                  Artificial Intelligence & Machine Learning
                </p>
              </div>

              <div
                className="about-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="card-icon">
                  <FaCode />
                </div>

                <h3>Technical Skills</h3>

                <p>AI & Full Stack Development</p>

                <p className="card-subtitle">
                  HTML, CSS, JavaScript, Node.js, MongoDB, Python
                </p>
              </div>

              <div
                className="about-card"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="card-icon">
                  <FaLightbulb />
                </div>

                <h3>Achievements</h3>

                <p>SamShoDhana 2025 Fellow</p>

                <p className="card-subtitle">
                  VTU-VRIF & Infosys Springboard Participant
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;