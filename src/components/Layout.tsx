import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Layout.scss';

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

  useEffect(() => {
    document.title = currentPageName + ' | The Rick and Morty';
  }, [currentPageName]);

  return (
    <>
      <header className="header">
        <h1>{currentPageName}</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/form">Form</NavLink>
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
