import React, { useEffect, useState } from 'react';

import './App.css';
import epazote from './assets/images/epazote.png';

import { animateScroll as scroller } from 'react-scroll';

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    }
  }, []);
  const updateScroll = () => setScroll(window.pageYOffset);

  const scrollBottom = () => {
    if (scroll > 450) scroller.scrollToTop();
    else scroller.scrollToBottom();
  }
  return (
    <div id="container">
      <button id="scoll-btn" onClick={scrollBottom}>{scroll > 450 ? 'INICIO' : 'MENU'}</button>
      <div id="main">
        <img src={epazote} alt="epazote.png"/>
      </div>
      <div id="menu">
        <div id="menu-container">
          
        </div>
      </div>
    </div>
  );
}

export default App;
