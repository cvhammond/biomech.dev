# Linear Regression

Fitting noisy data to a straight line in two dimensions is called linear regression. It is an introductory technique that can be used when confident that the underlying data should represent a linear relationship.

## Linear Regression Model

The model for linear regression is as follows:

$$
\begin{equation}
y = a_0 + a_1 x + e
\end{equation}
$$

where $a_0$ and $a_1$ represent the y-intercept and slope, respectively. $e$ represents the error between the true $y$ value and the $y$ value determined by the model.

## Finding the Best Linear Regression Parameters

If we want to find the line that best approximates the data, it is the same line that minimizes the value of $e$. There exists some $a_0$, $a_1$ for which $e$ is minimized across all points in the data.

Rearranging the values of equation 1:

$$
\begin{equation}
e = y - a_0 - a_1 x
\end{equation}
$$

The error between a point and a line can be solved for.

## Least-Squares Linear Regression

Finding the line that minimizes the error across all point is a simple extension of equation 2:

$$
\begin{equation}
S_r = \sum_{i=1}^{n} e_i^2 = \sum_{i=1}^{n} (y_i - a_0 - a_1 x_i)^2
\end{equation}
$$

This can also be thought of as:

$$
\begin{equation}
S_r = \sum_{i=1}^{n} (y_{i, measured} - y_{i, model})^2
\end{equation}
$$

The squared term is added to remove the issue of negative errors from values above the line and also acts to increase the importance of points far from the line since their error is doubled.

