import Navbar from "./Navigation";
import { Outlet } from "react-router-dom";
// import "./styles.css";


function Layout() {
  return (
    <div className="layout">
      <div>
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
