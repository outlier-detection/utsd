import { AppNavBar, NavItemT, setItemActive } from "baseui/app-nav-bar";
import * as React from "react";
import { useRouter } from "next/router";
import slugify from "../helpers/slugify";
import { Route, ROUTES } from "../helpers/router";

type NavbarProps = {
  currentRoute: Route;
};

const routeToNavItem = ({ label }: Route) => ({ label });
const homeOrSlugify = (label: string) => (label === "Home" ? "/" : slugify(label));

export default function Navbar({ currentRoute }: NavbarProps) {
  const navItems = ROUTES.map(routeToNavItem);
  const navItemsActive = setItemActive(navItems, routeToNavItem(currentRoute));
  const router = useRouter();
  function routeTo(item: NavItemT) {
    router.push(homeOrSlugify(item.label));
  }
  return <AppNavBar title="Unusual Time Series" mainItems={navItemsActive} onMainItemSelect={item => routeTo(item)} />;
}
