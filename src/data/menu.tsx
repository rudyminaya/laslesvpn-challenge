import { LocationIcon, ServerIcon, UserIcon } from "@/components/icons"
import { FeatureItemTypes, MenuItemsTypes } from "@/types"

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

export const FeatureItems: FeatureItemTypes[] = [
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
