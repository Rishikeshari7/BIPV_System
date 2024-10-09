import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { FaSatellite } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { TbBadgeOff } from "react-icons/tb";
 export const NavIcon = [
    {
      name: "Dashboard",
      to: "/",
      icon: RiDashboardHorizontalFill,
    },
    {
      name: "3D Viewer",
      to: "/viewer",
      icon: FaMapLocationDot,
    },
    {
      name: "Shadow simulation",
      to: "/simulation",
      icon: TbBadgeOff,
    },
    {
      name: "BIPV Reports",
      to: "/reports",
      icon: FaSatellite,
    },
   
    {
      name: "Setting",
      to: "/setting",
      icon: IoSettings,
    },
    {
      name: "Logout",
      to: "/logout",
      icon: IoSettings,
    },
  ];