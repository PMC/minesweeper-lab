import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import NavigationBar from "./components/NavigationBar";

const root = document.getElementById("root");

import "./styles/global.css";

import ErrorPage from "./pages/ErrorPage";
import GameBoard from "./pages/GameBoard";
import Dashboard from "./pages/dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import FooterBar from "./components/FooterBar";

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<GameBoard />} />
      <Route path="/highscores" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Home />} />
      </Route>

      {/* <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        this config creates both "/dashboard" and "/dashboard/settings" URLs.
   */}

      <Route path="/*" element={<ErrorPage />} />
    </Routes>
    <FooterBar />
  </BrowserRouter>
);
