import { NavLink, Link, Outlet } from 'react-router-dom';
import '../styles/layout.scss';
import { useLayout } from '../hooks/LayoutHook';

export function Layout(): JSX.Element {
  const { currentPageName } = useLayout();
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
