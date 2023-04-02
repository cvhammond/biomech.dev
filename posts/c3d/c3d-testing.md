# C3D Testing

The document that describes the C3D specifications is organized as a book rather than a technical document. As a result, there are, at times, specification requirements or expectations that are included, but not formally defined. This list attempts to consolidate the expectations of the file format, but does not include all of the basic information about the C3D format. That information can be found in the [official C3D document](https://c3d.org/docs/C3D_User_Guide.pdf).

- The sign of the scale factor is used to indicate if the data is stored as a float (negative scale factor) or an integer (positive scale factor) and is copied to the Header.

- Data should be able to be copied from integer format and converted to floating-point and back without any loss of data.

- The frame count can be stored as either an integer or floating-point value

- C3D files can store up to $2^{31}-1$ 3D data points

- C3D files can store the 3D point locations from 255 individual points in a single frame of data

- C3D files can store multiple analog samples from 255 analog channels.

- The limit could be potentially extended to potentially store up to 65535 individual 3d point and analog channels per frame

- Samples are stored frame by frame with multiple analog frames per 3D point frame, but analog frame sample rates must be an integer multiple of the recorded 3D frame rate

- analog data is digitized by an ADC and stored as a signed 16-bit integer

- each analog channel supports an individual scaling factor and channel assignment details

- the header supports the storage of 18 unique events that record the time and each event occurs from the start of the first frame of data



