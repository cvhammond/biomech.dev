# Error

Error refers to the difference between an exact mathematical solution and the analytical approximation derived from modeling. Error in numerical methods is generally described in one of two forms: round-off errors and truncation errors.

## Calculating Error

Simply put, error can be described as the follow:

`Error = true value - approximation`

Although this simple solution can provide insights, it fails to provide some necessary context, thus:

`Relative Error = true error / true value`

Relative error can be used to calculate how influential the error is relative to the system it is in.

Other ways of representing error are as follows:

- Percent Relative Error: `(true error / true value) * 100%`
- Approximate Percent Relative Error: `(approximate error / approximation) * 100%`
- Iterative Approximate Percent Relative Error: `((current approximation - previous approximation) / current approximation) * 100%`
- Specified Percent Error: `abs(error)`

Each provide informative meaning to error in the context of different problems.

## Round-off Error

Computers are not able to represent complex numbers exactly. Because numbers are represented as bits and bytes in computers, non-integers must be approximated, althought generally to a high degree.

Even so, some round-off error exists such that everytime a computation is done using `sqrt(3)`, a small round-off error occurs. Such errors can become significant if many, many, many computations are done during a numerical method or computation.

## Truncation Error

Instances where approximations are used instead of exact mathematical values cause truncation errors.

