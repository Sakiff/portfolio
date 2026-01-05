export type MenuItem = {
  label: string;
  path: `/${string}`;
};

export const MENU_ITEMS: readonly MenuItem[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Resume", path: "/resume" },
  { label: "Work", path: "/work" },
] as const;
