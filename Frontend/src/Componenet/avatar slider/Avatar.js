import React, {useState} from "react";
import {TiChevronLeft, TiChevronRight} from 'react-icons/ti';
import '../avatar slider/Avatar.css';

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({id}) => (
  // <div className='avatar-card'>
  //   <h2>{title}</h2>
  //   <p>{content}</p>
  //   <img src={logo} alt="BigCo Inc. logo"/>
  // </div>
  <img className='avatar-card' src={`/Assets/Avatar list/${id}.svg`} alt="avatar"/>
);

const Carousel = ({children,OnChangeAvatar}) => {
  const [active, setActive] = useState(4);
  const count = React.Children.count(children);

  const OnleftChange = () => 
  {
    setActive(i => i - 1);
    OnChangeAvatar(active);
  }
  const OnRightChange = () => 
  {
    setActive(i => i + 1)
    OnChangeAvatar(active+2);
  }
  
  return (
    <div className='avatar-Carousel'>
      {active > 0 && <button className='avatar-nav left' onClick={OnleftChange}><TiChevronLeft className="left-icon"/></button>}
      {React.Children.map(children, (child, i) => (
        <div key={i} className='avatar-card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--abs-offset': Math.abs(active - i) / 3,
            'pointerEvents': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='avatar-nav right' onClick={OnRightChange}><TiChevronRight className="right-icon"/></button>}
    </div>
  );
};

const Avatar = ({OnChangeAvatar}) => (
  <div className='app'>
    <Carousel OnChangeAvatar = {OnChangeAvatar}>
      {[...new Array(CARDS)].map((_, i) => (
        <Card key={i+1} id={i+1} />
      ))}
    </Carousel>
  </div>
);

export default Avatar;