/** One place for how people reach us. Email is the primary way to request samples. */
export const CONTACT = {
  email: "samples@flavorfactory.net",
  phone: "(951) 273-9877",
  phoneHref: "tel:+19512739877",
  address: "2058 Second Street, Norco, CA 92860",
  mapHref: "https://maps.google.com/?q=2058%20Second%20Street%2C%20Norco%2C%20CA%2092860",
} as const;

export type SampleEmailContext = {
  /** Flavor names to list in the request, e.g. from the shortlist or a flavor page. */
  flavors?: string[];
  /** Industry or application, e.g. "Beverage". */
  industry?: string;
};

/** The short checklist people fill in. Kept brief so the email takes a minute to write. */
export const SAMPLE_EMAIL_FIELDS = [
  "Company",
  "Product you're making",
  "Flavor(s) you're after",
  "Liquid or powder",
  "Label needs (natural, organic, kosher, halal)",
  "Ship samples to",
] as const;

export function sampleEmailParts({ flavors = [], industry }: SampleEmailContext = {}) {
  const subjectBits = ["Sample request"];
  if (flavors.length) subjectBits.push(flavors.slice(0, 3).join(", ") + (flavors.length > 3 ? " +" + (flavors.length - 3) : ""));
  if (industry) subjectBits.push(industry);
  const subject = subjectBits.join(": ");

  const prefilled: Record<string, string> = {};
  if (flavors.length) prefilled["Flavor(s) you're after"] = flavors.join(", ");
  if (industry) prefilled["Product you're making"] = `${industry} product: `;

  const body = [
    "Hi Flavor Factory team,",
    "",
    "We'd like flavor samples.",
    "",
    ...SAMPLE_EMAIL_FIELDS.map((field) => `${field}: ${prefilled[field] ?? ""}`),
    "",
    "Thanks,",
  ].join("\n");

  return { subject, body };
}

/** mailto: link that opens a pre-written sample request in the visitor's email app. */
export function sampleMailto(context?: SampleEmailContext) {
  const { subject, body } = sampleEmailParts(context);
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Web compose links for people whose computer has no email app set up. */
export function webmailLinks(context?: SampleEmailContext) {
  const { subject, body } = sampleEmailParts(context);
  const to = encodeURIComponent(CONTACT.email);
  const su = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return {
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${b}`,
    outlook: `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${su}&body=${b}`,
  };
}
