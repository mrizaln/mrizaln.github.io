---
---
To complete my undergraduate study I have to complete final project with an undergraduate thesis as
the final result. This agent-based traffic model is the final project I've decided to do (you can
look up my thesis [here](http://repository.ipb.ac.id/handle/123456789/171692)).

The main inspiration for this project is a paper made by Sugihakim and Alatas in 2015
([doi](https://doi.org/10.1016/j.physleta.2015.09.048)). In it, Sugihakim and Alatas used
agent-based modeling to simulate the dynamics of traffic. There are two important elements to the
model, the first is the road as the system in which the simulation will be performed and analyized,
and the second is vechicle as the agent that lived in the system. The dynamics is defined by the
interaction between these agents living in the system. The author only defined the a few interaction
rule between them but it successfully exhibit a convincing traffic dynamic. However, there is one
major point that is limitation that this model have, the model only simulate a system with static
number of agents. There is no new agents entering the system or leaving the system.

The model I've created consists of the same system and agents with the addition of new agents able
to enter/exit the system and the addition of bottleneck. The former allows the model to simulate
better an actual road segment while the latter tries to <i>trigger</i> traffic congestion. I
collected various data about the traffic on the road segment and then the data is compared to
[Three-Phase Traffic Theory](https://en.wikipedia.org/wiki/Three-phase_traffic_theory), a
theoretical traffic modeling based on real-world data by Boris Kerner.

At the time, when I was still deciding what project to tackle I was learning C++ and OpenGL. So, I
decided why not just use C++ to write the simulation and OpenGL as the rendering system. It was a
very major undertaking to say the least. But I managed to complete it and able to work the project
completely. If you are interested, you could try seeing the simulation in action
**[here](https://mrizaln.github.io/projects/traffic-model/index.html)** (or you could press the
project URL link above).

There many challenges I have encountered in this endeavour. The obvious one is C++ language itself
and OpenGL, I learned them previously but not to the very deep level of understanding. I am learning
both at the same time I write the core program. The next challenge is how to get data from the
simulation in which I opted to using TCP to solve this. While the simulation is running it also
collects data and then acts as server in which multiple TCP clients can connect to it and receive
the simulation data in real-time. This implementation requires serialization of course: I used
Newline-delimited JSON as the format which is stream friendly. The other challenge I encountered is
splitting simulation logic/loop from the rendering logic which requires even more techniques. I
learned about multithreading, synchronization using mutex, lockless programming, double buffering,
etc.

Also, while I'm carrying out this project, I also have created many other projects that I used as
dependencies of this project:

- sync-cpp: a very simple synchronized wrapper (similar to Rust's Mutex)
- glfw-cpp: RAII-based GLFW wrapper with multithreading in mind
- circbuf: Circular buffer implementation
- doublebuf: Lock-free double buffering mechanism
- ascopet: Asynchronous scope time tracing library
