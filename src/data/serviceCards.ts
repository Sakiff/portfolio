import {
  Cable,
  CodeXml,
  Gauge,
  LayoutDashboard,
  ServerCog,
  type LucideIcon,
} from "lucide-react";

export type servicesItem = {
  cardNumber: number;
  icon: LucideIcon;
};

// Titles and texts live in the locale files under `services.cards`,
// in the same order as this list.
export const SERVICE_CARDS: readonly servicesItem[] = [
  { cardNumber: 0, icon: CodeXml }, // Frontend development
  { cardNumber: 1, icon: Gauge }, // SEO & performance
  { cardNumber: 2, icon: ServerCog }, // Full-stack applications
  { cardNumber: 3, icon: LayoutDashboard }, // Admin panels
  { cardNumber: 4, icon: Cable }, // Real-time & integrations
];
