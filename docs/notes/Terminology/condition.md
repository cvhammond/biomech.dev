# Condition

Condition in mathematics refers to the sensitivity of a problem to changes in its independent variables. Take the following problem:

$$
f(x) = x + y^{9}
$$

Here, $f(x)$ is ill-conditioned with respect to $y$, but well-conditioned with respect to $x$.

## Condition Number

The condition number of a model tells us how sensitive it is changes numerically. This can be useful when discussing multiple models that produce similar results, but one may be better or worse conditioned. The formula for calculating the condition number of a univariate model is:

$$
C_N = \frac{x_{err} f(x_{err})}{f(x_{err})}
$$

A condition number of 1 indicates that the sensitivity of the result is the same as the independent variables. Condition numbers below 1 indicate a low sensitivity model and condition numbers above 1 indicate a high sensitivity model. Of course, context and relative condition numbers are important to understand a specific models condition number.
