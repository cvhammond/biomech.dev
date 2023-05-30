# Rigid Body Simulation

Rigid body simulation is a area of sceince where real or proposed systems are built and tested prior to development in the physical world. These systems are assumed to be rigid and contain only bodies moving relative to each other.

## Impulse-Based Simulation

Impluse-based simulation is a popular method to balance accuracy and computational efficiency. Specifically, for moderately complex problems, impluse-based simulations can predict with high accuracy the useful result of a given simulation. With that being said, the restriction for these systems is that the bodies in the system must be rigid bodies. Otherwise, the inertia of the system will change and the conversation equations will not hold.

## Challenges

The biggest challenge in rigid body simulation is body contact. Since bodies cannot deform, a rigid body contact equation must be developed to describe how a body interacts with another body in a physically realistic way. Rather than taking advance of the unique physical descriptions of rolling, sliding, resting or other forms of contact, all contact is described by a single contact equation.
## Modeling

Remember, when modeling and simulation a system, it should only be as accurate as it needs to be. Eventually, as fidelity increases, the value of increased accuracy is so little, that the simulation becomes worse because it is spending too much time on each calculation. Increased independent variables also increases the noise of the system, potentially increases the error in the system.


