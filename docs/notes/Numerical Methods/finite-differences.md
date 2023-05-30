# Finite Differences

A simple way to find the derivative of a function at a point is through finite differences methods. The most common which is forward finite differences.

## Forward Finite Differences

Although not the most accurate approximation, $f'(x)$ can be found with the forward finite differences equation:

$$
f'(x) = \frac{f(x + h) - f(x)}{h}
$$

This is referred to as the forward finite difference because it uses a second value *forward* of $x$, namely $x+h$.
