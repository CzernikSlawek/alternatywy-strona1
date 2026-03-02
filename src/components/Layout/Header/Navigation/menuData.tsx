import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "O nas", href: "/" },
  {
    label: "Opieka",
    href: "#",
    submenu: [
      { label: "Opieka wytchnieniowa", href: "/opieka/wytchnieniowa" },
      { label: "Opieka komercyjna", href: "/opieka/komercyjna" },
    ],
  },
  { label: "Asystentura", href: "/asystentury" },
  { label: "Aktualności", href: "/events" },
  { label: "Nasz zespół", href: "/blog" },
  { label: "Kontakt", href: "/contact" },
  { label: "Galeria", href: "/galeria" },
];
