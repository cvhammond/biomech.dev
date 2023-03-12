# Trapezoidal Rule

The trapezoidal rule is the first-order form of the Newton-Cotes integration formulas. It uses a straight line between adjacent data points to approximate a curve for purposes of calculating the definite integral.

## Method

The trapezoidal rule involves the following steps:

- split the curve into equal sections where each endpoint $a,b$ and their function evaluations $f(a), f(b)$ are known.
- calculate the area under the curve for section 1:

$$
\begin{equation}
I = (b_1 - a_1)\frac{f(a_1) + f(b_1)}{2}
\end{equation}
$$

- sum and repeat for all sections

Equation 1 is derived from the integral of the equation of the line between $a$ and $b$.

## Error

The error equation for the trapezoidal rule is:

$$
E_t = -\frac{1}{12} f''(\xi)(b-a)^3
$$

Essentially, if the underlying equation is not linear in nature, the approximation of the integral will have significant error.
