# Euler's Method

Euler's Method is a technique for solving first-order linear ordinary differential equations that uses a simple approach to provide an accurate numerical solution to the curve.

## Method

For equations of the general form:

$$
\begin{equation}
\frac{dy}{dx} = f(x,\,y)
\end{equation}
$$

the ODE can be stepped along to describe the curve using this equation:

$$
y_{i+1} = y_i + \phi h
$$

To step, an estimation of the slope $\phi$ at a given point is needed.

Euler's method describes $\phi$ as simply $f(x,\,y)$, which is true according to equation 1. Substituting the value in:

$$
\begin{equation}
y_{i+1} = y_i + f(x_i,\,y_i)h
\end{equation}
$$

## Error

Euler's method is a simply method for generating tabulated data representing the curve of an ODE based on a given initial point. With that being said, there are a few ways error can exist in the approximation.

- Local Truncation Error - error caused by the estimate of equation 2 being inexact.
- Propagated Truncation Error - error caused by systemic error in estimations of equation 2.
- Global Truncation Error - the sum of the local and propagated truncation error.
- Round Off Error - error caused by a limited number of significant digits.

The error in Euler's method can be described by the terms excluded from the Taylor series of equation 2.

For Euler's method, this represents an error in the range of:

$$
\begin{equation}
E_a = \frac{f'(x_i,\,y_i)}{2!}h^2
\end{equation}
$$

## Improvements

The accuracy of Euler's method increases as the number of Taylor series terms are included. If equation 3 is included as a term in equation 2, the error reduces to:

$$
\begin{equation}
E_a = \frac{f''(x_i,\,y_i)}{3!}h^3
\end{equation}
$$

Another way to improve the accuracy is to reduce the step size. This allows the next step to more closely match the current slope of the curve rather than an approximation of the curve across a section of the ODE.



