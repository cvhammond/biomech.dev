# Newton-Cotes Integration Formulas

The strategy of the Newton-Cotes formulas is the replace a complicated function with a simpler one that acts as a decent approximation of the curve. This simpler function can then be more easily numerically integrated.

## Formal Definition

Newton-Cotes formulas are of the type:

$$
I = \int_{a}^{b} f(x)\,dx \cong \int_{a}^{b} f_n(x)\,dx
$$

where $f_n(x)$ is an Nth-order polynomial.

## Closed and Open Form

Newton-Cotes formulas comes in two types:

- Closed form - Data points exist at the beginning and end of the limits of integration
- Open form - Integration limits extend beyond the data points

For integration, closed forms are more commonly used. Open form integrations are used in solving ordinary differential equations numerically.

## Implementations

The following are concrete implementations of Newton-Cotes integrations. The number corresponds to the polynomial order[^1].

[^1]: I.E. the trapezoid rule uses a first-order polynomial approximation of the integral.

1. [Trapezoidal Rule](/trapezoidal-rule)
2. [Simpson's 1/3 Rule](/simpons-one-third-rule)
3. [Simpson's 3/8 Rule](/simpons-three-eigths-rule)

