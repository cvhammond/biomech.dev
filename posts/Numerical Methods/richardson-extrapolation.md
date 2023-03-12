# Richardson Extrapolation

Similar to Romberg integration, Richardson extrapolation uses two approximations of the numerical derivative to find a third, more accurate approximation of the derivative of a function.

## Method

Using our knowledge from [Romberg integration](/romberg-integration), we know that if step sizes $h_1$ is twice the size of $h_2$, then the following formula is true:

$$
D = \frac{4}{3}D(h_2)-\frac{1}{3}D(h_1)
$$

where $D(h_i)$ is the centered differences estimate of the first derivative.

This result $D$ is fourth-order accurate.
