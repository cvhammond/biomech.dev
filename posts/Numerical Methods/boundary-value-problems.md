# Boundary-Value Problems

Unlike initial-value problems, boundary-value problems contain information about the bounds of ordinary differential equations rather than information about their initial value.

Boundary-value problems are generally based on second-order ODEs, such as the temperature of a beam connected to two walls with known temperatures.

## Shooting Method

The *shooting method* converts a two point boundary-value problem to two initial-value problems.

1. Break the problem into two first order ODEs
2. Guess an initial value for the new variable $z$
3. Numerically integrate the two first order ODEs simultaneously
4. Iterate initial guess for $z$ until the final value of $T$ matches the boundary conditions

This method is named the shooting method because it is based on overshooting or undershooting the boundary condition and changing the value accordingly.

## Finite Difference Method

The *finite difference method* uses central differences for derivatives.

1. Replace the second order derivative with a central difference approximation
2. Discretize the system into equally spaced nodes
3. Apply discretized equation to *interior nodes*
4. Collect all equations into a linear matrix and solve


