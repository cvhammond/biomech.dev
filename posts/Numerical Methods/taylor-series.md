# Taylor Series

Taylor's theorem states that smooth functions can be closely approximated as a polynomial. This is done using Taylor series, which predicts the value of a function at one point given the value of the function at another.

## Building a Taylor Series From Scratch

The following is an series of increasing complex steps to create a Taylor series in an attempt to describe the phenomenon of Taylor's theorem without being overwhelming. To get started, the following prompt may be useful:

> You know the value of f(x_0) and want to determine the value of the nearby f(x_1). Find an approximate value for f(x_1) based on the facts given for each approximation.

### Zero-order Approximation

Firstly, a *zero-order approximation* of a Taylor series is as follows:

f(x_1) ~= f(x_0)

> "The value of a function close to a known value of a function is approximately the same."

Since the only information we know is that the values are close together, we can approximate fairly accurately that f(x_1) is approximately f(x_0).

### First-order Approximation

Additional terms can be added to make the answer more correct. In first-order approximations, assume that we know the slope of the function at f(x_0). A *first-order approximation* can be represented as follows:

f(x_1) ~= f(x_0) + f'(x_0) * (x_1 - x_0)

> "If we know the slope of the curve at f(x_0), we can make a better approximation by picking a value in the direction of the slope for f(x_1)."

In a first-order approximation, the slope is used to approximate the new value more accurately than just the zero-order approximation.

### Second-order Approximation

Following this same logic, the *second-order approximation* assumes the second derivative of f(x_0) is known. In this case, an even better approximation can be made for f(x_1).

f(x_1) ~= f(x_0) + f'(x_0) * (x_1 - x_0) + f''(x_0)/2! * (x_1 - x_0)^2

Starting at the second-order approximation, things get weird... but a pattern emerges. Each resulting order is a factorial less important and the distance between the points is more significant.

### Nth-order Approximation

The Nth term of a Taylor series can be represented as:

f^(n)(x_0)/n! * (x_1 - x_0)^n

## Formal Definition

A Taylor series is the sum of the first, second, third... Nth terms until an exact answer is found. Polynomials of finite terms can be represented exactly, other functions cannot. For non-exact approximations, there exists an error term.

### Taylor Series Error Term (Remainder)

The remainder for a given-order approximation cannot be known, assuming the function you are approximating is not known. As a result, we can only approximate the error given our understanding of the underlying mathematics (approximate the error of the approximation, eh?). The error for a Nth-order approximation is:

R_n = O((x_1 - x_0)^n)


