import React, {useEffect} from 'react';
import Homepage from './Homepage';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Skills from './Skills';

export default function App() {
  const screenIds = ['/homepage', '/skills', '/resume'];

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

  useEffect(() => {
    window.addEventListener('touchmove', nextScreen);
    window.addEventListener('mousedown', nextScreen);
    window.addEventListener('mouseup', nextScreen);
  });

  const Resume = () => {
    window.location.href = '/resume.pdf';
    return <></>;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/resume">{<Resume></Resume>}</Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
