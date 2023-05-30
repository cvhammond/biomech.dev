# Runge-Kutta Methods

Runge-Kutta methods are methods for finding numeric solutions to first-order ordinary differential equations.

## General Form

ODEs of the form $\frac{dy}{dx} = f(x,\,y)$ can be solved using Runge-Kutta methods. These methods take advantage of open rootfinding methods of stepping along a curve to trace the trajectory of the known curve.

$$
y_{i+1} = y_i + \phi h
$$

where $\phi$ is the estimated slope and $h$ is the step size.

## Slope Estimation

All Runge-Kutta methods use this technique, but they differ on their estimations of the slope at a given point. Simple versions of these techniques include:

- [Euler's Method](/eulers-method)
- [Heun's Method](/heuns-method)
- [Midpoint Method](/midpoint-method)

## Runge-Kutta Method

For Runge-Kutta methods, $\phi$ exists as a function of $x_i$, $y_i$, and $h$ ($\phi(x_i, y_i, h)$).

The general form of the *increment function* is:

$$
\phi = a_1k_1 + a_2k_2 + ... + a_nk_n
$$

where $a_i$ is a constant and $k_i$ is of the following:

$$
k_1 = f(x_i,\,y_i)
\newline
k_2 = f(x_i + p_1h, \,y_i+q_{11}k_1h)
\newline
k_3 = f(x_i + p_2h, \,y_i+q_{21}k_1h + q_{22}k_2h)
\newline
...
\newline
k_n = f(x_i + p_{n-1}h, \,y_i+q_{n-1,1}k_1h + q_{n-1,2}k_2h + ... + q_{n-1,n-1}k_{n-1}h)
$$

where $p_i$ and $q_i$ are constant.

Because $k_1$ exists within $k_2$, this method is computational efficient.

### Second-Order Runge-Kutta Method

The second-order method is formed by:

$$
y_{i+1} = y_i + (a_1k_1 + a_2k_2)h
$$

As a result, three equations of four unknowns can be developed:

$$
a_1 + a_2 = 1
\newline
a_2p_1 = \frac{1}{2}
\newline
a_2q_{11} = \frac{1}{2}
$$

Since three equations are insufficient for solving for four unknowns, it is necessary to choose a value for one of them, usually $a_2$.

#### Heun Method

The Heun method uses a value of $a_2 = \frac{1}{2}$.

#### Midpoint Method

The midpoint method uses a value of $a_2 = 1$.

#### Ralston's Method

Ralston's method uses a value of $a_2 = \frac{2}{3}$.

----------

Each of these methods produces a different result with accuracy depending on the specific curve being approximated.

### Higher-Order Runge-Kutta Method

Higher orders have their own sets of equations, but regardless, one variable's value needs to be assumed and the choice of that assumption determines which method is being used.

## Adaptive Runge-Kutta Method

Adaptive numerical methods tend to focus on facilitating an inconsistent step size. This is advantageous because it allows for a smaller step size at highly variable regions and a larger step size for smoother regions.

Adaptive Runge-Kutta compares the results of a full step with the result of the same interval with two half steps. If the difference between these results is great enough, the iterative process continues by comparing two quarter steps to each half step, and so on until taking additional half steps fails to improve the accuracy of the results.
