# Heun's Method

Heun's method is an improvement on Euler's method for estimating the slope of a first-order linear ordinary differential equation.

## Method

Heun's equation uses the equation:

$$
\begin{equation}
y_{i+1} = y_i + f(x_i,\,y_i)h
\end{equation}
$$

to calculate $y'_{i+1}$ which can be used in conjunction with $y'_i$ to estimate the average slope of the interval.

This average slope, $\bar{y} = \frac{y'_{i+1}+y'_i}{2}$ is then used in equation 1 again to determine a more accurate estimate of $y_{i+1}$

This method can be used iteratively by calculating $\bar{y}$ for each time $y'_{i+1}$ until the iterative relative error is sufficiently low.
