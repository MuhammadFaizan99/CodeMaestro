import React, { useState, useEffect } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, useNavigate } from "react-router-dom";
import SidebarStyles from "./Sidebar.module.css";
import { jwtDecode } from "jwt-decode";
import ProfileImg from "../../../public/assets/Picture.jpg"

// Import Material-UI icons
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AssignmentIcon from "@mui/icons-material/Assignment";
import WorkIcon from "@mui/icons-material/Work";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Sidebar() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/sign-in");
  };

  // Check if token exists in localStorage
  const token = localStorage.getItem("token");
  let isUserLoggedIn = false;
  let isAdmin = false;

  if (token) {
    isUserLoggedIn = true;
    const decodedToken = jwtDecode(token);
    isAdmin = decodedToken.role === "admin";
  }

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 700);
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize); // Add listener for window resize

    return () => window.removeEventListener("resize", handleResize); // Clean up
  }, []);

  return (
    <div className={SidebarStyles.sidebarWrapper}>
      <ProSidebar collapsed={collapsed} className={SidebarStyles.sidebar}>
        <SidebarHeader>
          <div className={SidebarStyles.logo} onClick={toggleSidebar}>
            {collapsed ? (
              <MenuIcon className={SidebarStyles.menuIcon} />
            ) : (
              <>
                <img src={ProfileImg} alt="User" />
                <span>Muhammad Faizan</span>
                <p className={SidebarStyles.userDescription}>MERN Stack Dev</p>
                <div className={SidebarStyles.socialMediaIcons}>
                  <a
                    href="https://github.com/MuhammadFaizan99?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-faizan-0461b1192/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/faf2001f/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </>
            )}
          </div>
        </SidebarHeader>
        <SidebarContent className={SidebarStyles.sidebarContent}>
          <Menu iconShape="square">
            <MenuItem icon={<HomeIcon />}>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem icon={<SchoolIcon />}>
              <Link to="/education">Education</Link>
            </MenuItem>
            <MenuItem icon={<LibraryBooksIcon />}>
              <Link to="/portfolio">Portfolio</Link>
            </MenuItem>
            {isAdmin && (
              <MenuItem icon={<AssignmentIcon />}>
                <Link to="/papers">Papers</Link>
              </MenuItem>
            )}
            {!isAdmin && (
              <MenuItem icon={<DescriptionIcon />}>
                <Link to="/papers">Papers</Link>
              </MenuItem>
            )}
            <MenuItem icon={<WorkIcon />}>
              <Link to="/experience">Experience</Link>
            </MenuItem>
          </Menu>
          {!collapsed && (
          <div className={SidebarStyles.buttonWrapper}>
            {/* Conditionally render based on login status, role, and collapsed state */}
            {isAdmin && isUserLoggedIn && (
              <>
                <button
                  onClick={handleSignOut}
                  className={SidebarStyles.button}
                >
                  <PersonIcon className={SidebarStyles.icon} />
                  Sign Out
                </button>
                <button
                  onClick={() => navigate("/upload-paper")}
                  className={SidebarStyles.button}
                >
                  <DescriptionIcon className={SidebarStyles.icon} />
                  Papers
                </button>
              </>
            )}
            {/* {!isUserLoggedIn && (
              <>
                <button onClick={() => navigate("/sign-up")} className={SidebarStyles.button}>
                  <PersonAddIcon className={SidebarStyles.icon} />
                  Sign Up
                </button>
                <button onClick={() => navigate("/sign-in")} className={SidebarStyles.button}>
                  <PersonIcon className={SidebarStyles.icon} />
                  Sign In
                </button>
                
              </>
            )} */}
          </div>
        )}
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}
