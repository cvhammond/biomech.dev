# Ordinary Differential Equations

Ordinary differential equations (ODEs) are a subset of differential equations where only one independent variable and its derivatives exist.

## Equation Order

The order of a differential equation is characterized by the order of the highest derivative in the equation.

$$
\begin{equation}
m\frac{d^2x}{dt^2} + c\frac{dx}{dt} + kx = 0
\end{equation}
$$

is a second order differential equation because of the $\frac{d^2x}{dt^2}$ term.

## Higher Order Equation to System of Lower Order Equations

An important capacity of differential equations is the ability to turn a higher order differential equation into a system of lower order differential equations. Using equation 1 as an example, the reformulation can take the following steps:

1. Define a new variable $y = \frac{dx}{dt}$
2. This new variable can be differentiated to $\frac{dy}{dt} = \frac{d^2x}{dt^2}$
3. Substitute $y$ and $\frac{dy}{dt}$ into equation 1
4. Rearrange such that $\frac{dy}{dt} = -\frac{cy + kx}{m}$
5. The resulting equations:

$$
y = \frac{dx}{dt}
\newline
\frac{dy}{dt} = -\frac{cy + kx}{m}
$$

are equivalent to equation 1.

## Linear ODEs

A linear ODE is one that has the ability to be written as a linear combination of the derivatives of y. This means it has the general form of:

$$
a_n(x)y^{(n)} + ... + a_1(x)y' + a_0(x)y = f(x)
$$

This form has no products or nonlinear functions of the dependent variable y or its derivatives.

Linear ODEs are of interest because they can be solved with mathematics, rather than with numerical methods. Traditionally, approximations have been made by engineers to reformulate nonlinear ODEs into linear ones so a solution, with some error, can be found.


