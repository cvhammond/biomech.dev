# Multistep Methods

Multistep methods are a set of methods for solving ordinary differential equations using information from multiple previous steps of the solution.

## Multistep Heun's Method

Building on [Heun's Method](/heuns-method), error can be reduced by using:

$$
y_{i+1} = y_{i-1} + f(x_i, y_i)2h
$$

which uses $y_{i-1}$ rather than $y_{i}$ in the original method to improve the accuracy of the *predictor*. The tradeoff is an increased stepsize for a likely more accurate slope value.


