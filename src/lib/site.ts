/** Business constants — aligned with reference v0 deployment notes */
export const SITE = {
  name: "Capital Gainer",
  tagline: "Institutional-grade equity research for serious traders",
  description:
    "Capital Gainer is an Indore-based stock market research company delivering actionable equity, futures, and options intelligence with disciplined risk frameworks.",
  url: "https://capitalgainer.in",
  email: "contact@capitalgainer.in",
  phoneDisplay: "98935 07763",
  phoneTel: "+919893507763",
  whatsappE164: "919893507763",
  addressLines: [
    "Princes Business Skypark, 712–713, AB Road",
    "Opposite Orbit Mall, LIG Colony",
    "Indore, Madhya Pradesh 452010",
  ],
  mapsQuery:
    "Princes+Business+Skypark+712+AB+Road+Indore+Madhya+Pradesh+452010",
} as const;

export function waMeUrl(text: string) {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${SITE.whatsappE164}?text=${encoded}`;
}

export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${SITE.mapsQuery}`;
}
