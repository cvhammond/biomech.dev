# Linear Least Squares

A generalization of other regression methods, linear least squares is a technique for curve fitting that is ubiquitous in numerical methods.

## Linear Least Squares Model

The underlying model for linear least squares is:

$$
\begin{equation}
y = a_0z_0 + a_1z_1 + a_2z_2 + ... + a_mz_m + e
\end{equation}
$$

where $z_i$ represents any expression related to the data ($x$, $x^2$, $\sin(x)$, $e^{\tan(x)}$).

As stated in [polynomial regression](polynomial-regression), equation 1 can be represented as a system of equations. In matrix notation:

$$
\{Y\} = [Z]\{A\} + \{E\}
$$

where:

- $\{Y\}$ is the column vector of $y_i$ coordinates of the data points
- $\{A\}$ is the column vector of $a_i$ coefficients
- $[Z]$ is the square matrix of $z_i$ expressions
- $\{E\}$ is the column vector of $e_i$ errors

This matrix equation can then be solved with [gaussian elimination](/gaussian-elimination), LU decomposition, or many other numerical methods.


