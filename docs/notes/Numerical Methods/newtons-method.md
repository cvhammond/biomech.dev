# Newton's Method

Newton's method is an open method for solving unidimensional optimization problems.

## Method

Newton's method is a corollary to the [Newton-Raphson method](/newton-raphson-method). Specifically, for the Newton-Raphson method, the equation:

$$
x_1 = x_0 - \frac{f(x_0)}{f'(x_0)}
$$

is used to walk along the curve in the direction of the negative slop until a root is found.

Newton's method is slightly different. Instead of leveraging the fact that opposite sides of a root are positive and negative, the opposite sides of a maximum or minimum have opposite slopes. Thus, if we modify the above equation:

$$
x_1 = x_0 - \frac{f'(x_0)}{f''(x_0)}
$$

to walk in the direction of the slope being zero, we can find the minimum/maximum.
