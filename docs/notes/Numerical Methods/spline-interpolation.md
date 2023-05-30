# Spline Interpolation

Rather than fitting an Nth-order polynomial to given data, another method is taking a subset of the data and using a lower-order polynomial to accurately fit a subset of the data, then using a new lower-order polynomial for the next section.

## Linear Splines

Linear splines are the simplest, first-order version of splines. Simply, a straight line is drawn between each waypoint to create a piecewise function that approximates a curve. The equation for linear splines is:

$$
f(x) = f(x_0) + m_0(x - x_0) \quad x_0 \leq x \leq x_1
f(x) = f(x_1) + m_1(x - x_1) \quad x_1 \leq x \leq x_2
...
f(x) = f(x_{n-1}) + m_{n-1}(x - x_{n-1}) \quad x_{n-1} \leq x \leq x_n
$$

where:

$$
m_i = \frac{f(x_{i + 1}) - f(x_i)}{x_{i+1} - x_i}
$$

## Quadratic Splines

Since linear splines build a piecewise function, the derivative of the curve is not continuous. This becomes an issue if fitted position data is needed for velocity calculations. As a result, quadratic splines are needed to find a continuous derivative.

### Conditions for Quadratic Splines

Similar to linear splines, quadratic splines can be built from a series of functions of the form $f_i(x) = a_ix^2 + b_ix + c_i$ for each contiguous subset of the data. Quadratic splines follow a few rules:

- Function values of adjacent polynomials must be equal at the known data point separating them. Otherwise, the function would be discontinuous.
- The first and last polynomials must pass through the endpoints.
- The first derivative of the known data points must be equal for both adjacent polynomials. This creates a continuous and *smooth* requirement.
- The polynomials must have a second derivative value of zero at the endpoints.

These series of restrictions allow for the formulation to create a unique solution for the quadratic spline.

## Cubic Splines

Following the pattern, cubic splines are third-order polynomial approximations of data points found with the equation:

$$
f_i(x) = a_ix^3 + b_ix^2 + c_ix + d_i
$$

### Conditions for Cubic Splines

Additional conditions over the [conditions for quadratic splines](#conditions-for-quadratic-splines) exist to create a unique spline solution.

- All conditions for quadratic splines must be true
- The second derivative of the known data points must be equal for both adjacent polynomials. This creates a continuous, smooth, and twice continuously differentiable.


