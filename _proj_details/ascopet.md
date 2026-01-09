---
---
Profiling or monitoring performance of a given application is a common task in programming, no least
in C++. One of the way to do that is to measure the time it takes to execute a given piece of code.
This library attempts to provide that functionality by using C++ technique to measure how long a
given scope to execute. Using a RAII type, we can record the time it is created and at the end of
that type lifetime record the time it is destroyed, in effect measuring the lifetime of that object.
If we place the object at the start of a scope, it effectively measure the duration of that scope.

The main motivation of creating this library is that I need a way to monitor my simulation project
in real-time in the simulation app itself. While at it, I want the library to have little to no
overhead on the execution of my simulation. This is achieved by using background thread to manage
the timing records, using thread local storage to rapidly store the timing record, using double
buffering on said thread local storage, and using atomics to locklessly synchronize the double
buffer between the owner thread with the background thread. In the end, I manage to create a library
with about 60ns overhead on my 2.5 GHz 6 core Linux machine.,
