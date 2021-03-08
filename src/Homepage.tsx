import Particles from 'react-particles-js';
import React, {useEffect, useState} from 'react';
import {ReactComponent as SwipeUp} from './swipe-up.svg';
import {ReactComponent as EMLogo} from './Animation/Transparent_Version/LOGO.svg';
import ParticlesConfig from './ParticlesConfig';

export default function Homepage() {
  const [totalParticles, setTotalParticles] = useState(
    window.outerWidth * 0.05
  );
  useEffect(() =>
    window.addEventListener('resize', () => setTotalParticles(totalParticles))
  );

  return (
    <>
      <div className={'panel logo-container'}>
        <EMLogo className={'logo'} />
      </div>
      <Particles canvasClassName={'background'} params={ParticlesConfig} />
      <div className={'panel swipe-up-container'}>
        <SwipeUp className={'swipe-up'} />
        <h3 className="swipe-up-text">View My Skills</h3>
      </div>
    </>
  );
}
