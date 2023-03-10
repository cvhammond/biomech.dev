# Bisection Method

The bisection method is a root finding approach that bisects the search space on each iteration until the root is found. It takes advantage of the fact that $f(x)$ will be positive on one side of the root and negative on the other.

## Steps of the Bisection Method

1. Choose $x_l$ and $x_u$ such that $f(x_l)$ and $f(x_u)$ are opposite signs. This guarentees the root is between them since the function is continuous.
2. Estimate the root as the average of $x_l$ and $x_u$.
3. Update either $x_l$ or $x_u$ depending on if $x_r$ is positive or negative.
    - if $x_r$ is negative, the root is closer to $x_l$, so $x_u$ should be updated to $x_r$.
    - if $x_r$ is positive, the root is close to $x_u$, so $x_l$ should be updated to $x_r$.

## How the Bisection Method Works

The bisection method leverages the fact that a root must exist between $x_l$ and $x_u$ to split the search region in half at each iteration. If $x_r$ is negative, then the root cannot exist between $x_r$ and $x_u$ because they are both negative and roots only exist between positive and negative numbers[^1].

[^1]: This of course assumes the distance between $x_r$ and $x_u$ is sufficiently small, and the function is sufficiently smooth. Regardless, there must be a root between $x_r$ and $x_l$ in this given example.

## Termination of the Bisection Method

Termination occurs when the error is sufficiently low. In this instance, when the iterative change in $f(x)$ is **very** small, then a good approximation can be ound for the location of the root. The method should terminate when $f(x)$ changes by some small number relative to the previous iteration. This can be characterized by the follow:

$$
err_\% = \frac{x_{\text{r new}} - x_{\text{r old}}}{x_{\text{r old}}}
$$

## Implementation

```py example bisection method with divide by zero considerations
@numerical_methods_py/bisection_method.py
```
