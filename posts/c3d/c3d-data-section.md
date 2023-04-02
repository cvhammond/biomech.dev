# C3D Data Section

The data section of a C3D file is a set of 3D point and analog data that can be processed sequentially based on the format of the data described in the [Parameters section](/c3d-parameters-section.md).

## 3D Point Data Format

The second byte of the [Header section](c3d-header-section.md) indicates the structure of the data. Its default value is the byte 0x50h. The default value indicates the 3D points are stored as XYZ coordinates along with the residual of the point and the cameras that captured the point as a boolean array.

Normally, each 3D point is stored as 16 bit (2 byte) words that are multiplied by a floating point scale factor that transforms them into their true value. This allows the data to be stored in a smaller format than storing the floats (4 bytes) directly.

