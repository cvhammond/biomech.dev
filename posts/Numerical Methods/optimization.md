# Optimization

Optimization is a process of searching for a maximum or minimum value along a curve. Multivariable optimizations are especially useful in determining the optimal value of some system.

## Components of an Optimization

All optmizations have a few common components. All problems include:

1. an *objective function*.
2. a number of design variables
3. constraints that limit the working space

With these characteristics, optimizations attempt to find a value that minimizes the objective function by changing design variables while still staying within the constraints of the problem.

This can be formulated as:

$$
x = x \quad \text{where } f(x)_{min}
$$

$$
d_i(x) \leq a_i \quad i = 1,2,...,m
$$

$$
e_i(x) \leq b_i \quad i = 1,2,...,p
$$

Where $x$ is a vector of design variables, $d_i(x)$ are inequality constraints, and $e_i(x)$ are equality constraints.

## Classification of Optimizations

There are many wayts to classify optimizations, some of them include:

- Linear Programming - an optimization with linear constraints
- Quadratic Programming - a quadratic optimization with linear constraints
- Nonlinear Programming - a nonlinear, nonquadratic optimization or an optimzation with constraints that are nonlinear

- Constrained Optimization - problems with constraints
- Unconstrained Optimization - problems without constraints
- Overconstrained Optimizations - excessive constraints

- One-dimensional Problem - a problem with one design variable
- Multidimensional Problem - a problem with multiple design variables

### Multidimensional Unconstrained Optimizations

A special class of optimizations are multidimensional unconstrained optimizations. These are common engineering problems and are normally grouped into two types:

- nongradient (direct) methods
- gradient (descent) methods
