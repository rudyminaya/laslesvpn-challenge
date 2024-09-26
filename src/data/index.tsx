import { LocationIcon, ServerIcon, UserIcon } from "@/components/icons"
import { MetricItemTypes, MenuItemsTypes, PlanItemTypes, TestimonialItemsTypes } from "@/types"

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

export const TestimonialsItems: TestimonialItemsTypes[] = [
  {
    id: 1,
    name: "Brooklyn Simmons",
    job: "Warsaw,pland",
    description:
      "wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best",
    photo: "/assets/photo1.png",
    stars: 4.5,
  },
  {
    id: 2,
    name: "Darlene Robertson",
    job: "Warsaw,pland",
    description:
      "wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best",
    photo: "/assets/photo2.png",
    stars: 4.5,
  },
  {
    id: 3,
    name: "Darrell Steward",
    job: "Warsaw,pland",
    description:
      "wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best",
    photo: "/assets/photo3.png",
    stars: 4.5,
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    job: "Warsaw,pland",
    description:
      "wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best",
    photo: "/assets/photo1.png",
    stars: 4.5,
  },
  {
    id: 5,
    name: "Darlene Robertson",
    job: "Warsaw,pland",
    description:
      "wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best",
    photo: "/assets/photo2.png",
    stars: 4.5,
  },
  {
    id: 6,
    name: "Darrell Steward",
    job: "Warsaw,pland",
    description:
      "wow...iam very happy to use this vpn,it turned out to be more than my expectations and so far there have been no problems. laslesvpn always the best",
    photo: "/assets/photo3.png",
    stars: 4.5,
  },
]
