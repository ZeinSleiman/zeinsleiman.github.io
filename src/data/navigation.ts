export interface NavigationPage {
  slug: string;
  title: string;
  icon: string;
}

export const navPages: NavigationPage[] = [
  { slug: "/", title: "Home", icon: "🏠" },
  { slug: "/about/", title: "About", icon: "👤" },
  { slug: "/archive/", title: "Archive", icon: "📦" },
  { slug: "/readings/", title: "Readings", icon: "📚" },
];
