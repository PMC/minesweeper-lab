import { Link } from "react-router";

export default function FooterBar() {
  return (
    <footer className="pico container footer-strip">
      <div className="footer-strip">
        <center>
          <small>
            <Link to="https://github.com/PMC" className="secondary">
              Minesweeper-lab created by Pierre C - 2025
            </Link>
          </small>
        </center>
      </div>
    </footer>
  );
}
