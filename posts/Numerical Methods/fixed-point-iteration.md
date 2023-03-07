# Fixed Point Iteration

Fixed point iteration is a simple open method of root finding that illustrates the difference between open and bracketed methods.

The first step in using fixed point iteration is converting the model to the form `x = g(x)` where `g(x)` is a modification of `f(x)` such that `x` can exist on its own. This reformatting can occur by rearrangement:

`f(x) = sin(x) + x` becomes `x = -sin(x)`

or by multiplying both sides by `x` and rearranging to solve for `x`.

## Finding Roots with Fixed Point Iteration

Fixed point iteration is a simple iterative process that stops when the error is sufficiently low. Each iteration continues as follows:

1. Find `x_1` using the reformulation from above. (`x_1 = -sin(x_0)`)
2. Calculate the [iterative error](/error)
3. If the error is sufficiently small, stop. Otherwise, `x_0 = x_1` and the next iteration begins, solving for `x_1` again.

## How Fixed Point Iteration Works

Fixed point iteration works by making an informed guess of the root, then using that informed guess to guess again, and again... and again.

This method walks along the curve until a root is found, thus it is an *open method*. In instances where the root is far away or non-existant, it will walk along the curve forever. It is important to include checks to stop the algorithm if it has walked too far and has not yet found a root.
