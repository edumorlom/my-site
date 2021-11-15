import Homepage from './Homepage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Skills from './Skills';
import Projects from './Projects';
import Publications from './Publications';

export default function App() {
  const screenIds = [
    '/homepage',
    '/skills',
    '/publications',
    '/projects',
    '/resume',
  ];

  const pathName = window.location.pathname;
  if (!pathName) window.location.pathname !== '/homepage';

  let screenIndex = 0;
  if (screenIds.indexOf(pathName) >= 0) {
    screenIndex = screenIds.indexOf(pathName);
  }

  const nextScreen = () => {
    const nextScreenIndex = screenIndex + 1;
    if (screenIndex + 1 < screenIds.length) {
      const nextScreenId = screenIds[nextScreenIndex];
      window.location.href = nextScreenId;
    }
  };

  const Resume = () => {
    window.location.href = '/resume.pdf';
    return <></>;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/skills">
          <Skills nextScreen={nextScreen} />
        </Route>
        <Route path="/resume">{<Resume />}</Route>
        <Route path="/publications">
          {<Publications nextScreen={nextScreen} />}
        </Route>
        <Route path="/projects">{<Projects nextScreen={nextScreen} />}</Route>
        <Route path="/">
          <Homepage nextScreen={nextScreen} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
