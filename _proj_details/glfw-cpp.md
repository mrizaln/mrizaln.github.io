---
---
C is not my favorite language. It lacks type safety, namespaces, and especially RAII. GLFW is a C
library that is used to create windows and OpenGL contexts. This project is essentially a wrapper
that fixed the issues I have with GLFW. The wrapper is designed to be type safe, RAII, and easy to
use. This library also eliminates the need for global/hidden state that GLFW has (partially, the
global state in the C++ side still exists to communicate with the global state on the C side) by
wrapping the main glfw object as a RAII object. This library also change the way of the events
handled, instead of using callback functions, it uses polling mechanism to get the events. The
biggest aim of this GLFW is to make it easy to create multiple windows that may live independently
on its own thread which I considers as a very important feature.
