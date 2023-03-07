# Machine Precision (Epsilon)

Machine precision, sometimes represented as the Greek letter epsilon is a term to describe how small of a value a computer can represent in floating point representation. If computations are attempted below machine precision, the result will likely be incorrect.

Epsilon is machine specific and should be taken into account when doing iterative numerical methods that rely on stopping once an iterative error falls below a value.

In MATLAB, machine precision can be found with the `eps()` command. It can also be demonstrated by the following script:

```matlab machine precision is evident in floating point computations
x = 1 / 3 * 2
y = 2 / 3
x - y
```

In a mathematical sense, these two values should be the same, but MATLAB will produce the equivalent value to `eps()` as the result.
