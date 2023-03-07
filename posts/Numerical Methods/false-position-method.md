# False Position Method

Taking advantage of the mathematics of similar triangles, the false position method is a root finding technique that iteratively reduces the search space by finding a *false* position of the root as if the function were linear in the search space. It is similar to, but generally more efficient than the [bisection method](/bisection-method).

The false position method is sometimes referred to as the **linear interpolation method**.

## Finding the False Root

The false root is a linear interpolation of the two endpoints, one of which evalutes in $f(x)$ to a positive number ($x_p$) and one evaluates to a negative number ($x_n$).

The linear interpolation of a value for which a value is know to both the left and right is:

$$
\frac{f(x) - f(x_n)}{x - x_n} = \frac{f(x_p) - f(x_n)}{x_p - x_n}
$$

In this case, $f(x) = 0$, and $x$ is $x_r$, the value we are looking for. Rearranging, we get:

$$
x_r = x_p - \frac{f(x_p) * (x_n - x_p)}{f(x_n) - f(x_p)}
$$

Once $x_r$ is found, we are able to continue with the [bisection method](/bisection-method).
