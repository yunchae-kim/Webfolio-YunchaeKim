import '../styles/TagsFilter.css';

import React, { FC } from 'react';

interface TagsFilterProps {
  activeTags: string[];
  setActiveTags: (tag: string[]) => void;
}

const TagsFilter: FC<TagsFilterProps> = ({ activeTags, setActiveTags }) => {
  const tagCategories = {
    "Programming Languages": ['Typescript', 'Python', 'R'],
    "Frameworks and Libraries": ['React', 'Tailwind CSS'],
    "Database": ['MongoDB', 'Neo4j'],
    "DevOps, Testing, and Documentation": ['Bash', 'GitHub Actions', 'AWS', 'Swagger', 'Sphinx'],
    "Data Science": ['Data Analysis', 'Data Visualization', 'Machine Learning', 'Sentiment Analysis'],
    "Design and Prototyping": ['Figma', 'Adobe XD', 'ProtoPie'],
  };

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

  // Function to sort tags alphabetically
  const sortTagsAlphabetically = (tags: string[]) => {
    return tags.sort((a, b) => a.localeCompare(b));
  };

  return (
    <div>
      <div className="tags__filter__header">Filter by tags</div>
      <div className="tags__filter">
        <div className="tag__category">
          <div className="tag__buttons__list">
            <button
              onClick={() => handleTagClick('All')}
              className={activeTags.includes('All') ? 'active' : ''}
            >
              All
            </button>
          </div>
        </div>
        {Object.entries(tagCategories).map(([category, tags]) => (
          <div key={category} className="tag__category">
            <div className="tag__category__header">{category}</div>
            <div className="tag__buttons__list">
              {sortTagsAlphabetically(tags).map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={activeTags.includes(tag) ? 'active' : ''}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsFilter;
