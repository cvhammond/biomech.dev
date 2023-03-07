# Error Propagation

In instances where error exists in values and these values are used together, their result has *even more* error. This phenomenon is called error propagation.

When describing error propagation, typically the solution is given in terms of an approximate solution plus-or-minus an error term. Calculating that error term is important for describing the confidence of the approximation.

## Functions of a Single Variable

For functions of a single variable, error can be estimated with the following equation:

$$
err = |f'(x_0)| * (x_1 - x_0)
$$

Where $x_0$ is the known measurement and $x_1$ is the amount of error. $x_1$ ccan be thought of as the uncertainty: "15 inches give or take *0.1 inches*."

## Functions of Multiple Variables

Generalizing this [single variable](#functions-of-a-single-variable) approach, we can simply take the sum of the partial derivative of each variable. For a two variable case, we can use:

$$
err(u,v) = |\frac{\partial{f}}{\partial{u}}|(u_1 - u_0) + |\frac{\partial{f}}{\partial{v}}| * (v_1 - v_0)
$$

Where $u$ and $v$ are two approximations with uncertainty.


