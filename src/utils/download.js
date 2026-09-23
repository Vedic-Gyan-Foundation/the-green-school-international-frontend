// Force a file download from any URL — including cross-origin resources where
// the `download` HTML attribute would otherwise be ignored. Fetches the file
// as a Blob, creates an object URL, and clicks a synthetic <a download="...">.
// If the fetch fails (e.g. CORS-blocked, offline), gracefully falls back to
// opening the URL in a new tab so the user is never stuck.
// Filenames now reach this function from admin uploads, and a name containing a
// bare "%" makes decodeURIComponent throw — which would happen before the fetch
// below, so the button would do nothing at all rather than degrade. Fall back to
// the undecoded segment, which is still a usable filename.
function filenameFromUrl(url) {
  const segment = String(url).split("/").pop().split("?")[0];
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

export async function downloadFile(url, suggestedName) {
  const filename = suggestedName || filenameFromUrl(url) || "download";

  try {
    const response = await fetch(url, { credentials: "omit" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Free the blob after the click has been dispatched
    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
    return true;
  } catch (err) {
    console.warn("Direct download failed, opening in new tab:", err);
    window.open(url, "_blank", "noopener,noreferrer");
    return false;
  }
}
