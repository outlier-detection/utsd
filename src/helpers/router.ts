export interface Route {
    label: string;
    href: string;
}

// assumes that the labels are unique
export const ROUTES: Route[] = [
    {label: "Home", href: "/"},
    {label: "Cite", href: "/cite"}
];
