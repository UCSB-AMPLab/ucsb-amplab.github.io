---
title: "Fisqua"
subtitle: "A multi-tenant cataloguing platform for archives of any size — open-source primitives, hosted by AMPL or self-deployable."
status: active
kind: SOFTWARE
leadership:
date: 2026-04-23 00:00:00
description: "Fisqua is a multi-tenant cataloguing platform for archives ranging from community-led initiatives to major libraries, built on open archival standards and minimal computing infrastructure."
featured_image: catalogacion-2x3.jpg
accent_color: '#A5469A'
gallery_images:
  - catalogacion-2x3.jpg
---

**Fisqua** is AMPL's tool for archives to do the work of cataloguing — describing materials, managing authorities and controlled vocabularies, and assembling the hierarchies that hold a collection together. It is one of the four open-source primitives AMPL develops with its partners, alongside the [Digitization Toolkit](/project/digitization-toolkit), which captures, [Zasqua](/project/zasqua), which publishes, and [Telar](/project/telar), which tells. The four are designed to work together as a full pipeline, but each can be used independently — with other tools, or on its own — depending on what an archive needs.

Fisqua describes materials in ISAD(G) and authorities in ISAAR(CPF), serves images as IIIF, wraps preservation metadata in METS, and exports to EAD and EAC-CPF. These are not Fisqua's inventions but the standards the international archival community has settled on, and using them means that a collection catalogued in Fisqua is portable from day one. The primitive — the schema, the data formats, the workflow — is open regardless of what software an archive uses to run it; the work an archivist puts into Fisqua belongs to them.

One feature at the heart of Fisqua distinguishes it from most archive management platforms: it is designed to open description work to volunteers, students, and community members under professional archival review. This emphasis has come out of more than a decade of practice — working with UCSB undergraduates to catalogue endangered archives in Latin America, and with [Neogranadina](https://neogranadina.org)'s network of volunteers around the world — and we call it **Collaborative Cataloguing**. A convenor assigns items; contributors describe them against the catalogue's controlled fields and vocabularies; the convenor reviews and approves entries before they enter the catalogue. Three things come out of this at once: archival description produced at a scale few institutions can resource on their own; hands-on training in the core skills of historical archival work — palaeography, description, and authority work — that are otherwise hard to come by outside professional programmes; and a practice of archiving that stays open to the communities and publics whose materials are being described.

AMPL operates one such implementation: a hosted, multi-tenant [Fisqua](https://fisqua.org) that partners use without maintaining servers of their own. It runs on Cloudflare Workers, D1, and R2 — a minimal-computing stack that keeps the per-tenant cost of a serious catalogue low enough to offer to archives that could not otherwise afford one. For institutions that prefer to run the primitive themselves, the schema and the tooling that turns catalogued data into an exportable archive are available as open source: a partner that begins on the hosted Fisqua can leave with everything they have put in.

The hosted instance is already in use. It supports the cataloguing work of Neogranadina across five partner repositories in Colombia and Peru — ranging from community-held collections to the Peruvian National Library, and comprising over 106,000 archival descriptions in total — as well as AMPL's own cataloguing. Further partner deployments are planned through UCSB's [**Robinson Archives Initiative**](https://www.library.ucsb.edu/news/ucsb-receives-robinson-archive), a collaboration with community archives of social movement histories in the United States and beyond. Each partner keeps its own catalogue within the shared hosted instance, sharing the infrastructure but never the data.

The name **Fisqua** comes from a Muisca verb meaning *gathering scattered things*, related to forms for searching, gathering, and traversing — a cluster of meanings that describes both the work the tool enables and the historical processes the resulting catalogues help document.

Source code: [Fisqua on GitHub](https://github.com/neogranadina/zasqua-catalogacion).
