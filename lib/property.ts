import { properties, type Property, type PropertyType } from "@/data/properties";

export const propertyTypes: PropertyType[] = ["Luxury", "Commercial", "Residential"];

export const featuredProperties = properties.filter((property) => property.featured);

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((property) => property.slug === slug);
}

export function filterByType(type: PropertyType | "All"): Property[] {
  if (type === "All") {
    return properties;
  }

  return properties.filter((property) => property.type === type);
}
