export interface BioItem {
  title: string;
  description: string;
}

export interface BioSection {
  header: string;
  items: BioItem[];
}

const bioSections: BioSection[] = [
  {
    header: "Education",
    items: [
      {
        title: "University of Pennsylvania",
        description: "M.S. Computer and Information Technology (2021 - 2023)",
      },
      {
        title: "Korea University",
        description: "B.A. Business Administration (2014 - 2020)",
      },
    ],
  },
  {
    header: "Work Experience",
    items: [
      {
        title: "University of Pennsylvania DBEI Lab",
        description: "Programmer (2023)"
      },
      {
        title: "Wharton Risk Center",
        description: "Research Assistant (2022 - 2023)"
      },
      {
        title: "Storicity",
        description: "Frontend Developer / Product Manager (2020 - 2021)"
      },
      {
        title: "Boston Consulting Group",
        description: "Production & Marketing Support (2019 - 2020)"
      },
      {
        title: "Korea University Cognitive Systems Lab",
        description: "Research Intern (2018 - 2019)"
      },
      {
        title: "The National Assembly of The Republic of Korea",
        description: "Intern (2017)"
      },
      {
        title: "Republic of Korea Army",
        description: "Interpreter Sergeant / Squad Leader (2015 - 2017)"
      }
    ]
  },
];

export default bioSections;
