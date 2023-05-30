# Quadratic Interpolation

An optimization technique that leverages quadratic approximations of the region around a maximum, quadratic interpolation is a common technique for one dimensional optimization problems.

## Method

Quadratic interpolation leverages the fact that there is only *one* quadratic curve that connects three points.

This curve can be found for the two endpoints ($x_l$ and $x_u$) as well as some selected middle point. From there, a curve is plotted and the maximum of the curve is used as an approximation of the true maximum. The window size is reduced based on the location of the approximate maximum and the iteration is run again.


## Equation

To find $f_2(x)$, the following equation can be used:

$$
f_2(x) = b_0 + b_1(x-x_0) + b_2(x - x_0)(x-x_1)
$$

which is a special form of $f_2(x) = a_0 + a_1x + a_2x^2$.

The coefficients $b_{1,2,3}$ can be found from:

$$
b_0 = f(x_0)
$$

$$
b_1 = \frac{f(x_1) - f(x_0)}{x_1 - x_0}
$$

$$
b_2 = \frac{\frac{f(x_2) - f(x_1)}{x_2 - x_1} - \frac{f(x_1) - f(x_0)}{x_1 - x_0}}{x_2 - x_0}
$$


