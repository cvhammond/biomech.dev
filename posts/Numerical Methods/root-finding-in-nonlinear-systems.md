# Root Finding in Nonlinear Systems

Root finding in nonlinear systems add extra complexity over traditional root finding techniques. In nonlinear systems, there is more than one independent variable that needs to be solved for such that the system solves to zero.

## Representing a System of Nonlinear Equations

A system of nonlinear equations can be represented as:

$$
f_1(x_1, x_2, ..., x_n) = 0
$$

$$
f_2(x_1, x_2, ..., x_n) = 0
$$

$$
f_{...}(x_1, x_2, ..., x_n) = 0
$$

$$
f_n(x_1, x_2, ..., x_n) = 0
$$

Specifically, nonlinear equations are equations *not* of the form:

$$
f(x) = a_1 * x_1 + a_2 * x_2 + ... + a_n * x_n = b
$$

## Methods for Root Finding in Nonlinear Systems

Many root finding methods can be modified to handle a system of nonlinear equations.

If the root of a system of two equations $u(x,y)$ and $v(x,y)$ is to be found, the following methods can be used.

### Modified Fixed Point Iteration

Firstly, set up two equations such that one is $x = ...$ and the other is $y = ...$. Then, for each iteration, solve for a new $x_1$ and $y_1$ from the existing $x_0$ and $y_0$. This method will still converge despite the nonlinearity of the system.

### Modified Newton-Raphson

As shown in the [modified fixed point iteration](#modified-fixed-point-iteration), for zero-order approximations, the system can be solved independently and convergence will still occur.

Since the Newton-Raphson method is a first-order approximation, it requires partial derivatives of the slopes to converge. Specifically, $x_1$ and $y_1$ are determined by the following:

$$
u_1 = u_0 + (x_1 - x_0) * \frac{\partial{u}}{\partial{x}} + (y_1 - y_0) * \frac{\partial{u}}{\partial{y}}
$$

$$
v_1 = v_0 + (y_1 - y_0) * \frac{\partial{v}}{\partial{x}} + (y_1 - y_0) * \frac{\partial{v}}{\partial{y}}
$$

This will converge correctly, but illustrates the increasing complexity of computations as the number of equations in the system increases.

### Modified Secant

This author leaves the derivation of the nonlinear system modification of the [secant method](/secant-method) to the reader.

