# C3D File Structure

A C3D file is composed of three major parts, the header, the parameters, and the data.

## Overview of the C3D File Structure

The C3D file structure is made up of contiguous blocks of 512 bytes (0.5 kB). Each section's start and length are defined by a certain number of bytes.

### The Header Section

The header section of a C3D file is the first 512 bytes and acts as a quick reference for the included settings and data.

### The Parameters Section

The parameters section is a series of 512 byte blocks defining the information *about* the data. This includes labels, descriptions, frame rates, patient information, or **whatever** because the C3D file format was intended to be flexible enough for any information to be stored in the Parameters section.

### The Data Section

The data section is a binary file of 3D point data and analog (one dimensional) data. Its format and organization can be deduced from the Header and Parameters sections.


