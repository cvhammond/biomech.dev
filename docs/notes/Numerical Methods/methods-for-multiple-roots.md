# Methods for Multiple Roots

Sometimes when root finding, there are times where multiple roots occur at the same point. This poses unique issues that need to be addressed when attempting to find the roots of these functions or when trying to build a robust root finding algorithm.

The following issues occur for multiple-root root finding:

1. Many methods rely on the fact that a root exists between two points whose function evaluations are on opposite sides of the x-axis[^1].
2. Both $f(x)$ and $f'(x)$ converge to zero at multiple-root spots. As a result, methods like the [Newton-Raphson method](newton-raphson-method) and the [secant method](secant-method) struggle to converge properly.
3. Methods of root finding as significantly more inefficient for multiple root finding scenarios.

[^1]: One side is negative, one side is positive.

## Iteration of Multiple Roots

Multiple root problems can be solved with some modifications to well known root finding methods.

### Modified Newton-Raphson Method

Rather than taking $\frac{f(x)}{f'(x)}$ as in the Newton-Raphson method, another option is to use $u(x) = \frac{f(x)}{f'(x)}$. Thus, the Newton-Raphson method can be used with the following formulation: $x_1 = x_0 - \frac{u(x_0)}{u'(x_0)}$. This avoids the issue of $f(x)$ and $f'(x)$ both converging to zero by incorporating $f''(x)$ through $u(x)$.

### Modified Secant Method

Since the secant method is simply a modification to the Newton-Raphson method where the derivative need not be solved, a similar modification can be used to resolve the issuse of $f(x)$ and $f'(x)$ both not converging.
