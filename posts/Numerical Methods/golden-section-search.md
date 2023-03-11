# Golden Section Search

Golden section search is a simple univariate optimization solving process with corollaries to the bisection method for root finding.

## The Golden Ratio

The golden ratio is based on the Fibonacci sequence, specifically, it is the convergence of the ratio of a number in the Fibonacci sequence and the number that comes after it. It can be represented as:

$$
R = \frac{\sqrt{5} - 1}{2} \approx 0.618
$$

Optimization along a section of curve with only **one** maximum can leverage the properties of the golden ratio to find the maximum value with the least number of function evaluations[^1].

[^1]: Fewer function evaluations means faster/more efficient.

## Golden Section Search Method

The method for *golden section search* is similar to the bisection method. Starting with a section of curve where the upper and lower bounds are known, $x_1$ is the distance between $x_l$ and $x_u$ times the golden ratio starting at $x_u$. Similarly, $x_2$ is the distance between $x_l$ and $x_u$ times the golden ratio starting at $x_l$.

Compare $f(x_1)$ and $f(x_2)$. Keep the portion of the distance between $x_l$ and $x_u$ that corresponds to the larger result; this is the portion that has the maximum.

This new portion can now be framed the same way as the initial iteration, but the $f(x_1)$ and $f(x_2)$ values now have significance in the new portion because of the golden ratio. As a result, each iteration, only one new function evaluation is needed to converge to the maximum.


