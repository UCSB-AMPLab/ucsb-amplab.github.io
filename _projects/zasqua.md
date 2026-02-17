---
title: "Zasqua: a minimal computing archival platform"
subtitle: "An archive with no servers: tens of thousands of historical documents, millions of image tiles, and sophisticated search and filtering — all served as static files."
leadership:
  - Juan Cobo Betancourt, CLAIR, UCSB
date: 2025-11-01 00:00:00
description: "Zasqua is an open-source platform for hosting and discovering large collections of digitized historical documents. It currently holds over 104,000 descriptions from five repositories in Colombia and Peru."
featured_image: zasqua-home.jpg
accent_color: '#A5469A'
gallery_images:
  - zasqua-home.jpg
  - zasqua-search.jpg
  - zasqua-viewer.jpg
  - zasqua-tree.jpg
---

[**Zasqua**](https://zasqua.org) is an open-source platform for hosting and discovering large collections of digitized historical documents. It currently holds over 104,000 archival descriptions across five repositories in Colombia and Peru, with deep-zoom viewing of over 121,000 images across 17,000 digitized documents and full-text search across all collections, including OCR content from printed sources. It was developed at AMPL as a successor to the ABC (Archivo, Biblioteca, Catálogo), [Neogranadina](https://neogranadina.org)'s earlier platform built on CollectiveAccess, with the goal of giving these collections a stable, open-access home that does not depend on any single hosted platform or proprietary software.

The name **zasqua** is a word in the Muisca language meaning "to place oneself," "to settle," "to remain in a given place or condition" — a verb describing the act of situating something where it belongs. The platform carries this name because that is what it does: it places digitized documentary collections in a stable, open-access space. Documents that were scattered, hard to consult, or at risk of being lost find a place of their own here.[^1]

Most archival discovery platforms depend on application servers, search engines, and databases running at request time. Zasqua takes a different approach, drawing on [minimal computing](https://go-dh.github.io/mincomp/) principles: the entire public site is pre-built as static files. Search is handled client-side by [Pagefind](https://pagefind.app/), hierarchical navigation uses pre-built JSON trees, and all images are served as IIIF Level 0 static tiles — deep zoom without an image server. The result is a site that is fast, cacheable, cheap to host, and resilient. Behind the scenes, a Django backend serves as a cataloguing and export tool — cataloguers work in its admin interface, then a management command exports the data as JSON, a GitHub Actions workflow builds the static site, and Netlify deploys it. Django is only needed during cataloguing, not at runtime.

This is a deliberate application of minimal computing principles at a scale where they are rarely applied. Over 100,000 descriptions with faceted search, Miller column hierarchy browsing, and high-resolution IIIF image viewing — all without a single server-side process. The approach also has preservation implications: because the public site is just files — HTML, JSON, static image tiles — it can be archived, mirrored, or rebuilt from exports with no dependencies on running services. The data is not locked into any platform. This matters for the kinds of institutions and groups that Neogranadina and AMPL work with: collections in lower-resource environments with limited access to technical infrastructure, where maintaining servers and databases is not realistic in the long term.

The collections span the colonial and republican periods of Colombia and Peru. The Centro de Investigaciones Históricas "José María Arboleda Llorente" in Popayán holds the Antiguo Archivo Central del Cauca (ACC), with administrative records organized into series including Civil, Judicial, Eclesiástico, and Gobierno. The Archivo Histórico de Rionegro in Antioquia is the largest collection, with over 55,000 descriptions across Concejo, Gobierno, Judicial, and Notarial fonds. The Biblioteca Nacional del Peru contributes the Colección Documental de la Independencia del Perú (CDIP), a published documentary series digitized with OCR. The Archivo Histórico Regional de Boyacá in Tunja holds multiple fonds including notarial records and the Archivo Histórico de Tunja. And the Archivo Histórico del Juzgado del Circuito de Istmina in Chocó holds nineteenth- and twentieth-century judicial records, digitized as part of the Endangered Archives Programme (EAP 1477). These collections were digitized by Neogranadina and its partners over more than a decade of work in the field.

All description metadata is available in English and Spanish, following ISAD(G) archival description standards. The source code is freely available on GitHub: [backend](https://github.com/neogranadina/zasqua-backend), [frontend](https://github.com/neogranadina/zasqua-frontend).

[^1]: Definition from the [Muysc cubun](https://muysca.cubun.org/zasqua) digital dictionary, maintained by researchers, students, and members of the Muisca communities of Suba and Chía.
