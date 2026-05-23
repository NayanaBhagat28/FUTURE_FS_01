import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Nayana V - Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Computer Science student specializing in Artificial Intelligence and Machine Learning, passionate about developing modern web applications, exploring emerging technologies, and creating impactful digital experiences.
"
        />
      </Helmet>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <div className="hero-text">
              <p className="hero-greeting">Hello, I'm</p>

              <h1 className="hero-name">Nayana V</h1>

              <h2 className="hero-title">
                <span className="typing-text">
                  Full Stack Web Development Intern
                </span>
              </h2>

              <p className="hero-description">
                Enthusiastic AIML student with a strong foundation in modern technologies and web development. Passionate about building responsive, user-centric applications and continuously exploring innovative solutions in artificial intelligence, machine learning, and software development.

              </p>

              <div className="hero-buttons">
                <a href="/Resume.pdf" download className="btn-primary">
                  Download Resume
                </a>
              </div>

              <div className="hero-social">
                <a
                  href="https://github.com/NayanaBhagat28/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/nayana-bhagath-a98b70358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:nayanabhagath28@gmail.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            <div
              className="hero-image"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="image-wrapper">
                <div className="animated-border"></div>

                <img
                  src="/profile-photo.jpeg"
                  alt="Nayana V - Profile"
                  className="profile-photo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-mouse"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
