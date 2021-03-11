interface ProjectType {
  title: string;
  description: string;
  year: number;
  url: string;
  technologies: string[];
  company: string;
  image: string;
}

function ProjectConfig(): ProjectType[] {
  return [
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
      title: 'DC Dashboard',
      description:
        " and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall.",
      year: 2020,
      url:
        'https://github.com/datacommonsorg/tools/tree/master/covid19-dashboard',
      image:
        'https://raw.githubusercontent.com/edumorlom/my-site/master/assets/icon-dc-dashboard.png',
      company: 'FIU',
      technologies: ['Python', 'React', 'TypeScript', 'Cloud'],
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
      title: 'Smile Detector',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall.",
      year: 2020,
      url: 'https://github.com/edumorlom/smile-detection',
      image:
        'https://raw.githubusercontent.com/edumorlom/smile-detection/main/resources/icon.png',
      company: '',
      technologies: ['Python', 'Machine Learning', 'TensorFlow'],
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
      technologies: ['TypeScript'],
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
      technologies: ['TypeScript'],
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
      technologies: ['TypeScript'],
    },
  ];
}

const LabelColors = {
  React: 'grey',
  Node: '#0CA678',
  'React Native': 'grey',
  Python: '#D6336C',
  Cloud: 'black',
  TypeScript: '#00539C',
  JavaScript: '#00539C',
  TensorFlow: '#ff6f00',
  'Machine Learning': '#5F3DC4',
};

export {ProjectType, ProjectConfig, LabelColors};
