import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import React, { MouseEventHandler, useEffect, useState } from 'react';

enum PageName {
  HOME = '/',
  ABOUT = '/about',
  FORM = '/form',
}

export function Layout(): JSX.Element {
  const location = useLocation();
  const [currentPageName, setCurrentPageName] = useState<string>();

  useEffect(() => {
    setCurrentPageName(() => {
      switch (location.pathname) {
        case PageName.HOME:
          return 'Home';
        case PageName.ABOUT:
          return 'About us';
        case PageName.FORM:
          return 'Form';
        default:
          return 'Page not found';
      }
    });
  }, [location.pathname]);

  const handleNavLinkClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    const title = event.currentTarget.innerText;
    document.title = title + ' | The Rick and Morty';
    setCurrentPageName(title);
  };

  return (
    <>
      <header className="header">
        <h1>{currentPageName}</h1>
        <NavLink to="/" onClick={handleNavLinkClick}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={handleNavLinkClick}>
          About us
        </NavLink>
        <NavLink to="/form" onClick={handleNavLinkClick}>
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
