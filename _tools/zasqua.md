---
title: "Zasqua"
subtitle: "A digital archive with no servers: tens of thousands of historical documents, millions of image tiles, and sophisticated search and filtering — all as static files."
status: active
kind: SOFTWARE
leadership:
date: 2026-02-17 00:00:00
description: "Zasqua is an open-source publication frontend that turns catalogued archival data into fast, server-free public sites. Its first deployment, Neogranadina's zasqua.org, holds over 106,000 descriptions from five repositories in Colombia and Peru."
featured_image: /images/tools/zasqua-cover.jpg
accent_color: '#A5469A'
gallery_images:
  - /images/tools/zasqua-1.jpeg
  - /images/tools/zasqua-2.jpeg
  - /images/tools/zasqua-3.jpeg
  - /images/tools/zasqua-4.jpeg
  - /images/tools/zasqua-5.jpeg
---

**Zasqua** is AMPL's tool for archives to publish their catalogued collections — turning structured archival data into a public, discoverable site that readers can search, browse, and explore. It is one of the four open-source primitives AMPL develops with its partners, alongside the [Digitization Toolkit](/project/digitization-toolkit), which captures, [Fisqua](/project/fisqua), which catalogues, and [Telar](/project/telar), which tells. The four are designed to work together as a full pipeline, but each can be used independently — with other tools, or on its own — depending on what an archive needs.

The name **zasqua** is a word in the Muisca language meaning "to place oneself," "to settle," "to remain in a given place or condition" — a verb describing the act of situating something where it belongs. The platform carries this name because that is what it does: it places digitized documentary collections in a stable, open-access space. Documents that were scattered, hard to consult, or at risk of being lost find a place of their own here.[^1]

Most archival discovery platforms depend on application servers, search engines, and databases running at request time. Zasqua takes a different approach, drawing on [minimal computing](https://go-dh.github.io/mincomp/) principles: the entire public site is pre-built as static files. Search is handled client-side by [Pagefind](https://pagefind.app/), hierarchical navigation uses pre-built JSON trees, and all images are served as IIIF Level 0 static tiles — deep zoom without an image server. The result is a site that is fast, cacheable, cheap to host, and resilient. Cataloguing happens in a separate tool — [Fisqua](/project/fisqua), AMPL's cataloguing primitive, or any compatible producer of ISAD(G) descriptions and IIIF manifests — which exports the data Zasqua consumes. Zasqua's own pipeline compiles the exports into the static site on each deploy; any static host can serve the result. This is a deliberate application of minimal computing principles at a scale where they are rarely applied.

Zasqua's first deployment is [zasqua.org](https://zasqua.org), the digital archive of the Colombian digital humanities non-profit [Neogranadina](https://neogranadina.org), developed at AMPL as a successor to the ABC (Archivo, Biblioteca, Catálogo), Neogranadina's earlier platform built on CollectiveAccess. Over 106,000 descriptions, 434,000 images, and nearly 41 million deep-zoom tiles — with faceted search, Miller column hierarchy browsing, and high-resolution IIIF image viewing — all without a single server-side process. The approach also has preservation implications: because the public site is just files — HTML, JSON, static image tiles — it can be archived, mirrored, or rebuilt from exports with no dependencies on running services. The data is not locked into any platform. This matters for the kinds of institutions and groups that Neogranadina and AMPL work with: collections in lower-resource environments with limited access to technical infrastructure, where maintaining servers and databases is not realistic in the long term.

{% include post-components/gallery.html
  columns = 1
  full_width = true
  images = "/images/tools/zasqua-4.jpeg,/images/tools/zasqua-5.jpeg,/images/tools/zasqua-2.jpeg,/images/tools/zasqua-3.jpeg,/images/tools/zasqua-1.jpeg"
%}

The collections span the colonial and republican periods of Colombia and Peru. The Centro de Investigaciones Históricas "José María Arboleda Llorente" in Popayán holds the Antiguo Archivo Central del Cauca (ACC), with administrative records organized into series including Civil, Judicial, Eclesiástico, and Gobierno. The Archivo Histórico de Rionegro in Antioquia is the largest collection, with over 55,000 descriptions across Concejo, Gobierno, Judicial, and Notarial fonds. The Biblioteca Nacional del Peru contributes the Colección Documental de la Independencia del Perú (CDIP), a published documentary series digitized with OCR. The Archivo Histórico Regional de Boyacá in Tunja holds multiple fonds including notarial records and the Archivo Histórico de Tunja. And the Archivo Histórico del Juzgado del Circuito de Istmina in Chocó holds nineteenth- and twentieth-century judicial records, digitized as part of the [Endangered Archives Programme EAP 1477](https://eap.bl.uk/project/EAP1477). These collections were digitized by Neogranadina and its partners over more than a decade of work in archival preservation.

Further Zasqua deployments are planned through UCSB's [**Robinson Archives Initiative**](https://www.library.ucsb.edu/news/ucsb-receives-robinson-archive), a partnership with community archives of social movement histories in the United States and beyond. Each partner operates its own Zasqua site under its own name and branding, sharing the primitive and its pipeline but not its data or identity.

All description metadata is available in English and Spanish, following ISAD(G) archival description standards. The source code is freely available on [GitHub](https://github.com/neogranadina/zasqua-frontend).

[^1]: Definition from the [Muysc cubun](https://muysca.cubun.org/zasqua) digital dictionary, maintained by researchers, students, and members of the Muisca communities of Suba and Chía.
