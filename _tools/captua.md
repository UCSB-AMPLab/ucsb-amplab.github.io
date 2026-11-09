---
title: "Captua"
subtitle: "Offline capture software for community archives: from paired cameras to organized volumes, quality review, and retakes."
status: active
kind: SOFTWARE
home_order: 5
date: 2026-10-31 00:00:00
description: "Captua runs a Raspberry Pi digitization station in English and Spanish, organizing paired-camera capture and connecting archival digitization to review in Fisqua."
featured_image: /images/tools/captua-brand.png
brand_image: true
accent_color: '#5A8C62'
---

**Captua** is AMPL's software for digitizing archival materials on a self-contained capture station. It runs on a Raspberry Pi connected to paired cameras, with an English/Spanish interface for organizing projects and volumes, taking photographs, inspecting images, and preparing work for review. Once the unit has been set up, capture works without an internet connection.

Captua is the software component of the [**Digitization Toolkit**](/project/digitization-toolkit), the NEH-funded project developing low-cost scanning hardware, software, and documentation for institutions, collectives, and community archives. The wider project develops the equipment and methods; Captua provides the interface people use at the scanner.

## From a capture session to a reviewed volume

An operator works within a project and volume, using the capture screen to control the cameras and follow the images being produced. Paired photographs preserve the relationship between the two sides of an opening. Camera controls, rotation, thumbnails, and volume organization keep capture work connected to the archival material it describes.

Captua also keeps the archive's digitization lists on the unit. These can specify a new volume, a complete rescan, selected openings to retake, or the completion of an existing volume. Instructions appear at the point of capture, so the operator can follow the archive's priorities without maintaining a separate paper queue.

When the unit is connected to [**Fisqua**](/project/fisqua), it can send a volume for capture quality control and receive the review decisions. Reviewers can approve an opening or request a retake with a reason and note. Captua collects those requests into a retake queue and guides the operator through the affected records. This connects capture and review into a continuing workflow rather than treating digitization as a one-way delivery of photographs.

## Designed for the archive

The system is designed around local operation. Images and working records remain available on the unit during capture; online transfers and coordination with Fisqua happen when a connection is available. Operator documentation covers routine work as well as camera reconnection, safe shutdown, and recovery.

Captua supports paired DSLR cameras through gPhoto2 and Raspberry Pi camera modules through separate camera backends. The current 0.2.0 release follows the first beta intended for day-to-day archival testing; the documented tested configuration uses two Canon EOS Rebel T7 cameras with a monitor, keyboard, and mouse. Support for another camera configuration should be checked against the camera guides rather than assumed from the software's modular design.

Captua captures, [Fisqua](/project/fisqua) catalogs and manages review, [Zasqua](/project/zasqua) publishes, and [Telar](/project/telar) tells. These tools can form a connected workflow, but each can also be used independently.

[Documentation and operator guides](https://captua.org/) · [Source code and releases](https://github.com/UCSB-AMPLab/digitization-toolkit-software)
