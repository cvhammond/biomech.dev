# Nonlinear Regression

For models where the design parameters are not linear, nonlinear regression techniques must be employed for curve fitting.

## Gauss-Newton Method

The Gauss-Newton method employs the knowledge gained from [polynomial regression](/polynomial-regression) and [linear least squares](/linear-least-squares) to create a matrix equation that represents a nonlinear regression.

The general form of a nonlinear equation can be represented as:

$$
y_i = f(x_i; a_0, a_1,...,a_m) + e_i
$$

If we expand this into a first-order Taylor series, the following equation emerges:

$$
y_i - f(x_i) = \frac{\partial{f(x_i)}}{\partial{a_0}} \Delta a_0 + \frac{\partial{f(x_i)}}{\partial{a_1}} \Delta a_1 + e_i
$$

which can be written in matrix notation:

$$
\{D\} = [Z] \{\Delta A\} + \{E\}
$$

- $\{D\}$ is a column vector of $y_i - f(x_i)$ terms
- $\{\Delta A\}$ is a column vector of $\Delta a_i$ term
- $[Z]$ is a square matrix of $\frac{\partial{f_i}}{\partial{a_j}}$
- $\{E\}$ is a column vector of $e_i$ errors

Solving this matrix produces an improved set of values, which can be used to make a new matrix equation. Iterate through these matrices until convergence to find the best nonlinear regression.

