# Gaussian Quadrature

For integrating equations, Gaussian quadrature is a process of segmenting a curve intelligently to more usefully calculate an accurate integration.

## Gauss-Legendre Formulas

Gauss-Legendre formulas are based on the idea that the integral of a region of a curve can be represented as the area of a trapezoid between two well-selected points relative to the ends of the region.

This gives the two-poit Gauss-Legendre formula for the region $[-1,1]$:

$$
I \cong f(\frac{-1}{\sqrt{3}}) + f(\frac{1}{\sqrt{3}})
$$

which is third-order accurate.

For a *generalized region*, the equations:

$$
x = \frac{(b+a)+(b-a)x_d}{2}
\newline
dx = \frac{b-a}{2}dx_d
$$

can be substituted in for $x$ and $dx$, respectively to transform the integral of form $\int_{a}^{b}$ to $\int_{-1}^{1}$.

## Higher Order Gaussian Quadrature

Three point or higher methods can be developed of the form:

$$
I \cong c_0f(x_0) + c_1f(x_1) + ... + c_{n-1}f(x_{n-1})
$$

with accuracy for higher-order functions increasing proportional to *n*.

