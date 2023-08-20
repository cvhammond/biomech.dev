# Simpson's 3/8 Rule

Building on Simpson's 1/3 rule, the 3/8 rule approximates integration as segments of third-order polynomials.

## Method

Similar to [Simpson's 1/3 Rule](simpsons-one-third-rule), a formula is used to approximate the definite integral of a curve between $a$ and $b$. In this case, the formula is derived from a third-order polynomial rather than a second-order polynomial.

$$
I \cong (b-a)\frac{f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)}{8}
$$

Sum the result $I$ across all segments.

## Error

The error of Simpson's 3/8 rule is smaller but of the same order as Simpson's 1/3 rule.

$$
E_t = -\frac{(b-a)^5}{6480}f^{(4)}(\xi)
$$

Even so, it requires an additional data point and additional computations relative to Simpson's 1/3 rule. Generally it is better to use the 1/3 rule, except in cases where the region is split into an odd number of segments. In those instances, Simpson's 3/8 rule can provide a third-order accurate solution whereas Simpson's 1/3 rule cannot.
