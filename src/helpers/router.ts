export interface Route {
  label: string;
  href: string;
}

// assumes that the labels are unique
export const ROUTES: Route[] = [
  { label: "Home", href: "/" },
  { label: "Usage", href: "/usage" },
  { label: "About", href: "/about" },
];
