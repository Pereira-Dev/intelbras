
import { FireIcon } from "../assets/icons/fire";
import { HomeIcon } from "../assets/icons/home";
import { SidebarResource } from "../components/core/sidebar/types";

export const MENU_RESOURCES_CONFIGS: SidebarResource[] = [
  {
    id: "home",
    title: "Home",
    item: <HomeIcon customSize="2.3rem" />,
    path: "/home",
  },
  {
    id: "center",
    title: "Centrais",
    item: <FireIcon customSize="2.3rem" />,
    path: "/center",
  },
];
