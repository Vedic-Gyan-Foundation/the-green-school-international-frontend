import { useEffect, useState } from "react";
import { siteDocuments } from "../data/siteDocuments";

const API_URL = "https://api.greenschoolguwahati.com/v1/documents/site";

const LOCATIONS = [
  "disclosure_b",
  "disclosure_c",
  "navbar_fee",
  "admission_form",
];

// file_url is typed into the admin panel and stored unvalidated, so a
// "javascript:" value would otherwise become a live script sink on a public
// page — both in an href and via the new-tab fallback inside downloadFile().
export const isSafeDocumentHref = (url) => {
  if (typeof url !== "string") return false;
  const trimmed = url.trim();
  return /^(https?:)?\/\//i.test(trimmed) || trimmed.startsWith("/");
};

// "The API returned an empty list" means two different things depending on where
// it came from, so the policy is per location rather than global.
//
// The two disclosure tables are CBSE-mandated. An empty table there is a
// compliance failure and strictly worse than a stale one, so empty is read as
// "nothing to say" and the bundled list stands — see src/data/siteDocuments.js.
//
// The fee menu and the admission button are ordinary site furniture. If the
// school removes every entry that is a decision, and honouring it is the only
// way the admin panel can actually take something off the website. Consumers of
// these two locations must therefore render nothing when the list is empty.
const KEEP_FALLBACK_WHEN_EMPTY = new Set(["disclosure_b", "disclosure_c"]);

function mergeWithFallback(data) {
  const merged = {};
  for (const location of LOCATIONS) {
    const incoming = data?.[location];

    if (!Array.isArray(incoming)) {
      merged[location] = siteDocuments[location];
      continue;
    }

    merged[location] =
      incoming.length === 0 && KEEP_FALLBACK_WHEN_EMPTY.has(location)
        ? siteDocuments[location]
        : incoming;
  }
  return merged;
}

// The Navbar is mounted on every page and Public Disclosure / Admissions mount
// alongside it, so the result is cached and in-flight requests are shared: one
// network call per page load, not one per consumer.
let cachedDocuments = null;
let inFlightRequest = null;

function loadSiteDocuments() {
  if (cachedDocuments) return Promise.resolve(cachedDocuments);
  if (inFlightRequest) return inFlightRequest;

  inFlightRequest = fetch(API_URL)
    .then((res) => res.json())
    .then((result) => {
      if (!result?.success || !result.data) {
        throw new Error("Malformed /v1/documents/site response");
      }
      cachedDocuments = mergeWithFallback(result.data);
      return cachedDocuments;
    })
    .catch((err) => {
      console.error("Failed to fetch site documents", err);
      // Leave the cache empty so a later mount can retry, and hand back the
      // bundled copy untouched.
      inFlightRequest = null;
      return siteDocuments;
    });

  return inFlightRequest;
}

// Returns the grouped documents for every location, seeded with the bundled
// copy so content paints on the first render with no empty flash and no spinner.
export function useSiteDocuments() {
  const [documents, setDocuments] = useState(cachedDocuments || siteDocuments);

  useEffect(() => {
    let active = true;
    loadSiteDocuments().then((next) => {
      if (active) setDocuments(next);
    });
    return () => {
      active = false;
    };
  }, []);

  return documents;
}

export default useSiteDocuments;
