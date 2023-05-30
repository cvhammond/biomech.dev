# Lagrange Interpolating Polynomial

A reformulation of Newton's Interpolating Polynomials, Lagrange Interpolating Polynomials avoids some of the computational intensity while following the same process.

## Equation

The Nth-order polynomial approximation of a value along a fitted curve $f(x)$ can be expressed as:

$$
f_n(x) = \sum_{i=0}{n}L_i(x)f(x_i)
$$

where:

$$
L_i(x) =  \prod_{\substack{j=0 \newline j \neq i}}^{n} \frac{x-x_j}{x_i-x_j}
$$


