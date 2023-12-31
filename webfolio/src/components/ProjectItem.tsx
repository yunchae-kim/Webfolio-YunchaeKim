import '../styles/ProjectItem.css';

import React from 'react';

export interface ProjectItemProps {
  title: string;
  group: string;
  tags: string[];
  description: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, group, tags, description, link }) => {
  return (
    <div className="project__item">
      <div className="project__item__textbox">
        <div className="project__item__title">{title}</div>
        <div className="project__item__group">{group}</div>
        <div className="project__item__tag__list">
          {tags.map((tag, index) => (
            <div key={index} className="project__item__tag">
              {tag}
            </div>
          ))}
        </div>
        <div className="project__item__description">{description}</div>
        {link && (
          <a href={link} className="project__item__link" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
