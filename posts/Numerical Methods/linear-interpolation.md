# Linear Interpolation

Linear interpolation is a method for approximating the value of a function between two known values. The accuracy of the estimation is higher when the two points are closer together and with less volatile functions.

## Linear Interpolation Method

Finding an intermediate value with linear interpolation leverages the fact that it must exist on the line between the two endpoints. As a result, it must have the same slope as the line between the two endpoints. Then, the following equation can be formed:

$$
\frac{f_1(x) - f(x_0)}{x - x_0} = \frac{f(x_1) - f(x_0)}{x_1 - x_0}
$$

rearranging this equation produces:

$$
f_1(x) = f(x_0) + \frac{f(x_1) - f(x_0)}{x_1 - x_0} (x - x_0)
$$

where $f_1(x)$ indicates the first-order interpolation.


