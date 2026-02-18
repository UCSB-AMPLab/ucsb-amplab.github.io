---
title: Telar
subtitle: "An open-source visual narrative framework for scholars, students, and communities working with digitised objects."
leadership:
  - Juan Cobo Betancourt, History, UCSB
  - Santiago Muñoz Arbeláez, History, UT Austin
  - Adelaida Ávila, Neogranadina
  - Natalie Cobo, Neogranadina
date: 2025-12-02 00:00:00
description: "An open-source framework for building interactive visual narratives around digitised objects, built on minimal computing principles and free to use."
featured_image: telar-home.jpg
accent_color: '#A5469A'
gallery_images:
  - telar-home.jpg
  - telar-story.jpg
  - telar-panel.jpg
  - telar-gallery.jpg
---

[**Telar**](https://telar.org) — Spanish for *loom* — is an open-source framework for building interactive visual narratives around digitised objects, designed for scholars, students, and communities working with materials held in archives, libraries, museums, or their own collections. It is built on minimal computing principles — plain-text authoring, static site generation, free hosting on GitHub Pages — which means that a Telar project can remain online and functional for years with essentially no maintenance and no ongoing cost.

Telar grew out of [*Colonial Landscapes* (*Paisajes Coloniales*)](https://paisajescoloniales.com), an interactive bilingual platform developed by Santiago Muñoz in 2020 that explores the history of the region around Bogotá in the highlands of what is now Colombia through a 1614 map. Intended for Colombian students in middle school, high school, and at undergraduate level, *Colonial Landscapes* guides readers through the map in four short chapters, drawing attention to relevant sections and using specific details as anchors for historical analysis of the changes undergone by the Indigenous Muisca peoples — and the landscape itself — as a result of European colonisation. The tone is accessible and readers are invited to explore independently, while scholars can access digitised sources and relevant information for teaching and research. Designed and built by Adelaida Ávila, the platform demonstrated that it was possible to create a rich, pedagogically sophisticated visual narrative as a simple static website hosted for free on GitHub Pages. Telar generalises that approach into a reusable open-source framework.

{% include post-components/gallery.html
  columns = 2
  full_width = true
  images = "/images/projects/colonial_landscapes-en-1.jpg,/images/projects/colonial_landscapes-en-2.jpg,/images/projects/colonial_landscapes-en-3.jpg,/images/projects/colonial_landscapes-en-4.jpg"
%}

The core of a Telar project is a story: a sequence of steps, each pairing a specific view of an image with a brief analytical observation. Readers scroll through these steps; the image pans and zooms to follow each one. Additional layers of information — contextual panels, a glossary with auto-linking across all narratives, primary source transcriptions — are available for those who want to go deeper, without cluttering the narrative for those who do not. The authoring workflow is designed to be accessible: content lives in a Google Sheets spreadsheet; images can be pulled from any IIIF-compatible collection, which means objects held in major research libraries can be incorporated alongside a user's own materials.

Alongside stories, Telar generates an object gallery — a searchable, filterable index of all images in a collection. Readers can browse by tag or collection, search across all object descriptions, and view any image at full resolution, independent of any narrative path. Stories and gallery draw from the same pool of objects, giving the same materials two complementary modes of engagement.

{% include post-components/gallery.html
  columns = 1
  full_width = true
  images = "/images/projects/telar-home.png,/images/projects/telar-story.png,/images/projects/telar-panel.png,/images/projects/telar-gallery.png"
%}

Telar is in active development, currently at v0.8 beta — eighteen releases since October 2025. It has been used in graduate and undergraduate courses at UCSB and UT Austin, and in community-centred public history initiatives in Colombia — initially conceived to allow educators to create pedagogical content like *Colonial Landscapes*, but increasingly a tool for working with students and community members as they develop narratives of their own. It supports bilingual interfaces in English and Spanish, client-side encrypted stories for sensitive or embargoed content, and embedding in Canvas LMS. Documentation is available in [English](https://telar.org/docs) and [Spanish](https://telar.org/guia); the source code is on [GitHub](https://github.com/UCSB-AMPLab/telar).

Telar is supported by the Caribbean Digital Scholarship Collective, UCSB's Center for Innovative Teaching, Research, and Learning (CITRAL), the UCSB Library, Routes of Enslavement in the Americas (UC MRPI), and the UT Austin Department of History.