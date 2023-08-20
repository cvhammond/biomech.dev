# Numerical Differentiation

When a function's mathematical definition is not available, it may be necessary to use numerical methods to determine the derivative.

## Understanding Differentiation

Ultimately, differentiation comes down to the original building blocks of calculus. The slope of the line between two points approximately describes the trajectory of the curve between those two points. As the slope is calculated for points that are closer and closer together, this secant becomes a tangential line and the classical derivative equation is found:

$$
\frac{dy}{dx} = \lim_{\Delta x \to 0} \frac{f(x_i + \Delta x) - f(x_i)}{\Delta x}
$$

where $\frac{dy}{dx}$ is the first derivative of the function[^1].

[^1]: $\frac{dy}{dx}$ is equivalent to $f'(x)$ in most cases.

## Methods

The following are a few methods for numerical differentiation:

- [finite differences](finite-differences)
- [Richardson Extrapolation](richardson-extrapolation)

## Unequally Spaced Data

If the tabulated data[^1] provided is not equally spaced, one suggestion is use cubic splines to regularize the data. Another option is to fit the data around the point of interest with a quadratic curve to describe the data as a function locally.

[^1]: tabulated data is something like experimental data for which the underlying formula is not known

## Noisy Data

Numerical differentiation tends to magnify the noise in the original data, thus for data with high noise, differentation should be done with caution.
