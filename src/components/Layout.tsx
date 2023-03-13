import { NavLink, Link, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <header className="header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About us</NavLink>
      </header>

      <Outlet />

      <footer>
        <Link to="https://github.com/shustovsky/">Github</Link>
      </footer>
    </>
  );
}
