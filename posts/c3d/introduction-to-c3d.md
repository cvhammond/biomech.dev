# An Introduction to C3D

The most shared and well known file format for sharing biomechanical data is c3d. It has been in use since the 1980s. It is certainly not without flaws, but is unbiquitous in the industry due to its early origins and well communicated standard.

The official C3D specifications are available via the [C3D User Guide](https://c3d.org/docs/C3D_User_Guide.pdf).

## C3D Top Level Goals

C3D is intended to achieve a few major goals that were important to researchers in 1987:

- Minimize storage requirements for biomechanical data, 3d point data and other instruments
- Defined a single file format across systems
- Maintain backwards compatibility and allow additions without breaking the system

Without C3D, biomechanics researchers are at risk of vendor lock-in:

- Comparison of measurements of different manufacturers was impossible
- If a researcher moves labs, they may no longer be able to access their motion data from their previous lab
- Manufacturers do not regularly maintain backwards compatibility of file formats
- Clinicians and researchers are incentivized to not upgrade their motion capture systems because they may lose access to their previous data or research history
- Third-party applications attempting to use a manufacturers specifications may break when the manufacturer updates their specification without announcement

One area of special note is that C3D files allow for storing *information about the data* not just *the information*.

Researchers have used C3D files to store joint angles, powers, moment calculation results, and more.
