export interface Route {
  label: string;
  href: string;
}

// assumes that the labels are unique
export const ROUTES: Route[] = [
  { label: "Home", href: "/" },
  { label: "Tasks", href: "/tasks" },
  { label: "Benchmarks", href: "/benchmarks" },
  { label: "Results", href: "/results" },
];
