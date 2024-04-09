import React from 'react';
import ProgressBar from './ProgressBar';
import chroma from 'chroma-js';
import SwipeUp from './SwipeUp';

interface Skill {
  text: string;
  percent: number;
}

export default function Skills(props: {nextScreen: () => void}) {
  const skills: Skill[] = [
    {text: 'Full-Stack Engineer', percent: 100},
    {text: 'Python, Node, TypeScript and Java', percent: 95},
    {text: 'NextJS and React', percent: 90},
    {text: 'AI/ML (LLM)', percent: 85},
    {text: 'Kubernetes', percent: 80},
    {text: 'Cloud Computing', percent: 75},
    {text: 'UI/UX', percent: 70},
  ];

  const minPercent = Math.min(...skills.map(skill => skill.percent));

  return (
    <>
      <h4 className={'title'}>My Skills</h4>
      <div className={'content-container'}>
        {skills.map(({text, percent}, i) => {
          const normalizedPercent = (percent - minPercent) / minPercent;
          const color = chroma.mix('black', '#00539C', normalizedPercent);
          return (
            <ProgressBar key={i} text={text} percent={percent} color={color} />
          );
        })}
      </div>
      <SwipeUp text={'View Resume'} onClick={props.nextScreen} absolute />
    </>
  );
}
