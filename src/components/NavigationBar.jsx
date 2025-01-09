import { NavLink } from "react-router";

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
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
