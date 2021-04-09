import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router-dom';

import desayunos from '../assets/images/desayunos.jpg';
import comidas from '../assets/images/comidas.jpg';
import especial from '../assets/images/especialidades.jpg';
import pizza from '../assets/images/pizzas.jpg';
import cocteles from '../assets/images/cocteles y bebidas.jpg';

import './menus.css';

interface MenusType {[key: string]: string};
const MENUS_ARRAY: MenusType = { desayunos, comidas, especial, pizza, cocteles };

export default class Menus extends Component<RouteChildrenProps, { menu: string | null }> {
  state = { menu: null };
  componentDidMount() {
    const menu: keyof typeof MENUS_ARRAY | string | null = new URLSearchParams(this.props.location.search).get("menu");
    if (menu !== null) this.setState({ menu: this.getKeyValue(MENUS_ARRAY)(menu) });
    else this.props.history.push("/");
  }

  getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) => obj[key];

  goToHome = () => this.props.history.push("/");
  
  render() {
    return (
      <div id="menus-container">
        <button id="menus-btn" onClick={this.goToHome}>INICIO</button>
        {this.state.menu === null
        ? <h2 style={{ margin: 0, padding: 0, textAlign: 'center', color: 'white' }}>Cargando...</h2>
        : <img src={this.state.menu!} alt="menu.jpg" width="100%" height="100%" style={{ objectFit: 'contain' }} />
        }
      </div>
    )
  }
}
