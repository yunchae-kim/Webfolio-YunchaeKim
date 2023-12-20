import '../styles/Resume.css';

import React, { FC, useEffect, useRef, useState } from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';

import profilePic from '../assets/images/profile.jpg';
import ContactPopup from '../components/ContactPopup';
import ProjectItem, { ProjectItemProps } from '../components/ProjectItem';
import TagsFilter from '../components/TagsFilter';
import Toast from '../components/Toast';
import bioSections, { BioSection } from '../data/bioSectionData';
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
            {bioSections.map((section: BioSection, index: number) => (
              <div key={index} className="bio__section">
                <div className="bio__section__header">{section.header}</div>
                <div className="bio__section__list">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bio__section__item">
                      <strong>{item.title}</strong> - {item.description}
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
