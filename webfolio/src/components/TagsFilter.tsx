import '../styles/TagsFilter.css';

import React, { FC } from 'react';

import projectsData from '../data/projectsData';
import { ProjectItemProps } from './ProjectItem';

interface TagsFilterProps {
  activeTags: string[];
  setActiveTags: (tag: string[]) => void;
}

const TagsFilter: FC<TagsFilterProps> = ({ activeTags, setActiveTags }) => {
  const allTags: string[] = [
    'All',
    ...new Set(projectsData.flatMap((project: ProjectItemProps) => project.tags as string[])),
  ];

  const handleTagClick = (tag: string) => {
    if (tag === 'All') {
      setActiveTags(['All']);
      return;
    }
    const isTagActive = activeTags.includes(tag);
    const newActiveTags = isTagActive
      ? activeTags.filter((t) => t !== tag)
      : [...activeTags, tag].filter((t) => t !== 'All');
    setActiveTags(newActiveTags.length > 0 ? newActiveTags : ['All']);
  };

  return (
    <div>
      <div className="tags__filter__header">Filter by tags</div>
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
    </div>
  );
};

export default TagsFilter;
