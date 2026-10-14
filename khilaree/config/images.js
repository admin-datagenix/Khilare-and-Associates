// ============================================================
// HD IMAGE URLS
// Change any URL below when you want to replace an image.
// The URLs use high-resolution Unsplash images with q=90 and w=3000.
// ============================================================
const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&fm=jpg&q=90&w=3000`;

export const siteImages = {
  heroSlides: [
    u('photo-1783144182707-b04ce3b2d7e2'),
    u('photo-1710802062696-cea4bc3f6400'),
    u('photo-1781078448085-c11883cc287f'),
  ],
  studio: u('photo-1742112125554-fdb788faedaa'),
  engineering: u('photo-1657728468574-efcc2b7ea634'),
  city: u('photo-1769591364803-60457b0ac84c'),
  building: u('photo-1693661391267-ad955aeeb564'),
  interior: u('photo-1771970472787-68ec58174962'),
  projects: [
    u('photo-1757436382135-5cb8e5cbcda5'),
    u('photo-1690947154907-4a56e52e6889'),
    u('photo-1781078448085-c11883cc287f'),
    u('photo-1710802062696-cea4bc3f6400'),
  ],
  gallery: [
    u('photo-1657728468574-efcc2b7ea634'),
    u('photo-1783144182707-b04ce3b2d7e2'),
    u('photo-1769591364803-60457b0ac84c'),
    u('photo-1771970472787-68ec58174962'),
    u('photo-1690947154907-4a56e52e6889'),
    u('photo-1742112125554-fdb788faedaa'),
  ],
};

export const imageSources = {
  hero: 'Unsplash HD construction imagery',
  changeNote: 'Edit the URL values in config/images.js — no CSS changes required.',
};
