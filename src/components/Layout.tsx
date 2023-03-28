import { NavLink, Link, Outlet } from 'react-router-dom';
import React, { Component, MouseEventHandler } from 'react';
import { LayoutState } from '../models';

type Props = {
  [key: string]: never;
};

export class Layout extends Component<Props, LayoutState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentPageName:
        location.pathname === '/'
          ? 'Home'
          : location.pathname === '/about'
          ? 'About us'
          : location.pathname === '/form'
          ? 'Form'
          : 'Page not found',
    };
  }

  private handleNavLinkClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    const title = event.currentTarget.innerText;
    document.title = title + ' | Vite + React + TS';
    this.setState({ currentPageName: title });
  };

  public render(): JSX.Element {
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
          <NavLink to="/form" onClick={this.handleNavLinkClick}>
            Form
          </NavLink>
        </header>

        <Outlet />

        <footer>
          ©2023
          <Link to="https://github.com/shustovsky/">Github</Link>
          <Link to="https://rs.school/react/">RSSchool </Link>
        </footer>
      </>
    );
  }
}
