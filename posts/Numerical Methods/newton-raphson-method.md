# Newton-Raphson Method

The Newton-Raphson method is a first-order root finding method that walks along a curve until a root is found. This technique takes advantage of the slope of the curve to determine the position of the root more effectively than the [fixed point iteration method](/fixed-point-iteration).

Using a modification of the fixed point iteration method, the function of interest is firstly rearranged such that it can be represented as:

$$
x_1 = x_0 - \frac{f(x_0)}{f'(x_0)}
$$

## Newton-Raphson Iteration

Each step of the iteration is as follows:

1. Solve for $x_1$ from the given $x_0$. If there is no $x_0$, an intelligent guess should be used[^1].
2. Determine the [iterative error](/error) of the iteration.
3. If the error is sufficiently low, stop. Otherwise, $x_0 = x_1$ and begin the iteration process again.

[^1]: Perhaps determined visually or by another fast but approximate method.

## Implementation

```py example Newton-Raphson method with divide by zero considerations
@numerical_methods_py/newton_raphson_method.py
```
