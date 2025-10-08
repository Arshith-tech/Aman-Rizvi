// utils/api.ts
export async function fetchBio() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/bios`);
  if (!res.ok) throw new Error("Failed to fetch bio");
  const data = await res.json();
  return data.data[0].Bio; // or adjust based on your API response
}

export async function fetchAbout() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/abouts`);
  if (!res.ok) throw new Error("Failed to fetch about");
  const data = await res.json();
  return data.data[0].About; // rich text JSON array
}

export async function fetchExperiences() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/experiences`);
  if (!res.ok) throw new Error("Failed to fetch experiences");
  const json = await res.json();
  // Map the data to add 'skills' array
  return json.data.map((item: any) => ({
    ...item,
    ...item.attributes,
    skills: item.attributes.Skills
      ? item.attributes.Skills.split(',').map((s: string) => s.trim())
      : [],
  }));
}

export async function fetchUpcomingEvents() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/upcoming-events`);
  if (!res.ok) throw new Error("Failed to fetch upcoming events");
  const json = await res.json();
  return json.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    timeline: item.timeline,
    location: item.location,
    audience: item.audience,
    description: item.description.trim(),
    topics: item.topic
      ? item.topic.split(',').map((topic: string) => topic.trim())
      : [],
  }));
}

