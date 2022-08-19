import { AppNavBar, NavItem, setItemActive } from "baseui/app-nav-bar";
import * as React from "react";
import { useRouter } from "next/router";
import slugify from "../helpers/slugify";
import { Route, ROUTES } from "../helpers/router";

type NavbarProps = {
  currentRoute: Route;
};

const routeToNavItem = ({ label }: Route) => ({ label });
const homeOrSlugify = (label: string) => (label === "Home" ? "" : slugify(label));

export default function Navbar({ currentRoute }: NavbarProps) {
  const navItems = ROUTES.map(routeToNavItem);
  const navItemsActive = setItemActive(navItems, routeToNavItem(currentRoute));
  const router = useRouter();

  function routeTo(item: NavItem) {
    router.push(`/${homeOrSlugify(item.label)}`);
  }

  return (
    <AppNavBar
      title="Unusual Time Series Detection"
      mainItems={navItemsActive}
      onMainItemSelect={item => routeTo(item)}
      username="Version"
      userItems={[{ label: "Version 1" }]}
      overrides={{
        AppName: {
          style: ({ $theme }) => ({
            minWidth: "35vw",
          }),
        },
      }}
    />
  );
}
