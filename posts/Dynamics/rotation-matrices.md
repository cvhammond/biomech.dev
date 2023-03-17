# Rotation Matrices

A rotation matrix describes the difference in orientation between two vectors. It can be used to describe the orientation of a vector in the ground reference frame or the orientation of a vector relative to another.

## Definition

Rotation matrices are generally described with the following symbol:

$$
{}^{a}R{}^{\,b}
$$

which describes a rotation matrix from $a$ to $b$.

The rotation matrix between $a$ and $b$ is simply the dot product of the unit vectors in each orthogonal direction added together as a system of linear equations:

$$
{}^{a}R{}^{\,b}:
$$

$$
\hat{a_x} = \hat{a_x} \cdot \hat{b_x} + \hat{a_x} \cdot \hat{b_y} + \hat{a_x} \cdot \hat{b_z}
\newline
\hat{a_y} = \hat{a_y} \cdot \hat{b_x} + \hat{a_y} \cdot \hat{b_y} + \hat{a_y} \cdot \hat{b_z}
\newline
\hat{a_z} = \hat{a_z} \cdot \hat{b_x} + \hat{a_z} \cdot \hat{b_y} + \hat{a_z} \cdot \hat{b_z}
$$

The biggest value of rotation matrices is the ability to express a vector that exists in the $a$ basis in terms of a $b$ basis. This will allow for more complex calculations as questions like "How fast is the bucket on a cable service truck moving?" In those cases, the rotation matrix between the ground and each intermediate body needs to be calculated to find the velocity of the bucket.

This takes advantage of an important property of rotation matrices, namely, that they can be multiplied together.

$$
{}^{a}R{}^{\,d} = {}^{a}R{}^{\,b} \ast {}^{b}R{}^{\,c} \ast {}^{c}R{}^{\,d}
$$

# Simple Rotation Matrices

A simple rotation is one that only occurs in one dimension. Any child's toy that spins will spin with simple rotation, about one axis. If it is necessary to find the rotation matrix between the handle and the disk that is spinning, the following equation can be used:

$$
{}^{a}R{}^{\,b}:
$$

$$
\hat{a_x} = \cos(\theta) + \sin(\theta)
\newline
\hat{a_y} = -\sin(\theta) + \cos(\theta)
\newline
\hat{a_z} = 1
$$

If the toy is spinning around the shared $\hat{a_z} = \hat{b_z}$ axis. This is the defining characteristic of simple rotation; a shared axis about which the rotation is occuring.

If instead, the toy was rotating such that $\hat{a_z} = -\hat{b_z}$, then the negative sign in front of the $\sin(\theta)$ would be on the $\hat{a_x}$ term.

$$
{}^{a}R{}^{\,b}:
$$

$$
\hat{a_x} = \cos(\theta) + -\sin(\theta)
\newline
\hat{a_y} = \sin(\theta) + \cos(\theta)
\newline
\hat{a_z} = 1
$$

Similarly, if the rotation was about the $\hat{a_y} = \hat{b_y}$ axis, the rotation matrix would become:

$$
{}^{a}R{}^{\,b}:
$$

$$
\hat{a_x} = \cos(\theta) + \sin(\theta)
\newline
\hat{a_y} = 1
\newline
\hat{a_z} = -\sin(\theta) + \cos(\theta)
$$

All rotations in physical space can be represented as a series of simple rotations. It is important to define each intermediate frame such that a simple rotation is the only rotational motion between the parent and child frame.

