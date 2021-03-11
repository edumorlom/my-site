import Particles from 'react-particles-js';
import React, {useEffect, useState} from 'react';
import {ReactComponent as EMLogo} from '../assets/logo.svg';
import ParticlesConfig from './ParticlesConfig';
import SwipeUp from './SwipeUp';

export default function Homepage(props: {nextScreen: () => void}) {
  const [totalParticles, setTotalParticles] = useState(
    window.outerWidth * 0.05
  );

  useEffect(() =>
    window.addEventListener('resize', () => setTotalParticles(totalParticles))
  );

  return (
    <div onClick={props.nextScreen}>
      <div className={'panel logo-container'}>
        <EMLogo className={'logo'} />
      </div>
      <Particles canvasClassName={'background'} params={ParticlesConfig} />
      <SwipeUp
        text={'Tap To View Skills'}
        onClick={props.nextScreen}
        absolute
      />
    </div>
  );
}
