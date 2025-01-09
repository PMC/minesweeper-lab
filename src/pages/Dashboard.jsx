import { Outlet } from "react-router";

function Dashboard() {
  return (
    <section className="pico container-fluid">
      <h1>Dashboard</h1>
      <form className="pico">
        <input type="text" name="text" placeholder="Text" aria-label="Text" />
      </form>
      {/* will either be <Home/> or <Settings/> */}
      <Outlet />
    </section>
  );
}
export default Dashboard;
