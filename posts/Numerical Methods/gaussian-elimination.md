# Gaussian Elimination

A process by which systems of linear equations are solved programmatically, Gaussian elimination is well known and taught in most numerical methods courses.

## Background

Gaussian Elimination is based on concepts from solutions to simple linear systems of equations. This is most easily illustrated in the 2-equation 2-variable system. One such system is:

$$
3x + 3y = 4 (1)
$$

$$
2x + 5y = 3 (2)
$$

This system can be solved by dividing equation 1 by 3, the coefficient of $x$ in equation 1, solving equation 1 for $x$, and substituting that value back into equation 2 to solve for $y$. Lastly, the found value of $y$ can be substituted back into equation 1 to solve for $x$.

Another way of arriving at the same solution is multiplying equation 1 by $\frac{2}{3}$ and subtracting equation 1 from equation 2. This leaves equation 2 as:

$$
3y = \frac{1}{3}
$$

$y$ is simply $\frac{1}{9}$ and, substituting $y$ into equation 1, $x = \frac{10}{9}$.

This method has a few steps:

1. Multiply equation 1 by the coefficient of the first term divided by the coefficient of the same term of equation 2.
2. Subtract equation 1 from equation 2, leaving equation 2 without an $x$ term.
3. Solve for the remaining term.
4. Backsubstitute $y$ into equation 1.

This technique can be chained together for larger equations with each row having one less independent variable than the one above it.

## Issues with Gaussian Elimination

### Division by Zero

In the current system, there is a possibility of dividing by zero. Specifically, if any of the equations in the system have a zero value along the matrix diagonal, the system will break.

### Round-off Errors

Since there are a significant number of computations done to solve this system of equations, there is round-off error that will accumulate.

### Ill-conditioned Systems

If the condition of a system is poor, usually called *ill-conditioned*, then larger errors can be produced because the coefficient division will produce very large numbers and the error will propagate.

### Singular Systems

Some systems are singular. Specifically, a system whose equations resolve down to fewer than $n$ equations for $n$ variables cannot be solved with Gaussian elimination.

## Avoiding Issues with Gaussian Elimination

### Using More Significant Figures

Increasing significant figures directly reduces round-off error, but can increase computation time.

### Pivoting

Pivoting is a process by which a new row is selected for the next iteration of the Gaussian elimination based on how large the coefficients are. If the coefficient of a row is small, when that value is in the denominator, it increases the round-off error. A different row can be selected with a larger coefficient to reduce this issue. This process is called pivoting.

### Scaling

Scaling can also be used to normalize the coefficients of the system to reduce round-off error. This is normally done by reducing the size of an equation such that the largest coefficient of that equation is 1. Then, when pivoting, the largest value can be taken and round-off error is decreased.

## Other Considerations with Gaussian Elimination

### Complex Systems

Languages that allow for complex computations can use Gaussian elimination without issue. Languages that do not support complex computations can break the real and imaginary parts into separate Gaussian eliminations and recombine them again after solving.




