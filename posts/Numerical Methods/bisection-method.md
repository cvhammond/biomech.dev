# Bisection Method

The bisection method is a root finding approach that bisects the search space on each iteration until the root is found. It takes advantage of the fact that `f(x)` will be positive on one side of the root and negative on the other.

## Steps of the Bisection Method

1. Choose `x_p` and `x_n` such that `f(x_p)` is positive and `f(x_n)` is negative. This guarentees the root is between them since the function is continuous.
2. Estimate the root as the average of `x_p` and `x_n`.
3. Update either `x_p` or `x_n` depending on if `x_r` is positive or negative.
    - if `x_r` is negative, the root is closer to `x_p`, so `x_n` should be updated to `x_r`.
    - if `x_r` is positive, the root is close to `x_n`, so `x_p` should be updated to `x_r`.

## How the Bisection Method Works

The bisection method leverages the fact that a root must exist between `x_p` and `x_n` to split the search region in half at each iteration. If `x_r` is negative, then the root cannot exist between `x_r` and `x_n` because they are both negative and roots only exist between positive and negative numbers[^1].

[^1]: This of course assumes the distance between `x_r` and `x_n` is sufficiently small and the function is sufficiently smooth. Regardless, there must be a root between `x_r` and `x_p` in this given example.

## Termination of the Bisection Method

Termination occurs when the error is sufficiently low. In this instance, when the iterative change in `f(x)` is very very small, then a good approximation can be ound for the location of the root. The method should terminate when `f(x)` changes by some small number relative to the previous iteration. This can be characterized by the follow:

`err_% = (x_r_new - x_r_old) / x_r_old`


