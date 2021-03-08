import React from 'react';
import ProgressBar from './ProgressBar';
import chroma from 'chroma-js';
import {ReactComponent as SwipeUp} from './swipe-up.svg';

interface Skill {
  text: string;
  percent: number;
}

export default function Skills() {
  const skills: Skill[] = [
    {text: 'Full-Stack Engineer', percent: 100},
    {text: 'Python, TypeScript, Java and Go', percent: 95},
    {text: 'React and React Native', percent: 90},
    {text: 'Docker Containers', percent: 80},
    {text: 'User Interface/Experience', percent: 70},
    {text: 'Selenium Testing', percent: 60},
    {text: 'AI and ML', percent: 55},
  ];

  const minPercent = Math.min(...skills.map(skill => skill.percent));

  return (
    <>
      <h4 className={'title'}>My Skills</h4>
      <div className={'skills-container'}>
        {skills.map(({text, percent}, i) => {
          const normalizedPercent = (percent - minPercent) / minPercent;
          const color = chroma.mix('black', '#00539c', normalizedPercent);
          return (
            <ProgressBar key={i} text={text} percent={percent} color={color} />
          );
        })}
      </div>
      <div className={'panel swipe-up-container'}>
        <SwipeUp className={'swipe-up'} />
        <h3 className="swipe-up-text">View My Resume</h3>
      </div>
    </>
  );
}
