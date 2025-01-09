import { Link, NavLink } from "react-router";
import { Icon } from "@iconify/react";

const NavigationBar = () => {
  return (
    <header className="pico">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Minesweeper-lab</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/game">
              {({ isActive }) => (
                <span className={isActive ? "active" : ""}>
                  {isActive ? "👉" : ""} New Game
                </span>
              )}
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/settings">Settings</NavLink>
          </li> */}
          <li>
            <NavLink to="/highscores">Highscores</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <Link to="https://github.com/PMC">
            <Icon icon="tabler:brand-github" />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
