export type ResourceDocument = {
  name: string;
  description: string;
  availability: string;
};

export type ResourceSection = {
  title: string;
  intro: string;
  items: ResourceDocument[];
};

export const resourceSections: ResourceSection[] = [
  {
    title: "Production documentation",
    intro: "Standard paperwork for approved production flavors. Documentation is formula-specific.",
    items: [
      {
        name: "Certificate of Analysis (COA)",
        description: "Batch-specific analytical results provided with production orders.",
        availability: "Included with production shipments",
      },
      {
        name: "Flavor specification sheet",
        description: "Physical properties, regulatory status, and technical parameters for the approved formula.",
        availability: "Available for approved production flavors",
      },
      {
        name: "Ingredient statement",
        description: "Declaration-ready ingredient listing for the specific flavor formula.",
        availability: "Available by request for approved formulas",
      },
      {
        name: "Allergen statement",
        description: "Allergen declarations based on the ingredients in the specific production formula.",
        availability: "Available for any production flavor",
      },
      {
        name: "Safety Data Sheet (SDS)",
        description: "SDS documentation for handling and storage of the finished flavor product.",
        availability: "Available by request",
      },
    ],
  },
  {
    title: "Facility and quality programs",
    intro: "Documents quality and procurement teams typically request during supplier qualification.",
    items: [
      {
        name: "SQF program documentation",
        description: "Facility quality program information for customer audit and qualification files.",
        availability: "Available by request",
      },
      {
        name: "GMP summary",
        description: "Overview of Good Manufacturing Practices governing raw material receipt through finished-goods release.",
        availability: "Available by request",
      },
      {
        name: "FDA facility registration",
        description: "Registration documentation for our Norco, CA food manufacturing operation.",
        availability: "Available by request",
      },
      {
        name: "Retain sample policy",
        description: "Production batch retain samples maintained as part of our quality program.",
        availability: "Contact quality for lot-specific references",
      },
    ],
  },
  {
    title: "Certification support",
    intro: "Certification status varies by formula. Share label requirements at the start of the project.",
    items: [
      {
        name: "Kosher certification",
        description: "Many flavors carry Kosher certification. Status is confirmed per formula before development proceeds.",
        availability: "Formula-specific; confirmed at project start",
      },
      {
        name: "Halal status",
        description: "Halal qualification reviewed per formula based on ingredient sourcing and project requirements.",
        availability: "Formula-specific; confirmed at project start",
      },
      {
        name: "Organic-compliant formulation",
        description: "Organic-compliant flavor directions using approved organic ingredients where the application qualifies.",
        availability: "Project-specific; built into the development brief",
      },
    ],
  },
  {
    title: "Supplier qualification",
    intro: "We complete standard supplier questionnaires and support regulatory submissions for food manufacturing customers.",
    items: [
      {
        name: "Supplier questionnaire completion",
        description: "Standard vendor qualification forms from co-packers, brands, and distributors.",
        availability: "Email samples@flavorfactory.net with your form",
      },
      {
        name: "Regulatory filing support",
        description: "Documentation typically required for food manufacturing regulatory submissions and supplier files.",
        availability: "Reviewed by project; contact Ryan Wixted via samples@flavorfactory.net",
      },
      {
        name: "New vendor setup",
        description: "W-9, remittance details, shipping terms, and account setup for first production orders.",
        availability: "Provided during commercial onboarding",
      },
    ],
  },
];

export const resourceRequestSteps = [
  "Email samples@flavorfactory.net with your company name and the documents you need.",
  "Include the flavor name or project reference if you have one.",
  "For supplier questionnaires, attach the blank form or a link to your portal.",
  "Quality and regulatory requests are typically answered within 1-2 business days.",
] as const;