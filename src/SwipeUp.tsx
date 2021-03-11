import {CSSProperties} from 'react';
import {ReactComponent as SwipeUpSvg} from './swipe-up.svg';

export default function SwipeUp(props: {
  text: string;
  onClick: () => void;
  absolute?: boolean;
}) {
  const style: CSSProperties = props.absolute ? {position: 'absolute'} : {};

  return (
    <div
      className={'panel swipe-up-container'}
      onClick={props.onClick}
      style={style}
    >
      <SwipeUpSvg className={'swipe-up'} />
      <h3>{props.text}</h3>
    </div>
  );
}
