# Simple Pendulum Simulation Steps

A simple pendulum simulation is a basic, yet effective first example of the capacity of a simulator to correctly predict the motion of a system.

## Steps

1. Initialize a multibody system
2. Add a matter subsystem
3. Add a forces subsystem
4. Add the force of gravity
5. Add a rigid body to be the pendulum
6. Add a pin joint connecting the pendulum to the ground with the center of mass of the pendulum at one meter from the center of the pin joint.
7. Resolve the topology of the system (verify it is valid and set it as resolved)
8. Set the system in its default state
9. Set the pendulum to have a velocity of one meter per second at time point zero.
10. Set up a Runge-Kutta-Merson integrator
11. Set the accuracy of the system to 1e-6
12. Tell the system to step to 100


