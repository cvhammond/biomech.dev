# Vector Basis

A vector basis is a set of foundational assumptions about the space the system of interest exists in. Typically, a set of three orthogonal unit vectors are used to describe a system.

For the purposes of biomechanics, typically, a right-handed orthogonal unitary basis is used. This means:

$$
\hat{a}_x \times \hat{a}_y \cdot \hat{a}_z > 0
\newline
90^{\circ} \text{ angles between }\hat{a}_x, \hat{a}_y, \hat{a}_z
\newline
|\hat{a}_x| = |\hat{a}_y| = |\hat{a}_z| = 1
$$

While none of this seems too novel, it acts to define assumptions commonly used in dynamics.

One assumption is that any vector can be written as a sum of scalars times each orthogonal unitary base:

$$
\vec{v} = v_x\hat{a}_x + v_y\hat{a}_y + v_z\hat{a}_z
$$

where

$$
v_x = \vec{v} \cdot \hat{a}_x
\newline
v_y = \vec{v} \cdot \hat{a}_y
\newline
v_z = \vec{v} \cdot \hat{a}_z
$$

## Expressing Vectors in a Different Basis

If two bases are not identical, then some conversion is required to express a vector defined in one basis into a vector defined in another.

For the two dimensional case, this is easy. Say a basis $b$ is rotated $\theta$ about the $\hat{b}_z = \hat{n}_z$ axis, a set of vector equations can be created to describe a vector in basis $b$ that is described in terms of basis $n$.

$$
\hat{b}_x = \cos(\theta) \hat{n}_x + sin(\theta) \hat{n}_y
\newline
\hat{b}_y = -\sin(\theta) \hat{n}_x + cos(\theta) \hat{n}_y
\newline
\hat{b}_z = \hat{n}_z
$$


