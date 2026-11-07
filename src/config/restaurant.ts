// Single place to customise the restaurant's identity and contact details.
// All values below are placeholders for a fictional demo restaurant.
export const restaurant = {
  name: "The Local Table",
  tagline: "Good Food. Pure Veg. Good Times.",
  phoneDisplay: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  // WhatsApp number in international format without "+" (placeholder).
  whatsappNumber: "910000000000",
  whatsappMessage: "Hi The Local Table! I'd like to make an enquiry.",
  addressLines: ["Shop No. 00, Your Street Name", "Your Area, Your City – 000000", "India"],
  mapsQuery: "Connaught Place, New Delhi",
  hours: [
    { days: "Monday – Friday", time: "11:30 AM – 10:30 PM" },
    { days: "Saturday – Sunday", time: "11:00 AM – 11:00 PM" },
  ],
} as const;

export const whatsappUrl = `https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(
  restaurant.whatsappMessage,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  restaurant.mapsQuery,
)}&output=embed`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  restaurant.mapsQuery,
)}`;
