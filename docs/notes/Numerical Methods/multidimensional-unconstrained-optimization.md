# Multidimensional Unconstrained Optimization Methods

A series of methods that solve multidimensional unconstrained optimization.

## Nongradient (Direct) Methods

Nongradient methods are fairly simple, but generally less efficient and ubiquitous than gradient methods.

### Random Search

A brute force method for finding the maximum is by picking random values for the independent variables and evaluating the function. If the latest functon evaluation is larger than the previous maximum, store the new value and the independent variables that were used to find it. As the number of random searches increases, the likelihood of finding the maximum increases.

### Univariate Search

Search along each variable one at a time until a maximum is found. After all maximums are found in turn, start again at the first variable and find the maximum of all the variables again. Stop iterating through this process once the iterative relative error is sufficiently small.

## Gradient Methods

Gradient methods leverage the *gradient* of a function. The gradient is a vector along the direction of the slope of the curve at a given point in all dimensions. Making a step in the direction of the gradient means the value is decreasing in every dimension maximally. Thus, gradient methods tend to find the gradient and then walk in the direction of the gradient to find a maximum.

### Steepest Ascent Method

Steepest ascent is the most basic gradient method. Calculate the gradient by evaluating the function in each dimension around the point of interest, move in that direction a certain amount, calculate the gradient again, and stop when the iterative relative error is low enough.


