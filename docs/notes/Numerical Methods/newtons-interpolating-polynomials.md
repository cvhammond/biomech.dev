# Newton's Interpolating Polynomials

The generalization of linear interpolation and quadratic interpolation is Newton's Interpolating Polynomials which allows for evaluating the value of a curve from an Nth-order polynomial from n + 1 data points.

## Iterative Method

The Nth-order polynomial is represented as:

$$
f_n(x) = b_0 + b_1(x-x_0) + ... + b_n(x-x_0)(x-x_1)...(x-x_{n-1})
$$

and the coefficients $b_{0,1,...,n}$ can be found sequentially from the lower order approximations of curve.

$$
b_0 = f(x_0)
\newline
b_1 = f[x_1, x_0]
\newline
b_2 = f[x_2, x_1, x_0]
\newline
b_n = f[x_n,...,x_2,x_1,x_0]
$$

where:

$$
f[x_i, x_j] = \frac{f(x_i) - f(x_j)}{x_i - x_j}
\newline
f[x_i, x_j, x_k] = \frac{f[x_i, x_j] - f[x_j, x_k]}{x_i - x_k}
\newline
f[x_n,x_{n-1},...,x_1,x_0] = \frac{f[x_n,x_{n-1},...,x_1] - f[x_{n-1},...,x_0]}{x_n - x_0}
$$

and lastly, the resulting function value $f_n(x)$ can be written as:

$$
f_n(x) = f(x_0) + (x-x_0)f[x_1, x_0] + (x-x_0)(x-x_1)f[x_2,x_1,x_0] + ... + (x-x_0)(x-x_1)...(x-x_{n-1})f[x_n,x_{n-1},...,x_0]
$$
