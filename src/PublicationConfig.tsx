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
  Preact: 'grey',
  Node: '#0CA678',
  'React Native': 'grey',
  Python: '#D6336C',
  Cloud: 'black',
  TypeScript: '#00539C',
  JavaScript: '#00539C',
  Java: '#ff6f00',
  'Machine Learning': '#5F3DC4',
  Publication: '#FAB005',
  Openshift: '#C92A2A',
  Game: '#C92A2A',
  NLP: '#5F3DC4',
  'Quantum Computing': '#0F62FE',
  Patent: 'black',
};

const PublicationConfig = (): ProjectType[] => {
  return [
    {
      title: 'Patent #20200413189',
      description:
        'An audio forecasting algorithm that is adjusted (or trained), by machine learning, prior to a sports contest that will be broadcast. The audio forecasting algorithm is then used to position a set of mobile microphones on an ongoing basis during the sports contest',
      year: 2020,
      url: 'https://patents.justia.com/patent/10939203',
      image:
        'https://raw.githubusercontent.com/edumorlom/my-site/master/src/assets/icon-patent.png',
      company: 'IBM',
      technologies: ['Patent'],
    },
    {
      title: 'Acoustic ML for Tennis',
      description:
        "Research paper that proposes a new machine learning system that can classify a tennis match's acoustics in real-time. The pipeline can detect tennis events with an F1-score of 92.39% and point boundaries with average precision and recall values of around 80%.",
      year: 2019,
      url: 'https://tennis.edumorales.dev/',
      image:
        'https://raw.githubusercontent.com/edumorlom/my-site/master/src/assets/icon-ibm-tennis.png',
      company: 'IBM',
      technologies: ['Publication', 'Java', 'Python', 'Machine Learning'],
    },
    {
      title: 'Acoustic ML Detection',
      description:
        'Research demo for a full-stack application (web, mobile, and server) that uses machine learning models to classify and predict anomalies in sound. As an example, one can use this system to separate pneumonia from other diseases.',
      year: 2019,
      url: 'https://researcher.watson.ibm.com/researcher/files/us-wangshiq/JA_SenSys2019.pdf',
      image:
        'https://raw.githubusercontent.com/edumorlom/my-site/master/src/assets/icon-ibm-anomaly.png',
      company: 'IBM',
      technologies: ['Publication', 'Java', 'Python', 'Machine Learning'],
    },
    {
      title: 'AI for Fantasy Football Language Understanding',
      description:
        'Machine learning application that analyzes multimedia and text information for the basis of computational guided fantasy sports play.',
      year: 2021,
      url: 'https://arxiv.org/ftp/arxiv/papers/2111/2111.02874.pdf',
      image:
        'https://raw.githubusercontent.com/edumorlom/my-site/master/src/assets/icon-ibm-football.png',
      company: 'IBM',
      technologies: [
        'Publication',
        'Python',
        'Openshift',
        'Machine Learning',
        'NLP',
      ],
    },
    {
      title: 'Large Scale Diverse Combinatorial Optimization',
      description:
        'Novel system that applies a diverse combinatorial optimization pipeline that combines classical and quantum computing to generate an average of 10 trades for each team owner in ESPN Fantasy Football.',
      year: 2021,
      url: 'https://arxiv.org/ftp/arxiv/papers/2111/2111.02859.pdf',
      image:
        'https://raw.githubusercontent.com/edumorlom/my-site/master/src/assets/icon-ibm-quantum.png',
      company: 'IBM',
      technologies: [
        'Publication',
        'Node',
        'Machine Learning',
        'Quantum Computing',
      ],
    },
  ];
};

export {ProjectType, LabelColors, PublicationConfig};
