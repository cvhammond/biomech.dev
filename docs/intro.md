---
title: biomech.dev
description: An introduction to the projects as part of the biomech.dev project
slug: intro
---

The biomechanics and neuromechanics communities are built on top of old, unorganized software that fails to integrate into high-performance, easy-to-use software for clinicians and biomechanists.

## Introducing biomech.dev

biomech.dev is a project to develop scalable, accurate, and fast software to facilitate increased capacity to develop new tools and methods for clinical biomechanics. In order to achieve this goal, a number of key areas need to be re-developed with higher quality software. These areas include:

- Movement data saving, loading, and sharing
- Rigid body dynamics
- Inverse kinematics and marker models
- Muscle models including EMG-driven modeling
- Predictive simulations of novel movements

Although all of these areas exist, they do not coherently interact through a framework that facilitates modification, improvement, and additional libraries. The goal of biomech.dev is to develop these tools to allow for additional areas of exploration to be built seamlessly into the toolset.

## c3dio

The first of these tools, [c3dio](/c3dio), establishes a pure Rust parser for C3D files, the most common file type in biomechanics since the 1980s. C3D files allow for integrated storage of marker data as well as analog (EMG, fMRI, etc) and instrument data. Developing a legacy-compatible, fast-loading, easy-to-use C3D library is the first step in developing the biomech.dev toolset.

## bevy_c3d

Additionally, [bevy_c3d](/bevy_c3d) is a small plugin to facilitate visual analysis of C3D files. Biomechanics is inherently a visual science and an interface between c3dio and a robust visualizer like Bevy is essential to further development of other tools.

## Why Rust?

Rust is a modern systems programming language with many language features intended to resolve some of the issues of previous generations of languages. It allows for low-level development and speed, while excluding large classes of bugs through memory-safe paradigms. For a large project like biomech.dev, a strongly typed language is important to ensure compatibility and to maximize the number of issues that are found at compile time rather than at runtime.
