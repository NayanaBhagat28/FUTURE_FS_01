import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {

  const certificates = [

    {
      id: 1,

      title: 'Data Analytics with Python',

      provider: 'NPTEL',

      year: '2026',

      description:
        'Completed NPTEL certification in Data Analytics with Python covering data analysis, statistics, and machine learning fundamentals.',

      link: '/certificates/nptel.pdf',

      category: 'Data Analytics'
    },

    {
      id: 2,

      title: 'Enterprise Design Thinking Practitioner',

      provider: 'IBM SkillsBuild',

      year: '2026',

      description:
        'Learned design thinking methodologies, innovation strategies, and user-centric problem solving approaches.',

      link: '/certificates/Enter_page-0001.jpg',

      category: 'Professional Skills'
    },

    {
      id: 3,

      title: 'AI Literacy',

      provider: 'IBM SkillsBuild',

      year: '2025',

      description:
        'Completed foundational learning in Artificial Intelligence, intelligent systems, and AI applications.',

      link: '/certificates/AILiteracy_Badge20251220-31-brhhkp.pdf',

      category: 'Artificial Intelligence'
    },

    {
      id: 4,

      title: 'SamShoDhana 2025 Fellow',

      provider: 'VTU Research & Innovation Foundation',

      year: '2025',

      description:
        'Selected as a SamShoDhana Fellow focusing on innovation, entrepreneurship, and technology-driven research.',

      link: '/certificates/samshodhana.jpeg',

      category: 'Fellowship'
    },

    {
      id: 5,

      title: 'Pragati Path to Future – Cohort 8',

      provider: 'Infosys Springboard',

      year: '2025',

      description:
        'Participated in Infosys Springboard Pragati program focused on future technologies, leadership, and professional development.',

      link: '/certificates/infosys.jpeg',

      category: 'Professional Development'
    },

    {
      id: 6,

      title: 'Power BI Workshop',

      provider: 'OfficeMaster',

      year: '2025',

      description:
        'Learned interactive dashboard creation, data visualization, and analytics using Microsoft Power BI.',

      link: '/certificates/power bi.png',

      category: 'Data Visualization'
    },

    {
      id: 7,

      title: 'Software Engineering Job Simulation',

      provider: 'JPMorgan Chase & Co. (Forage)',

      year: '2026',

      description:
        'Completed practical software engineering simulation involving REST APIs, backend integration, and agile workflows.',

      link: '/certificates/JP morgan.pdf',

      category: 'Virtual Experience'
    },

    {
      id: 8,

      title: 'Data Analytics Job Simulation',

      provider: 'Deloitte (Forage)',

      year: '2026',

      description:
        'Completed data analytics simulation focused on forensic technology, business insights, and analytical problem solving.',

      link: '/certificates/deloitte.pdf',

      category: 'Virtual Experience'
    }

  ];

  return (
    <>
      <Helmet>

        <title>
          Certificates | Nayana Bhagath
        </title>

        <meta
          name="description"
          content="Professional certifications, fellowships, workshops, and achievements of Nayana Bhagath in Artificial Intelligence, Data Analytics, and Software Development."
        />

      </Helmet>

      <section
        id="certificates"
        className="section certificates"
      >

        <div className="container">

          <h2
            className="section-title"
            data-aos="fade-up"
          >
            Certificates & Achievements
          </h2>

          <p
            className="section-subtitle"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Certifications and learning experiences that strengthen my
            technical expertise, analytical thinking, innovation,
            and professional growth.
          </p>

          <div className="certificates-grid">

            {certificates.map((cert, index) => (

              <div
                key={cert.id}
                className="certificate-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >

                <div className="certificate-header">

                  <div className="certificate-icon">
                    <FaCertificate />
                  </div>

                  <span className="certificate-category">
                    {cert.category}
                  </span>

                </div>

                <div className="certificate-content">

                  <h3 className="certificate-title">
                    {cert.title}
                  </h3>

                  <div className="certificate-meta">

                    <span className="certificate-provider">
                      {cert.provider}
                    </span>

                    <span className="certificate-year">
                      {cert.year}
                    </span>

                  </div>

                  <p className="certificate-description">
                    {cert.description}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >

                    <FaExternalLinkAlt />

                    View Certificate

                  </a>

                </div>
              </div>

            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Certificates;