export type PropertyType = "Luxury" | "Commercial" | "Residential";

export type Property = {
  id: number;
  slug: string;
  name: string;
  price: string;
  address: string;
  size: string;
  bedrooms: number;
  bathrooms: number;
  type: PropertyType;
  description: string;
  features: string[];
  images: string[];
  featured?: boolean;
};

export const properties: Property[] = [
  {
    id: 1,
    slug: "banana-island-waterfront-villa",
    name: "Banana Island Waterfront Villa",
    price: "₦9.4B",
    address: "Banana Island, Lagos",
    size: "7,200 sq ft",
    bedrooms: 6,
    bathrooms: 7,
    type: "Luxury",
    description:
      "An iconic modern mansion with double-height features, curated art spaces, and a private quay.",
    features: [
      "Private dock",
      "Glass elevator",
      "Infinity pool",
      "Miele kitchen",
    ],
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "victoria-island-glass-tower",
    name: "Victoria Island Glass Tower",
    price: "₦5.8B",
    address: "Victoria Island, Lagos",
    size: "12,400 sq ft",
    bedrooms: 0,
    bathrooms: 12,
    type: "Commercial",
    description:
      "High-performance Grade A office tower with concierge services, private boardroom, and rooftop lounge.",
    features: [
      "Smart building automation",
      "Tier-4 power backup",
      "Dedicated concierge team",
      "Rooftop lounge",
    ],
    images: [
      "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 3,
    slug: "ikoyi-bespoke-townhome",
    name: "Ikoyi Bespoke Townhome",
    price: "₦3.1B",
    address: "Ikoyi, Lagos",
    size: "5,200 sq ft",
    bedrooms: 4,
    bathrooms: 5,
    type: "Residential",
    description:
      "Refined townhome with soaring ceilings, private courtyard, and rooftop terrace overlooking the lagoon.",
    features: [
      "Rooftop garden",
      "Smart home controls",
      "Wine cellar",
      "Private staff quarters",
    ],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691723518-36a5a15d7d8a?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: 4,
    slug: "lekki-skyline-duplex",
    name: "Lekki Skyline Duplex",
    price: "₦1.85B",
    address: "Lekki Phase 1, Lagos",
    size: "3,900 sq ft",
    bedrooms: 3,
    bathrooms: 4,
    type: "Luxury",
    description:
      "Sculpted for contemporary living, this duplex blends timber, stone, and voided spaces flooded with natural light.",
    features: [
      "Smart lighting",
      "Infinity edge balcony",
      "Designer kitchen",
      "24/7 valet",
    ],
    images: [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 5,
    slug: "victoria-island-riverside-residence",
    name: "Victoria Island Riverside Residence",
    price: "₦980M",
    address: "Victoria Island, Lagos",
    size: "2,850 sq ft",
    bedrooms: 2,
    bathrooms: 3,
    type: "Residential",
    description:
      "An elevated apartment with bespoke fittings, panoramic lagoon views, and concierge parking.",
    features: [
      "Concierge parking",
      "Smart home integration",
      "Private fitness suite",
      "Customized cabinetry",
    ],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: 6,
    slug: "lekki-commercial-creative-hub",
    name: "Lekki Commercial Creative Hub",
    price: "₦2.4B",
    address: "Lekki, Lagos",
    size: "9,000 sq ft",
    bedrooms: 0,
    bathrooms: 8,
    type: "Commercial",
    description:
      "Collaborative campus for boutiques or design studios featuring lush atriums and flexible workspaces.",
    features: [
      "Atrium courtyards",
      "Flexible suites",
      "Concierge cafes",
      "High-speed fiber",
    ],
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1468106990013-01c42c15f6e3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
];
