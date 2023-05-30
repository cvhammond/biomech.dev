# Error

Error refers to the difference between an exact mathematical solution and the analytical approximation derived from modeling. Error in numerical methods is generally described in one of two forms: round-off errors and truncation errors.

## Calculating Error

Simply put, error can be described as the follow:

$$
Error = true value - approximation
$$

Although this simple solution can provide insights, it fails to provide some necessary context, thus:

$$
Relative Error = true error / true value
$$

Relative error can be used to calculate how influential the error is relative to the system it is in.

Other ways of representing error are as follows:

- Percent Relative Error: $\frac{true error}{true value} * 100\%$
- Approximate Percent Relative Error: $\frac{\text{approximate error}}{\text{approximation}} * 100\%$
- Iterative Approximate Percent Relative Error: $\frac{\text{current approximation} - \text{previous approximation}}{\text{current approximation}} * 100\%$
- Specified Percent Error: $|\text{error}|$

Each provide informative meaning to error in the context of different problems.

## Round-off Error

Computers are not able to represent complex numbers exactly. Because numbers are represented as bits and bytes in computers, non-integers must be approximated, althought generally to a high degree.

This error can be reduced by increasing the number of digits stored in memory for given data.

## Truncation Error

Instances where approximations are used instead of exact mathematical values cause truncation errors. Such errors can become significant if many, many, many computations are done during a numerical method or computation.

See [error propagation](/error-propagation) for more information.

## Total Numerical Error

Total numerical error is the sum of round-off and truncation errors. Interestingly, because round-off errors are related to the number of significant figures, increasing the number of digits stored reduces the error. **But,** when more significant figures are kept, then generally more computations need to be made, thus increasing the truncation error.

There exists a balance point between decreasing round-off error and increasing truncation error that is specific to the model and computational method being used.
