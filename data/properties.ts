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
    slug: "architectural-mansion-banana-island",
    name: "Architectural Mansion · Banana Island",
    price: "₦10.5B",
    address: "Banana Island, Lagos",
    size: "8,400 sq ft",
    bedrooms: 6,
    bathrooms: 7,
    type: "Luxury",
    description:
      "Monolithic galleries, engineered glass, and sculptural landscaping define this waterfront estate with a private dock.",
    features: [
      "Panoramic helipad view deck",
      "Glass-floored show lounge",
      "Infinity-edge pool",
      "Automated climate façade",
    ],
    images: [
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1449247709967-d3cd2d7d14af?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
  },
  {
    id: 2,
    slug: "minimalist-city-loft-victoria-island",
    name: "Minimalist City Loft · Victoria Island",
    price: "₦2.1B",
    address: "Victoria Island, Lagos",
    size: "3,300 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    type: "Residential",
    description:
      "A light-filled loft with sculpted concrete walls, custom millwork, and curated art niches overlooking the lagoon.",
    features: [
      "Double-height gallery",
      "Automated privacy glazing",
      "Chef's atelier kitchen",
      "Smart home automation",
    ],
    images: [
      "https://images.unsplash.com/photo-1505691723518-36a5a15d7d8a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1464146072233-8a8e0ed5a3a5?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: 3,
    slug: "brutalist-concrete-villa-ikoyi",
    name: "Brutalist Concrete Villa · Ikoyi",
    price: "₦4.7B",
    address: "Ikoyi, Lagos",
    size: "6,200 sq ft",
    bedrooms: 5,
    bathrooms: 6,
    type: "Luxury",
    description:
      "Layered concrete planes, natural stone, and recessed lighting embrace a sculptural courtyard and rooftop deck.",
    features: [
      "Corten steel gallery",
      "Cinema-grade screening room",
      "Private elevator",
      "Staff quarters",
    ],
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: 4,
    slug: "lekki-waterfront-condo",
    name: "Lekki Waterfront Condo",
    price: "₦1.35B",
    address: "Lekki Phase 1, Lagos",
    size: "2,450 sq ft",
    bedrooms: 2,
    bathrooms: 3,
    type: "Residential",
    description:
      "Curated high-rise residence with wraparound balconies, concierge parking, and sweeping Lekki Lagoon views.",
    features: [
      "Private concierge lobby",
      "Infinity pool terrace",
      "Smart lighting & sound",
      "Fitness studio",
    ],
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1479874973874-20222ffc1c5b?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: 5,
    slug: "victoria-island-office-hub",
    name: "Victoria Island Office Hub",
    price: "₦6.2B",
    address: "Victoria Island, Lagos",
    size: "13,800 sq ft",
    bedrooms: 0,
    bathrooms: 12,
    type: "Commercial",
    description:
      "Signature Grade-A tower with atrium lounges, private terraces, and hospitality-driven services for creative houses.",
    features: [
      "Concierge café",
      "Dedicated boardroom suites",
      "EV charging bays",
      "Secure art-worthy storage",
    ],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1449247709967-d3cd2d7d14af?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
  },
  {
    id: 6,
    slug: "abuja-modern-villa",
    name: "Abuja Modern Villa",
    price: "₦3.2B",
    address: "Maitama, Abuja",
    size: "5,600 sq ft",
    bedrooms: 4,
    bathrooms: 5,
    type: "Luxury",
    description:
      "Serene villa anchored by a sculptural staircase, floating terraces, and a private lap pool framed by palms.",
    features: [
      "Sustainable green roof",
      "Library & study",
      "Smart shading",
      "Private spa suite",
    ],
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: 7,
    slug: "lekki-creative-campus",
    name: "Lekki Creative Campus",
    price: "₦2.8B",
    address: "Lekki, Lagos",
    size: "9,500 sq ft",
    bedrooms: 0,
    bathrooms: 10,
    type: "Commercial",
    description:
      "Flexible compound for luxury showrooms, design ateliers, and boutique hospitality with lush atriums.",
    features: [
      "Atrium courtyard",
      "Rooftop bar",
      "Gallery lighting",
      "On-site concierge",
    ],
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1449247709967-d3cd2d7d14af?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: 8,
    slug: "port-harcourt-riverfront-residence",
    name: "Port Harcourt Riverfront Residence",
    price: "₦1.75B",
    address: "Port Harcourt, Rivers",
    size: "3,900 sq ft",
    bedrooms: 3,
    bathrooms: 4,
    type: "Residential",
    description:
      "Elevated residence with layered balconies, timber louvers, and panoramic views of the Mississippi-style estuary.",
    features: [
      "Private berth",
      "Terrace cinema",
      "Biophilic gardens",
      "Floating dining pavilion",
    ],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];
