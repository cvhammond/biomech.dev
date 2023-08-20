# Simpson's 1/3 Rule

Simpson's 1/3 rule is the second-order form of the Newton-Cotes integration formulas. It uses a quadratic curve between two points to approximate the definite integral of the section.

## Method

Similar to the [trapezoidal rule](trapezoidal-rule), the Simpson's 1/3 rule comes down to a series of steps:

- split the region from $a$ to $b$ into smaller segments
- calculate the error of a given segment using the equation:

$$
I \cong (b-a)\frac{f(x_0)+4f(x_1)+f(x_2)}{6}
$$

- iterate through each segment and sum the values.

## Error

The error for Simpson's 1/3 rule is:

$$
E_t = -\frac{(b-a)^5}{2880} f^{(4)}(\xi)
$$

Interestingly, unlike the trapezoidal rule that only perfectly calculates curves of the same order[^1], Simpson's 1/3 rule actually perfectly calculates the definite integral of third-order polynomials[^2].

[^1]: The trapezoidal rule uses a first-order approximation and is only errorless for first-order curves.

[^2]: Simpson's 1/3 rule is third-order accurate.
