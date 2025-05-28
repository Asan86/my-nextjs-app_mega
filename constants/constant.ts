export type NavLink = {
  id: number;
  url: string;
  label: string;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { id: 1, url: "/", label: "Главная" },
  { id: 2, url: "/tours", label: "Туры" },
  { id: 3, url: "/contacts", label: "Контакты" },
  { id: 4, url: "/login", label: "Вход" },
];
