// PLACEHOLDER: the owner's Privacy Policy and Terms of Use go here verbatim once
// they arrive. Only markup may change: section headings become "## ", bullets "- ".
// Never paraphrase the owner's wording.

// PLACEHOLDER: effective date from the owner's documents
export const legalUpdated = "Coming soon";

const PENDING =
  "The full text of this document will be published here as soon as it is finalised.\n\n## Contact\n\nIf you have questions in the meantime, write to support@example.com.";

// "At a glance" cards are a site summary, not part of the documents — fill them
// from the final texts.
export const privacy = {
  title: "Privacy Policy",
  current: "privacy",
  body: PENDING,
  glance: undefined as [string, string][] | undefined,
  other: { to: "/terms", label: "Terms of Use" },
};

export const terms = {
  title: "Terms of Use",
  current: "terms",
  body: PENDING,
  glance: undefined as [string, string][] | undefined,
  other: { to: "/privacy", label: "Privacy Policy" },
};
