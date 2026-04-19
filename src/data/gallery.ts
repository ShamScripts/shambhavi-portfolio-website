export type GalleryPhoto = {
  id: string;
  caption: string;
  category: "ACM" | "ACM-W" | "College Events";
  src: string;
  aspect?: "portrait" | "landscape" | "square";
};

export const galleryPhotos: GalleryPhoto[] = [

  /* ── ACM-W (7 photos) ── */
  { id: "acmw1", caption: "ACM-W — leadership & outreach",       category: "ACM-W", src: "/gallery/ACMW/acmw.jpg",                                              aspect: "landscape" },
  { id: "acmw2", caption: "Workshop day — behind the scenes",    category: "ACM-W", src: "/gallery/ACMW/1747935588976.jpg",                                    aspect: "square"    },
  { id: "acmw3", caption: "ACM-W Workshop on ML Applications, 2025", category: "ACM-W", src: "/gallery/ACMW/1747935590084.jpg",                              aspect: "landscape" },
  { id: "acmw4", caption: "ACM-W — team on stage",               category: "ACM-W", src: "/gallery/ACMW/1747935591943.jpg",                                    aspect: "portrait"  },
  { id: "acmw5", caption: "Community event — ACM-W booth",       category: "ACM-W", src: "/gallery/ACMW/555070c7-31fa-4ddd-881c-92474aa2edab.jpg",             aspect: "landscape" },
  { id: "acmw6", caption: "ACM-W — volunteers & attendees",        category: "ACM-W", src: "/gallery/ACMW/c5746709-02a6-47d8-bcdc-6b915c305175.jpg",             aspect: "square"    },
  { id: "acmw7", caption: "ACM-W — group photo",                 category: "ACM-W", src: "/gallery/ACMW/63bdfcf0-0b1a-4b80-b95d-f15d924c8f8c.jpg",             aspect: "portrait"  },

  /* ── ACM (7 photos) ── */
  { id: "acm1",  caption: "ACM chapter — tech programme night", category: "ACM",   src: "/gallery/ACM/1771761545219.jpg",                                     aspect: "landscape" },
  { id: "acm2",  caption: "ACM — organising committee",         category: "ACM",   src: "/gallery/ACM/63908499-56bf-455a-82a3-3606379e5bba.jpg",              aspect: "portrait"  },
  { id: "acm3",  caption: "ACM — speaker session",              category: "ACM",   src: "/gallery/ACM/b7cb39d7-2a9e-45d2-bdea-c204fddb081f.jpg",              aspect: "landscape" },
  { id: "acm4",  caption: "ACM workshop — hands-on lab",        category: "ACM",   src: "/gallery/ACM/c05c41d5-8d0f-4c60-aef8-1afc2e6252e9.jpg",              aspect: "square"    },
  { id: "acm5",  caption: "ACM — event floor",                  category: "ACM",   src: "/gallery/ACM/cf51c272-d4fe-4a37-ad66-531aa10b8bc0.jpg",              aspect: "portrait"  },
  { id: "acm6",  caption: "ACM — audience & demos",             category: "ACM",   src: "/gallery/ACM/d990ef60-22e9-4c6a-b8fd-d93768f242d2.jpg",              aspect: "landscape" },
  { id: "acm7",  caption: "ACM — wrap-up & photos",             category: "ACM",   src: "/gallery/ACM/e91a43fe-dcf6-4c97-a7ae-e648e3fcdb24.jpg",              aspect: "square"    },

  /* ── College Events (18 photos) ── */
  // Conferences
  { id: "ce-cins1",   caption: "CINS 2024 — Session Compère",   category: "College Events", src: "/gallery/COLLEGE%20EVENTS/cins.jpg",                                aspect: "landscape" },
  { id: "ce-cins2",   caption: "CINS 2024 — conference floor", category: "College Events", src: "/gallery/COLLEGE%20EVENTS/cins%20(2).jpg",                          aspect: "landscape" },
  { id: "ce-wicode",  caption: "WiCoDE'26 Host Team",           category: "College Events", src: "/gallery/COLLEGE%20EVENTS/wicode.jpg",                              aspect: "landscape" },
  { id: "ce-icain",   caption: "ICAIN 2025 — delegate",        category: "College Events", src: "/gallery/COLLEGE%20EVENTS/ican.jpg",                                aspect: "landscape" },
  // Campus / events
  { id: "ce1",   caption: "Showcase — project demos",              category: "College Events", src: "/gallery/COLLEGE%20EVENTS/1702316796780.jpg",                        aspect: "landscape" },
  { id: "ce2",   caption: "Club fair — BITS Dubai",                category: "College Events", src: "/gallery/COLLEGE%20EVENTS/1702316803254.jpg",                        aspect: "square"    },
  { id: "ce3",   caption: "Talk in session — audience",            category: "College Events", src: "/gallery/COLLEGE%20EVENTS/1728227316659.jpg",                        aspect: "landscape" },
  { id: "ce4",   caption: "On campus — with cohort",               category: "College Events", src: "/gallery/COLLEGE%20EVENTS/1728227321259.jpg",                        aspect: "portrait"  },
  { id: "ce5",   caption: "Evening event — performance",           category: "College Events", src: "/gallery/COLLEGE%20EVENTS/1747937257223.jpg",                        aspect: "square"    },
  { id: "ce6",   caption: "Group work — presentation day",         category: "College Events", src: "/gallery/COLLEGE%20EVENTS/7d5562e7-4cff-46fe-9c8f-55ffef012ec2.jpg", aspect: "portrait"  },
  { id: "ce7",   caption: "Visit day — group photo",               category: "College Events", src: "/gallery/COLLEGE%20EVENTS/9235e2b1-27d1-4055-8677-a957c404f49c.jpg", aspect: "square"    },
  { id: "ce8",   caption: "Conference — networking break",        category: "College Events", src: "/gallery/COLLEGE%20EVENTS/170661fe-6457-431c-8f43-0c770c27762b.jpg", aspect: "landscape" },
  { id: "ce9",   caption: "Workshop — in session",                 category: "College Events", src: "/gallery/COLLEGE%20EVENTS/3b5e8b01-c27a-4d4e-a4d1-e196342801e1.jpg", aspect: "portrait"  },
  { id: "ce10",  caption: "Ceremony — on stage",                   category: "College Events", src: "/gallery/COLLEGE%20EVENTS/895b1f77-9df7-497e-90ae-647b3a70f326.jpg", aspect: "square"    },
  { id: "ce11",  caption: "Formal evening — BITS Pilani Dubai",    category: "College Events", src: "/gallery/COLLEGE%20EVENTS/d48fc4b5-0544-4623-868e-979a6916447c.jpg", aspect: "landscape" },
  { id: "ce12",  caption: "Open day — lab floor",                  category: "College Events", src: "/gallery/COLLEGE%20EVENTS/e485627a-24fc-44d7-ae46-ac7ae7b35e7d.jpg", aspect: "square"    },
  { id: "ce13",  caption: "Student fest — organising team",        category: "College Events", src: "/gallery/COLLEGE%20EVENTS/fd822986-b86b-4674-844e-c33568dc356c.jpg", aspect: "portrait"  },
];

export const galleryCategories = [
  "All",
  "ACM-W",
  "ACM",
  "College Events",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];
