import { LocationIcon, ServerIcon, UserIcon } from "@/components/icons"
import { MetricItemTypes, MenuItemsTypes, PlanItemTypes } from "@/types"

export const MenuItems: MenuItemsTypes[] = [
  {
    title: "Features",
    url: "#features",
  },
  {
    title: "Pricing",
    url: "#pricing",
  },
  {
    title: "Testimonial",
    url: "#testimonial",
  },
  {
    title: "Help",
    url: "#help",
  },
]

export const MetricsItems: MetricItemTypes[] = [
  {
    icon: <UserIcon />,
    quantity: 90,
    description: "Users",
  },
  {
    icon: <LocationIcon />,
    quantity: 30,
    description: "Locations",
  },
  {
    icon: <ServerIcon />,
    quantity: 50,
    description: "Servers",
  },
]

export const FeaturesItems: string[] = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
]

export const PlanItems: PlanItemTypes[] = [
  {
    title: "Free",
    price: 0,
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
    ],
  },
  {
    title: "Standard Plan",
    price: 9,
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
  },
  {
    title: "Premium Plan",
    price: 12,
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
  },
]
