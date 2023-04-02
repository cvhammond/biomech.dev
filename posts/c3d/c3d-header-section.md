# C3D Header Section

The C3D Header section is the first 512 bytes of a C3D file. The first twelve words[^1] define the most important parameters.

[^1]: For the C3D specification, a word is two bytes, 16 bits.

## Header Section Specification

The first 12 words of the header indicate:

1. Byte 1 = pointer to the first block of the parameter section. Byte 2 = a flag defining the Data section storage format
2. The number of 3D points in each frame
3. The number of analog samples stored in each frame. (This is **total** samples)
4. The first frame of raw data (if your data sample starts at frame 110, this value will be 110)
5. The last frame of raw data
6. The maximum 3D frame interpolation gap (normally 10)
7. The float scale factor
8. The second byte of the float scale factor
9. The block number of the start of the Data section
10. The analog sample rate per 3D frame (if you have 4 emg values per 3D point, this value is 4)
11. The 3D frame rate in Hz (byte 1 of float)
12. The 3D frame rate in Hz (byte 2 of float)
