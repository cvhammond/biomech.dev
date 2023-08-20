# Polynomial Regression

A polynomial regression is a regression where data is fit against a polynomial of a given order. This technique can be used to determine which order of polynomial best fits the data or, if the underlying model is known, act to fit experimental data along a curve.

## Polynomial Regression Model

Polynomial regression is build upon [linear regression](linear-regression) and extends it to greater orders[^1].

[^1]: A line is a first-order polynomial!

Using a second-order polynomial as an example, the sum of the squares of the residuals can be found from:

$$
\begin{equation}
S_r = \sum_{i=1}^{n} (y_i - a_0 - a_1 x_i - a_2 x_i^2)^2
\end{equation}
$$

## Solving a Polynomial Regression

The partial derivative of equation one can be taken for each parameter $a_i$ and a resulting system of equations can be solved using other numerical methods[^2].

[^2]: Like [gaussian elimination](gaussian-elimination).
