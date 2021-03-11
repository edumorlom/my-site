interface ProjectType {
  title: string;
  description: string;
  year: number;
  url: string;
  technologies: string[];
  company: string;
  image: string;
}

const LabelColors = {
  React: 'grey',
  Node: '#0CA678',
  'React Native': 'grey',
  Python: '#D6336C',
  Cloud: 'black',
  TypeScript: '#00539C',
  JavaScript: '#00539C',
  Java: '#ff6f00',
  'Machine Learning': '#5F3DC4',
  Publication: '#FAB005',
  Game: '#C92A2A',
};

const ProjectConfig = (): ProjectType[] => {
  return [
    {
      title: 'IBM Acoustic ML for Tennis',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall.",
      year: 2019,
      url: 'https://dl.acm.org/doi/10.1145/3347318.3355520',
      image:
        'https://raw.githubusercontent.com/edumorlom/my-site/master/src/assets/icon-ibm-tennis.png',
      company: 'IBM',
      technologies: ['Publication', 'Machine Learning', 'Java', 'Python'],
    },
    {
      title: 'Google DC Dashboard',
      description:
        " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall.",
      year: 2020,
      url:
        'https://github.com/datacommonsorg/tools/tree/master/covid19-dashboard',
      image:
        'https://raw.githubusercontent.com/edumorlom/my-site/master/src/assets/icon-dc-dashboard.png',
      company: 'FIU',
      technologies: ['Python', 'React', 'TypeScript', 'Cloud'],
    },
    {
      title: 'nuMom',
      description:
        'An iOS and Android maternal/infant healthcare application designed for low-income mothers that provide support in three different languages (English, Spanish & Creole).',
      year: 2020,
      url: 'https://github.com/edumorlom/moms-infants-healthy',
      image:
        'https://raw.githubusercontent.com/edumorlom/moms-infants-healthy/master/assets/icon.png',
      company: 'FIU',
      technologies: ['React Native', 'JavaScript', 'Node', 'Cloud'],
    },
    {
      title: 'COVID-19 Hackathon',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall.",
      year: 2020,
      url: 'https://staysafe.edumorales.dev',
      image:
        'https://raw.githubusercontent.com/edumorlom/stay-safe-covid19/master/assets/icon.png',
      company: '',
      technologies: ['React Native', 'Node', 'Cloud'],
    },
    {
      title: 'IBM Acoustic Anomaly Detection',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall.",
      year: 2019,
      url:
        'https://researcher.watson.ibm.com/researcher/files/us-wangshiq/JA_SenSys2019.pdf',
      image:
        'https://raw.githubusercontent.com/edumorlom/my-site/master/src/assets/icon-ibm-tennis.png',
      company: 'IBM',
      technologies: ['Publication', 'Machine Learning', 'Java', 'Python'],
    },
    {
      title: 'Smile Detector',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall.",
      year: 2020,
      url: 'https://github.com/edumorlom/smile-detection',
      image:
        'https://raw.githubusercontent.com/edumorlom/smile-detection/main/resources/icon.png',
      company: '',
      technologies: ['Python', 'Machine Learning'],
    },
    {
      title: 'Flappy Bird Clone',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall.",
      year: 2020,
      url: 'https://flappybird.edumorales.dev/',
      image:
        'https://raw.githubusercontent.com/edumorlom/flappy-bird/main/resources/icon.png',
      company: '',
      technologies: ['TypeScript', 'Game'],
    },
    {
      title: 'Snake',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall.",
      year: 2020,
      url: 'https://snake.edumorales.dev/',
      image:
        'https://raw.githubusercontent.com/edumorlom/Snake/master/resources/icon.png',
      company: '',
      technologies: ['TypeScript', 'Game'],
    },
  ];
};

export {ProjectType, LabelColors, ProjectConfig};
