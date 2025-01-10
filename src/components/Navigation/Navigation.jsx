import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() { 
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? css.active : ''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/movies" 
            className={({ isActive }) => isActive ? css.active : ''}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;