---
title: "Telar Compositor"
subtitle: "A web-based authoring environment for Telar stories — visual composition in the browser, static output in your own repository."
status: active
kind: SOFTWARE
home_order: 2
leadership:
date: 2026-04-24 00:00:00
description: "Telar Compositor is AMPL's web-based authoring environment for Telar, the open-source visual narrative framework. It replaces the Google Sheets authoring workflow with a purpose-built editor while preserving Telar's minimal-computing publication architecture."
featured_image: /images/tools/compositor-cover.jpg
accent_color: '#A5469A'
gallery_images:
  - /images/tools/compositor-1.jpeg
  - /images/tools/compositor-2.jpeg
  - /images/tools/compositor-3.jpeg
  - /images/tools/compositor-4.jpeg
---

**Telar Compositor** is AMPL's web-based authoring environment for [Telar](/project/telar). Telar is the open-source framework that publishes interactive visual narratives around digitised objects as static, minimal-computing sites; Compositor is the workspace where authors can compose those narratives in a simple WYSIWYG interface: assembling stories, managing objects, and writing rich panel content in a visual editor, without losing any of the properties that make Telar's outputs durable.

Telar stories had until now been authored directly in CSVs or in Google Sheets, with content edited cell by cell and pulled into the framework through a build pipeline. That workflow has carried Telar through classrooms, community projects, and public history initiatives — but it asks users to hold the shape of a narrative in a grid, and it separated the text from the images it anchors. Compositor replaces it with a purpose-built editor: a visual canvas that shows a story as a reader will see it, an Obsidian-style Markdown editor for panel content with live preview, an [OpenSeadragon](https://openseadragon.github.io) viewer for framing images and capturing the views that each step of a story points to, and an objects manager for curating the collection a story draws on.

Compositor is built for group work as well as solo authoring: multiple users can edit a story at the same time, their changes appearing live, as with Google Docs. A student group can build a narrative together, a community archive team split the work on an exhibit across many collaborators, and co-authors can iterate without stepping on each other's work.

{% include post-components/gallery.html
  columns = 1
  full_width = true
  images = "/images/tools/compositor-1.jpeg,/images/tools/compositor-2.jpeg,/images/tools/compositor-3.jpeg,/images/tools/compositor-4.jpeg"
%}


Compositor does not host the published Telar site. Each author's work is committed directly to their own GitHub repository through a GitHub App, and Telar's build pipeline generates the public site from that repository as it has always done. The minimal-computing promise is preserved end to end: Compositor is one way to edit, but the story still belongs to the author — in their Git history, in the Markdown and structured data that Telar reads, free to travel to another editor or to sit there for as long as GitHub Pages remains free.

AMPL operates Compositor at [compositor.telar.org](https://compositor.telar.org) that authors use without maintaining servers of their own. It runs on Cloudflare Workers and D1 with GitHub App authentication — a minimal-computing stack that keeps hosting costs low enough to offer the service without charge to partners, students, and community collaborators. The data the tool reads and writes lives in the user's own repository, not in Compositor's database: a user can stop using the hosted instance at any time without losing anything they have put in.

Compositor is in active development. It supports bilingual authoring in English and Spanish, panel-level Markdown editing with live preview, object management with IIIF-hosted images, and direct publishing to a user's GitHub repository. It is being tested with Telar projects in graduate and undergraduate courses at UCSB and UT Austin, and is planned for use with partner deployments through UCSB's [Robinson Archives Initiative](https://www.library.ucsb.edu/news/ucsb-receives-robinson-archive).

The name **Compositor** plays on both its English and Spanish senses: in English, the typesetter who assembles the page before it goes to press; in Spanish, the composer of a work, of a thought, of a story.

