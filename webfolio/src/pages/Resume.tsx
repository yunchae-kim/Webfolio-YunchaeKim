import React, { useState, useEffect, FC } from 'react';
import '../styles/Resume.css';
import profilePic from '../assets/images/profile.jpg';
import ProjectItem, { ProjectItemProps } from '../components/ProjectItem';

const projectsData: ProjectItemProps[] = [
  {
    title: 'Project 1',
    group: 'Group 1',
    tags: ['React', 'Node'],
    description: 'This is a project',
    link: 'https://github.com',
  },
  {
    title: 'Project 2',
    group: 'Group 2',
    tags: ['React', 'Node', 'Express'],
    description: 'This is a project 2',
    link: 'https://github.com',
  },
  // Add more projects as needed
];

interface TagsFilterProps {
  activeTags: string[];
  setActiveTags: (tag: string[]) => void;
}

const TagsFilter: FC<TagsFilterProps> = ({ activeTags, setActiveTags }) => {
  const allTags: string[] = ['All', ...new Set(projectsData.flatMap((project) => project.tags))];

  const handleTagClick = (tag: string) => {
    if (activeTags.includes(tag)) {
      // Remove tag
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      // Add tag
      setActiveTags([...activeTags, tag]);
    }
  };

  return (
    <div className="tags__filter">
      {allTags.map((tag, index) => (
        <button
          key={index}
          onClick={() => handleTagClick(tag)}
          className={activeTags.includes(tag) ? 'active' : ''}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

const Resume: FC = () => {
  const [activeTags, setActiveTags] = useState<string[]>(['All']);
  const [filteredProjects, setFilteredProjects] = useState<ProjectItemProps[]>(projectsData);

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

  return (
    <div>
      <div className="header">
        <div className="header__flexbox">
          <div className="header__flexbox__item">About</div>
          <div className="header__flexbox__item">Projects</div>
          <div className="header__flexbox__item">Download Resume</div>
        </div>
      </div>
      <div className="main">
        <div className="bio">
          <div className="bio__flexbox">
            <div className="bio__content">
              <div className="bio__name">Yunchae Kim</div>
              <div className="bio__title">Software Engineer</div>
              <div className="bio__education">
                Education
                <ul className="bio__education__item">
                  <li>
                    <strong>M.S. Computer and Information Technology</strong> - University of
                    Pennsylvania (2023)
                  </li>
                  <li>
                    <strong>B.A. Business Administration</strong> - Korea University (2020)
                  </li>
                </ul>
              </div>
            </div>
            <img className="bio__photo" src={profilePic} alt="Profile" />
          </div>
        </div>
        <div className="projects">
          Projects
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
