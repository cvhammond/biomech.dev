# Secant Method

Building on other open methods of root finding, the secant method allows for a technique that does not require the calculation of the derivative of the function of interest in order to converge with speed an accuracy.

This method is largely built upon the [Newton-Raphson method](/newton-raphson-method) but rather than solving for the function's derivative, it can be calculated each iteration using the secant.

## Iteration of the Secant Method

The secant method calculates the slope of the secant as an approximation of the derivative during each iteration. Other than that, it follows the Newton-Raphson method quite closely. The extra secant computation results in a new formulation of the main calculation.

1. Calculate `x_1` from `x_1 = x_0 + ((f(x_0) * (x_-1 - x_0)) / (f(x_-1) - f(x_0)))`.
2. Calculate the [iterative error](/error) between `f(x_1)` and `f(x)`.
3. If the error is sufficiently small, stop. Otherwise, do another iteration where `x_0 = x_1` and `x_-1 = x_0`.

