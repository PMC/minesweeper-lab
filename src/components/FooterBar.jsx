import { Link } from "react-router";

export default function FooterBar() {
  return (
    <footer className="pico container footer-strip">
      <center>
        <small>
          <Link
            to="https://github.com/PMC/minesweeper-lab"
            className="secondary"
          >
            💥Minesweeper-lab ©️ by Pierre C 2025
          </Link>
        </small>
      </center>
    </footer>
  );
}
