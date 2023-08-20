# Midpoint Method

A variation on Euler's method, the midpoint method predicts the value of of the curve at the midpint of the interval.

## Method

Following [Euler's Method](eulers-method) The midpoint equation:

$$
y_{i+1} = y_i + f(x_{i+1/2},\,y_{i+1/2})h
$$

is a variation to improve accuracy by using the slope of the midpoint of the interval rather than $y_i$.
