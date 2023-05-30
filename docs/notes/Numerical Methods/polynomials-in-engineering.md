# Polynomials in Engineering

Polynomials can be used in curve fitting, but more importantly, they can be used to characterize dynamic systems, specificially linear systems.

## Ordinary Differential Equations

A typical equation in engineering is the following second-order system:

$$
a_2 \frac{d^2y}{dt^2} + a_1 \frac{dy}{dt} + a_0y = F(t)
$$

$t$ is the independent variable and $y$ is the dependent variable. $a_{0,1,2}$ are constant coefficients and $F(t)$ is the forcing function.

### Pair of First Order ODEs

Rewriting the above ODE as a pair of first order ODEs is possible by defining a new variable $z$ such that:

$$
z = \frac{dy}{dt}
$$

Substituting $z$ into the previous equation, the problem is reduced to:

$$
\frac{dz}{dt} = \frac{F(t) - a_1z - a_0y}{a_2}
$$

$$
\frac{dy}{dt} = z
$$

*n*th-order ODEs can always be expressed as a system of *n* first-order ODEs.

### Homogeneous Solution

Sometimes also referred to as the *general solution*, is when the forcing function is zero ($F(t) = 0$). The homogeneous solution shows how a system will behave in the absence of external stimuli.

The general solution to all unforced linear systems is of the form $y = e^{rt}$. Thus, if we differentiate $y = e^{rt}$ and substitute it into our original ODE, the following equation, the *characteristic equation* is found:

$$
a_2r^2 + a_1r + a_0 = 0
$$

### Eigenvalues

The roots of the characteristic equation (solve for r) are the *eigenvalues* of the system.

Eigenvalues can be useful across a variety of engineering domains including describing the damping of a dynamic system.
