import { NavLink, Link, Outlet } from 'react-router-dom';
import React, { Component } from 'react';
import { MouseEventHandler } from 'react';
import { LayoutState } from '../models';

export class Layout extends Component<Record<string, unknown>, LayoutState> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      currentPageName:
        location.pathname === '/'
          ? 'Home'
          : location.pathname === '/about'
          ? 'About us'
          : 'Page not found',
    };
  }
  handleNavLinkClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    const title = event.currentTarget.innerText;
    document.title = title + ' | Vite + React + TS';
    this.setState({ currentPageName: title });
  };
  render() {
    const { currentPageName } = this.state;
    return (
      <>
        <header className="header">
          <h1>{currentPageName}</h1>
          <NavLink to="/" onClick={this.handleNavLinkClick}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={this.handleNavLinkClick}>
            About us
          </NavLink>
        </header>

        <Outlet />

        <footer>
          <Link to="https://github.com/shustovsky/">Github</Link>
        </footer>
      </>
    );
  }
}
