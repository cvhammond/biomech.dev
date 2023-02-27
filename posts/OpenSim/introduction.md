# An Introduction to OpenSim

OpenSim is an open source software package published by Stanford University to facilitate the field of biomechanics and biomedical research. The package is available through their project site or from their [GitHub organization](https://github.com/opensim-org).

## Background

OpenSim was first published in 2011 by [@Seth2011] with the expressed purpose of providing a framework for biomechanical modeling. The original 2011 paper even states "we encourage wide adoption... for community exchange"[^1]. In all, It represents a unification and codification of a variety of disparate algorithms and techniques in biomechanics into a shared physics-based modeling space with common variables, data formats, and validity.

[^1]: Interestingly, OpenSim was originally published under the [CC BY-NC-ND 3.0](https://creativecommons.org/licenses/by-nc-nd/3.0/) (no commercial, no derivative works), but has since moved to [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html) (do whatever you want, we aren't liable).

## Getting Started

The easiest way to use OpenSim is through their [automated installers for Windows and Mac](https://simtk.org/frs/?group_id=91). You unfortunately have to make an account on SimTK to download. 

If you prefer to build from source, you can follow the directions found here for a set of [auto-install script](https://github.com/opensim-org/opensim-core/wiki/Build-Instructions) that works fairly well for Windows, Mac, and Linux. If you want a pre-built latest version (perhaps for Linux users), [see here](#using-the-pre-built-api-only-latest-version).

### Installing the MATLAB Wrapper

There is a MATLAB wrapper that is commonly used by engineers who were forced to learn/use MATLAB because their professor has used it for the last 20-30 years[^2]. Directions for [installing the MATLAB interface can be found here](https://simtk-confluence.stanford.edu:8443/display/OpenSim/Scripting+with+Matlab).

[^2]: I am included in this cohort.

### Installing the Python Wrapper

The Python wrapper is robust and convenient compared to the MATLAB wrapper and comes prebuilt with OpenSim. **I woud recommend all new users to use Python, if possible**. You can find instructions for [setting up scripting in Python here](https://simtk-confluence.stanford.edu:8443/display/OpenSim/Scripting+in+Python).

### Using the Pre-built API-only Latest Version

There is also an opportunity to use the latest version of the API without building from source. Specifically, the continuous integration GitHub Actions tool set up by OpenSim produces a Windows, Mac, and Linux build as test artifacts. [Follow this link](https://github.com/opensim-org/opensim-core/actions) and select the latest 'continuous-integration' test with a ✅ and select the artifact for your OS.