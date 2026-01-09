---
---
Working with a multithreading program is hard, especially when it comes to sharing data between
threads. Double buffering is a technique that is used to solve this problem. This library is created
to make it easier to use double buffering in a multithreading program. The main mechanism for the
synchronization is atomics (std::atomic), thus, if the hardware allows it, this library is
lock-less.
