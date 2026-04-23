---
title: "Fisqua"
subtitle: "A multi-tenant cataloguing platform for community archives — open-source primitives, hosted by AMPL or self-deployable."
status: active
kind: SOFTWARE
leadership:
date: 2026-04-23 00:00:00
description: "Fisqua is the cataloguing layer of the AMPL stack — a multi-tenant platform for community archives and university partnerships, built on open standards and minimal computing infrastructure."
featured_image: catalogacion-2x3.jpg
accent_color: '#A5469A'
gallery_images:
  - catalogacion-2x3.jpg
---

**Fisqua** is the cataloguing layer of the AMPL stack — a multi-tenant platform for community archives, university partnerships, and any organisation that needs to describe and manage archival materials at scale. It is the editorial counterpart to [Zasqua](/project/zasqua), which makes those materials publicly findable. Where Zasqua is the reading room, Fisqua is the workroom behind it.

Fisqua treats core archival practices — entity management, authority control, archival hierarchy, controlled vocabularies, item-level description — as composable primitives rather than monolithic features. Each is built on open standards: ISAD(G) for descriptions, ISAAR(CPF) for authority records, IIIF for images, METS for preservation metadata, EAD and EAC-CPF for export. The schema is open, the data is portable, and exports run against open formats from day one. Whether a partner's archive ends up on AMPL infrastructure or someone else's, the work invested in Fisqua belongs to them.

The platform runs on the Cloudflare developer stack (Workers + D1 + R2) — chosen for its minimal-computing fit: no servers to maintain, low operational overhead, and a runtime model that makes a per-tenant deployment cheap enough to offer to partners without their own engineering staff. AMPL hosts and operates a single multi-tenant Fisqua instance for organisations working with us. For those who want to run their own, the schema and the underlying scripts that turn Fisqua exports into a publishable Zasqua site are open source — the open primitive can be assembled into a self-hosted catalogue without depending on AMPL's continued operation.

Fisqua is in active use at the Colombian non-profit [Neogranadina](https://neogranadina.org), where it underpins over 106,000 archival descriptions across five repositories in Colombia and Peru. Through 2026–2028, AMPL will deploy partner tenants for the Robinson Archives Initiative — community-led archives with Baobab (Cali, Colombia), NAKASEC (Korean American immigration history), and FIOB (Indigenous Oaxacan migration). Each partner will run their own catalogue inside the same hosted Fisqua, with shared infrastructure and isolated data.

The name **Fisqua** comes from a Muisca verb meaning *to collect small or scattered things*, related to verbs for searching, gathering, and traversing — verbs that describe both the work the tool enables and the historical processes the resulting catalogues help document.

Source code: [Fisqua on GitHub](https://github.com/neogranadina/zasqua-catalogacion).
