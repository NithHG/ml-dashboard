import React from "react";
import "./app.css";
import SidebarBrand from "./Sidebar/SidebarBrand.js";
import NavItemDashboard from "./Sidebar/NavItemDashboard.js";
import NavItemPages from "./Sidebar/NavItemPages.js";
import NavItemCharts from "./Sidebar/NavItemCharts.js";
import NavItemTables from "./Sidebar/NavItemTables.js";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <SidebarBrand />
      <hr className="sidebar-divider my-0" />
      <NavItemDashboard />
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Actions</div>
      <NavItemPages />
      <NavItemCharts />
      <NavItemTables />
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default Sidebar;
