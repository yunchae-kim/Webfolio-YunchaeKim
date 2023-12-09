import '../styles/Resume.css';

import React, { FC, useEffect, useRef, useState } from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';

import profilePic from '../assets/images/profile.jpg';
import ContactPopup from '../components/ContactPopup';
import ProjectItem, { ProjectItemProps } from '../components/ProjectItem';
import TagsFilter from '../components/TagsFilter';
import Toast from '../components/Toast';
import projectsData from '../data/projectsData';
import { decodeEmail, encodeEmail } from '../utils/emailObfuscation';

const Resume: FC = () => {
  // State for tags filter
  const [activeTags, setActiveTags] = useState<string[]>(['All']);
  const [filteredProjects, setFilteredProjects] = useState<ProjectItemProps[]>(projectsData);

  // Filter projects by tags
  useEffect(() => {
    if (activeTags.length === 0 || activeTags.includes('All')) {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter((project) =>
        project.tags.some((tag) => activeTags.includes(tag)),
      );
      setFilteredProjects(filtered);
    }
  }, [activeTags]);

  // State for contact popup
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  // Handle contact popup
  const handleOpenContactPopup = () => {
    setShowContactPopup(true);
  };

  const handleCloseContactPopup = () => {
    setShowContactPopup(false);
  };

  // Encoded email
  const encodedEmail = encodeEmail('yunchae.us@gmail.com');

  const handleCopyEmail = () => {
    const email = decodeEmail(encodedEmail);
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setShowCopySuccess(true);
        setTimeout(() => setShowCopySuccess(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="main__container">
      <div className="header">
        <div className="header__flexbox">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="header__flexbox__item"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="header__flexbox__item"
          >
            Projects
          </ScrollLink>
          <div className="header__flexbox__item">
            <div className="header__flexbox__item" onClick={handleOpenContactPopup}>
              Contact
            </div>
          </div>
          <div className="header__flexbox__item">
            {/* Resume Version Note: Updated on 2023-12-04 */}
            <a
              className="header__flexbox__item__resume__button"
              href={`${process.env.PUBLIC_URL}/Yunchae_Kim_resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        {showContactPopup && (
          <ContactPopup
            onClose={handleCloseContactPopup}
            onCopyEmail={handleCopyEmail}
            encodedEmail={encodedEmail}
            buttonRef={copyButtonRef}
          />
        )}
        {showCopySuccess && copyButtonRef.current && (
          <Toast
            message="Email copied to clipboard!"
          />
        )}
      </div>
      <div className="page__body">
        <Element name="about"></Element>
        <div className="bio__body divider">
          <div className="bio__flexbox">
            <div className="bio__content">
              <div className="bio__name">Yunchae Kim</div>
              <div className="bio__section">
                <div className="bio__section__header">Education</div>
                <div className="bio__section__list">
                  <div className="bio__section__item">
                    <strong>University of Pennsylvania</strong> - M.S. Computer and Information
                    Technology (2021 - 2023)
                  </div>
                  <div className="bio__section__item">
                    <strong>Korea University</strong> - B.A. Business Administration (2014 - 2020)
                  </div>
                </div>
              </div>
              <div className="bio__section">
                <div className="bio__section__header">Work Experience</div>
                <div className="bio__section__list">
                  <div className="bio__section__item">
                    <strong>Romano Lab</strong> - Programmer (2023)
                  </div>
                  <div className="bio__section__item">
                    <strong>Wharton Risk Center</strong> - Research Assistant (2022 - 2023)
                  </div>
                  <div className="bio__section__item">
                    <strong>Storicity</strong> - Frontend Developer / Product Manager (2020 - 2021)
                  </div>
                  <div className="bio__section__item">
                    <strong>Boston Consulting Group</strong> - Production & Marketing Support (2019
                    - 2020)
                  </div>
                  <div className="bio__section__item">
                    <strong>Korea University Cognitive Systems Lab</strong> - Research Intern (2018
                    - 2019)
                  </div>
                  <div className="bio__section__item">
                    <strong>The National Assembly of The Republic of Korea</strong> - Intern (2017)
                  </div>
                  <div className="bio__section__item">
                    <strong>Republic of Korea Army</strong> - Interpreter Sergeant / Squad Leader
                    (2015 - 2017)
                  </div>
                </div>
              </div>
            </div>
            <img className="bio__photo" src={profilePic} alt="Profile" />
          </div>
        </div>
        <Element name="projects"></Element>
        <div id="projects" className="projects__body divider">
          <div className="projects__header">Projects</div>
          <TagsFilter activeTags={activeTags} setActiveTags={setActiveTags} />
          <div className="projects__container">
            {filteredProjects.map((project, index) => (
              <ProjectItem
                key={index}
                title={project.title}
                group={project.group}
                tags={project.tags}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
