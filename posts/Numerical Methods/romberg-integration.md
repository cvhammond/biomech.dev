# Romberg Integration

Romberg integration is a technique for numerical solutions for definite numerical integrals of functions. It is based on efficient and successive use of the trapezoidal rule.

## Background: Richardson's Extrapolation

The true integration $I$ of a curve can be defined by:

$$
I = I(h) + E(h)
$$

where $I(h)$ is the appoximation of $I$ using *n* segments. If $I$ is estimated with two different step sizes, the following is true:

$$
I(h_1) + E(h_1) = I(h_2) + E(h_2)
$$

For the [trapezoidal rule](/trapezoidal-rule), the error is about:

$$
E \cong -\frac{b-a}{12}h^2f''(\xi)
$$

With some clever swapping and shuffling, $I$ can be better approximated than $I(h_1)$ or $I(h_2)$:

$$
I \cong I(h_2) + \frac{1}{(h_1/h_2)^2-1}[I(h_2) - I(h_1)]
$$

## Romberg Integration Method

The Romberg integration method is an iterative approach of using lower-order approximations of the integration of a curve to approximate higher-order approximations, which can then be used in conjunction to approximate even higher-order approximations! The base equation is:

$$
I_{j,k} \cong \frac{4^{k-1}I_{j+1,k-1} - I_{j,k-1}}{4^{k-1}-1}
$$

where $j$ is the number of segments and $2k$ is the order of the approximation.

As a result, four second-order approximations ($k=1$) can be used to find a sixth-order approximation of the curve ($k=3$).

## Error

The main advantage of the Romberg integration method is a massive reduction in computations for the same error as traditional trapezoidal rule or [Simpson's 1/3 rule](/simpsons-one-third-rule) approximations.


