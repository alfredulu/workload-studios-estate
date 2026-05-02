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
      "6-bedroom waterfront mansion on Banana Island with a private dock, helipad deck, and full staff quarters. 8,400 sq ft on a landscaped compound. Ready to move in.",
    features: [
      "Helipad view deck",
      "Glass-floored living room",
      "Infinity pool",
      "Full smart home system",
    ],
    images: [
      "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZnR8ZW58MHx8MHx8fDA%3D",
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
      "3-bedroom loft apartment on Victoria Island with direct lagoon views, open-plan layout, and fully fitted kitchen. High-floor unit with 3,300 sq ft of living space.",
    features: [
      "Double-height living room",
      "Automated smart glass windows",
      "Fully fitted kitchen with island",
      "Smart home automation",
    ],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
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
      "5-bedroom detached villa in Ikoyi with rooftop deck, private courtyard, and internal elevator. Natural stone finishes throughout. Ideal for families who want space and security.",
    features: [
      "Private gallery space",
      "Home cinema room",
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
      "2-bedroom high-rise condo in Lekki Phase 1 with direct lagoon views, wraparound balcony, and 24/7 estate security. Well-managed building with facilities.",
    features: [
      "24/7 concierge lobby",
      "Rooftop pool terrace",
      "Smart lighting & sound",
      "On-site gym",
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
      "Grade-A commercial floor space on Victoria Island. 13,800 sq ft across multiple units. Suitable for corporate offices, creative agencies, and hospitality businesses. Ready for fit-out.",
    features: [
      "On-site café",
      "Dedicated boardroom suites",
      "EV charging bays",
      "Secure storage rooms",
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
      "4-bedroom detached villa in Maitama, Abuja with private lap pool, covered terraces, and a well-landscaped compound. Quiet street, close to the diplomatic zone. Move-in ready.",
    features: [
      "Solar panels and green roof",
      "Library and home office",
      "Smart window shading",
      "Private spa bathroom",
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
      "Commercial compound in Lekki suited for showrooms, offices, and retail. Open atrium layout with rooftop bar and on-site parking. Good for creative businesses and hospitality operators.",
    features: [
      "Open atrium courtyard",
      "Rooftop bar and lounge",
      "Professional lighting throughout",
      "On-site management team",
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
      "3-bedroom riverfront apartment in Port Harcourt with balcony views over the Bonny River estuary, private boat berth, and outdoor terrace. Gated estate, 24/7 security.",
    features: [
      "Private boat berth",
      "Outdoor terrace with cinema screen",
      "Landscaped gardens",
      "Outdoor dining terrace",
    ],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];
