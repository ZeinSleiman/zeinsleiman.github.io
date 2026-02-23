export interface ContactLink {
  id: string;
  label: string;
  url: string;
  icon: string;
  order: number;
}

export const contactLinks: ContactLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/zeinsleiman",
    icon: "github",
    order: 1,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/zeinhajjsleiman",
    icon: "linkedin",
    order: 2,
  },
];
