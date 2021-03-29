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
  Game: '#C92A2A',
};

const ProjectConfig = (): ProjectType[] => {
  return [
    {
      title: 'IBM Acoustic ML for Tennis',
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
      title: 'IBM Acoustic ML Detection',
      description:
        'Research demo for a full-stack application (web, mobile, and server) that uses machine learning models to classify and predict anomalies in sound. As an example, one can use this system to separate pneumonia from other diseases.',
      year: 2019,
      url:
        'https://researcher.watson.ibm.com/researcher/files/us-wangshiq/JA_SenSys2019.pdf',
      image:
        'https://raw.githubusercontent.com/edumorlom/my-site/master/src/assets/icon-ibm-anomaly.png',
      company: 'IBM',
      technologies: ['Publication', 'Java', 'Python', 'Machine Learning'],
    },
    {
      title: 'Google DC Dashboard',
      description:
        "Web application that queries data from Google's knowledge graph to display the most up-to-date graphs. The dataset includes daily COVID-19 and Social Wellness data around the world. Developing and maintaining this application was one of my projects at Google.",
      year: 2020,
      url:
        'https://github.com/datacommonsorg/tools/tree/master/covid19-dashboard',
      image:
        'https://raw.githubusercontent.com/edumorlom/my-site/master/src/assets/icon-dc-dashboard.png',
      company: 'Google',
      technologies: ['Python', 'React', 'TypeScript', 'Cloud'],
    },
    {
      title: 'nuMom',
      description:
        'Mobile application designed for low-income mothers who speak English, Spanish or Creole. The app was started by Dr. Jean Hannan and I and is now being mantained by over 15 students under our supervision.',
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
        'Mobile application that allows users to request or volunteer help to their neighbors during the COVID-19 crisis. This project was developed in three days and submitted to the COVID-19 DevPost Hackathon 2019, where it received the "finalist" award.',
      year: 2020,
      url: 'https://staysafe.edumorales.dev',
      image:
        'https://raw.githubusercontent.com/edumorlom/stay-safe-covid19/master/assets/icon.png',
      company: '',
      technologies: ['React Native', 'JavaScript', 'Node', 'Cloud'],
    },
    {
      title: 'Smile Detector',
      description:
        'OpenCV application that differentiates a neutral face from a smiling face in real-time. The model is a convolutional neural network that is trained on a Kaggle dataset with a variation of face images.',
      year: 2021,
      url: 'https://github.com/edumorlom/smile-detection',
      image:
        'https://raw.githubusercontent.com/edumorlom/smile-detection/main/resources/icon.png',
      company: '',
      technologies: ['Python', 'Machine Learning'],
    },
    {
      title: 'File Corruptor',
      description:
        "Have a deadline soon? Use this tool to corrupt any file so that it can't be opened. The receiver will think it's an issue with their computer and ask you to send it again. I developed this web app as a way to learn about File manipulation in JavaScript.",
      year: 2021,
      url: 'https://corruptor.edumorales.dev/',
      image:
        'https://raw.githubusercontent.com/edumorlom/file-corruptor/master/icon.png',
      company: '',
      technologies: ['Preact', 'TypeScript'],
    },
    {
      title: 'Snake Clone',
      description:
        'Remember "Snake" on your Nokia flip phone? The game is back for any device, and anyone can play it using a touch screen, mouse, or keyboard. I developed this game as a way to learn TypeScript prior to my internship at Google.',
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
