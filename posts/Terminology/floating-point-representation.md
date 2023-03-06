# Floating Point Representation

When numbers are too large to simply describe in binary (2^63) or when numbers require decimal information, floating point representation is an approximation commonly used to represent a very close approximation of a wide variety of values from the very small to the very large.

Floating point values are generally represented in the following form:

m * b^e

where:

- m = mantissa
- b = base (base_2, base_10, etc.)
- e = exponent

This form is how numbers are represented in scientific notation (5.48 * 10^3).

In a computer, floating point numbers are stored in 64 bits by partitioning the first portion to represent the mantissa and the second portion to the exponent; the base is 2 in this situation.

## Drawbacks of Floating Point Representation

Floating point representation is great because it represents a wide range of values including decimals, but there are some downsides to be aware of:

1. Floating point numbers are harder to operate on. Arithmetic operations generally take longer on floating point numbers.

2. Round-off error is introduced at each operation. Repeated operations of the same resultant values can cause divergence from the *true value*.

3. Not all values can be represented in floating point numbers. The larger the number, the larger the interval between the existing value and the value one above it and one below it. Changing a value in the range of 2^34 by 0.002 will likely not produce the desired representation.

4. Not all systems handle floating point numbers the same. Sometimes significant figures can be lost through algorithms that do not focus on maintaining the significance.

**Warning** -- It is highly recommend that considerations be made to prevent very large and very small floats from being added or multiplied together. The resulting value will likely not be the one you expect it to be.
