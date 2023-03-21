# Dynamic Constraints

Dynamic constraints are constraints on the dynamics of a multibody system that prevent free motion. These constraints can help to make the system more deterministic and reduce modeling complexity.

## Rod

A *rod* is a constraint that indicates that the two points at the end of the rod are always the same distance apart.

## Rope

A *rope* is a constraint that requires the distance between two points that indicate the ends of the rope are always a certain distance apart **or less**.

## Separator

A *separator* is a constraint that requires the distance between two points be **at least** some distance apart.

## Rolling

A *rolling* constraint indicates that the velocity of the point in contact is moving the same speed with respect to both bodies.

## Gears

Two bodies with a *gear* constraint have the same $\omega r$. If $r$ is bigger for one gear, then its $\omega$ is smaller in proportion.


