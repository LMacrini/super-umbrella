export function formatDate(dateString, lang = "en") {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString(lang, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
