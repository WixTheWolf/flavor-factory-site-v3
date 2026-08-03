export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  photoAlt: string;
};

export const teamMembers: TeamMember[] = [
  {
    slug: "dan-wixted",
    name: "Dan Wixted",
    title: "President",
    bio: "Founded The Flavor Factory after 40+ years in flavor. Sets project standards and stays close to customer relationships.",
    image: "/images/flavor-factory/team/Dan-Sketch-v2.png",
    photoAlt: "Dan Wixted, President of The Flavor Factory",
  },
  {
    slug: "kelly-ziegler",
    name: "Kelly Ziegler",
    title: "Office Manager",
    bio: "Usually the first point of contact. Handles communication, scheduling, and coordination from first email through final order.",
    image: "/images/flavor-factory/team/Kelly Ziegler-sketch.png",
    photoAlt: "Kelly Ziegler, Office Manager at The Flavor Factory",
  },
  {
    slug: "ryan-wixted",
    name: "Ryan Wixted",
    title: "Quality and Regulatory",
    bio: "Manages quality systems and regulatory documentation: supplier qualification, allergen statements, COAs, and label support.",
    image: "/images/flavor-factory/team/Ryan Wixted-sketch.png",
    photoAlt: "Ryan Wixted, Quality and Regulatory at The Flavor Factory",
  },
  {
    slug: "alex-wixted",
    name: "Alex Wixted",
    title: "Operations",
    bio: "Keeps projects moving from first request through production. Coordinates teams so nothing falls through between sample and order.",
    image: "/images/flavor-factory/team/Alex Wixted-sketch-v2.png",
    photoAlt: "Alex Wixted, Operations at The Flavor Factory",
  },
  {
    slug: "matt-wixted",
    name: "Matt Wixted",
    title: "Production Manager",
    bio: "Bridges sample approval and production. Makes sure the first batch matches what was approved on the bench.",
    image: "/images/flavor-factory/team/Matt Wixted-sketch-v1.png",
    photoAlt: "Matt Wixted, Production Manager at The Flavor Factory",
  },
];