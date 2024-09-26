export type MenuItemsTypes = {
  title: string
  url: string
}

export type MetricItemTypes = {
  icon: React.ReactNode
  quantity: number
  description: string
}

export type PlanItemTypes = {
  title: string
  price: number
  features: string[]
}

export type TestimonialItemsTypes = {
  id: number
  name: string
  job: string
  description: string
  photo: string
  stars: number
}

export type SeoLinksType = {
    name: string
    url: string
}

export type FooterLinksTypes = {
    Product: SeoLinksType[]
    Engage: SeoLinksType[]
    "Earn Money": SeoLinksType[]

}