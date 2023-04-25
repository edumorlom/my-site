import SwipeUp from './SwipeUp';
import {ProjectType, LabelColors, ProjectConfig} from './ProjectConfig';

export default function Projects(props: {nextScreen: () => void}): JSX.Element {
  return (
    <>
      <h4 className="title">My Public Projects</h4>
      <div className="content-container">
        {ProjectConfig().map((project, index) => (
          <ProjectView key={index} project={project} />
        ))}
      </div>
      <SwipeUp text={'View Resume'} onClick={props.nextScreen} />
    </>
  );
}

const ProjectView = (props: {project: ProjectType}): JSX.Element => {
  const project = props.project;
  const projectOnClick = (url: string) => {
    const win = window.open(url, '_blank');
    win.focus();
  };

  return (
    <div
      className="project-container"
      onClick={() => projectOnClick(project.url)}
    >
      <div className={'project-description-container'}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <img src={project.image} />
      </div>
      <Labels labels={project.technologies} />
    </div>
  );
};

const Labels = (props: {labels: string[]}): JSX.Element => {
  return (
    <div className="project-labels">
      {props.labels.map((label, index) => {
        const color = LabelColors[label];
        return (
          <div
            key={index}
            className={'project-label'}
            style={{backgroundColor: color}}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};
