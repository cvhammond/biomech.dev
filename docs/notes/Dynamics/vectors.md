# Vectors

A vector refers to a quantity with both a magnitude and direction. It is typically used to describe a force, velocity, acceleration, torque, or angular velocity, among others.

## Zero Vector

A zero vector ($\vec{0}$) is a vector whose magnitude is zero.

## Unit Vector

A unit vector is a vector whose magnitude is one. It can act to point in a direction without conveying magnitude information.

$$
\hat{v} = \frac{\vec{v}}{|\vec{v}|}
$$

## Equal Vectors

Two vectors are considered equal if their magnitude and directions are both the same, even if their location is different.

## Vector Addition

Vector addition is done graphically by lining up the tail of one vector against the tip of the other vector and their sum is the new vector between the first end and the second tip.

### Cumulative Property

$$
\vec{a} + \vec{b} = \vec{b} + \vec{a}
$$

### Associative Property

$$
(\vec{a} + \vec{b}) + \vec{c} = \vec{a} + (\vec{b} + \vec{c}) = \vec{a} + \vec{b} + \vec{c}
$$

### Addition of zero vector

$$
\vec{a} + \vec{0} = \vec{a}
$$

## Vector Multiplied or Divided by a Scalar

When multiplying or dividing by a scalar, the magnitude of the vector changes according to the operation. If the scalar is negative, the direction of the vector reverses, this is called a change in *sense*.

## Vector Negation or Subtraction

$-\vec{a}$ is a negation that causes the vector to change its *sense*, pointing it in the opposite direction.

Vector subtraction is the same as vector addition, but the subtracted term's negation is instead added:

$$
\vec{a} - \vec{b} \triangleq \vec{a} + -\vec{b}
$$

## Vector Dot Product

The vector dot product is:

$$
\vec{a} \cdot \vec{b} \triangleq |\vec{a}| |\vec{b}| cos(\theta)
$$

and is a fundamental operation of vectors. It can be used to:

- calculate an angle between two vectors
- calculate a vectors magnitude
- change a vector equation into a scalar equation
- calculate a unit vector in the direction of $\vec{v}$
- project a vector $\vec{v}$ in the direction of $\vec{b}$

There are a few properties that come with dot products.

### Dot Product With a Zero Vector

$$
\vec{a} \cdot \vec{0} = 0
$$

### Dot Product of Perpendicular Vectors

$$
\vec{a} \cdot \vec{b} = 0 \quad \text{if}\,\,\, \vec{a} \perp \vec{b}
$$

### Dot Product of Parallel Vectors

$$
\vec{a} \cdot \vec{b} = \pm |\vec{a}||\vec{b}|
$$

### Commutative Property of Dot Product

$$
\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}
$$

### Distributive Property of Dot Product

$$
\vec{a} \cdot (\vec{b} + \vec{c}) = \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c}
$$

## Vector Cross Product

The cross product of two vectors is defined as:

$$
\vec{a} \times \vec{b} \triangleq |\vec{a}||\vec{b}| \sin(\theta) \hat{u}
$$

where $\hat{u}$ is the vector perpendicular to both $\vec{a}$ and $\vec{b}$.

Cross products can be used to calculate the following:

- Moment of a force ($\vec{r} \times \vec{F}$)
- Velocity ($\vec{v} = \omega \times \vec{r}$)
- Perpendicular vectors ($\vec{a} \times \vec{b}$ is perpendicular to both $\vec{a}$ and $\vec{b}$)
- Area of a triangle ($\delta (\vec{a},\vec{b}) = \frac{1}{2}|\vec{a} \times \vec{b}|$)
- Determinants ($\vec{a} \times \vec{b}$ is the determinant of an associated 3x3 matrix)

The following properties exist for cross products:

### Cross Product With a Zero Vector

$$
\vec{a} \times \vec{0} = \vec{0}
$$

### Cross Product of a Vector With Itself

$$
\vec{a} \times \vec{a} = \vec{0}
$$

### Cross Product of Parallel Vectors

$$
\vec{a} \times \vec{b} = \vec{0} \quad \text{if} \,\,\, \vec{a} \parallel \vec{b}
$$

### Distributive Property of Cross Products

$$
\vec{a} \times (\vec{b} + \vec{c}) = \vec{a} \times \vec{b} + \vec{a} \times \vec{c}
$$

### Cross Products are NOT Associative

$$
\vec{a} \times (\vec{b} + \vec{c}) \neq (\vec{a} \times \vec{b}) \times \vec{c}
$$

