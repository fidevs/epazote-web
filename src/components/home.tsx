import React, { Component } from 'react';
import { animateScroll as scroller } from 'react-scroll';

import '../App.css';
import epazote from '../assets/images/epazote.png';
import desayunos from '../assets/images/desayunos-btn.png';
import comidas from '../assets/images/comidas-btn.png';
import especial from '../assets/images/especial-btn.png';
import pizza from '../assets/images/pizza-btn.png';
import cocteles from '../assets/images/coctel-btn.png';
import { RouteComponentProps } from 'react-router-dom';

type ButtonItem = { img: string, path: string };
const BUTTONS: ButtonItem[] = [
  { img: desayunos, path: 'desayunos' },
  { img: comidas, path: 'comidas' },
  { img: especial, path: 'especial' },
  { img: pizza, path: 'pizza' },
  { img: cocteles, path: 'cocteles' },
];

export default class Home extends Component<RouteComponentProps, { scroll: number }> {
  state = { scroll: 0 };

  componentDidMount() {
    window.addEventListener('scroll', this.updateScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScroll);
  }

  updateScroll = () => this.setState({ scroll: window.pageYOffset });

  scrollBottom = () => {
    if (this.state.scroll > (window.innerHeight / 2)) scroller.scrollToTop();
    else scroller.scrollToBottom();
  }
  
  onSelectMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("Click: ", e.currentTarget.id)
    this.props.history.push(`/menus?menu=${e.currentTarget.id}`)
  }

  render() {
    return (
      <div id="container">
        <button id="scoll-btn" onClick={this.scrollBottom}>{this.state.scroll > (window.innerHeight / 2) ? 'INICIO' : 'MENU'}</button>
        <div id="main">
          <img src={epazote} alt="epazote.png" />
        </div>
        <div id="menu">
          <div id="menu-container">
            {BUTTONS.map((btn, i) => (
              <div className="button" key={`menu-opt-${i}`} id={btn.path} onClick={this.onSelectMenu}>
                <img src={btn.img} alt={`${btn.path}.png`}width="100%" height="100%" style={{ objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
